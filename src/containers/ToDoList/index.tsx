import Card from './components/Card'
import * as S from './styles'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
  resetServerContext
} from 'react-beautiful-dnd'
import { useState } from 'react'
import produce from 'immer'

import { TStage } from '@/pages/lista-de-tarefas'

const ToDoList: React.FC<{ columns: TStage[] }> = ({ columns }) => {
  resetServerContext()

  const [listToDo, setListToDo] = useState<TStage[]>(columns)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { source, destination } = result

    const sourceColumnIndex = listToDo.findIndex(
      listCard => Number(listCard.id) === Number(source.droppableId)
    )

    const destinationColumnIndex = listToDo.findIndex(
      listSales => String(listSales.id) === String(destination?.droppableId)
    )

    const newListToDo = produce(listToDo, (draft: any) => {
      const dragged = {
        ...draft[sourceColumnIndex].cards[source.index],
        columnId: destination?.droppableId
      }

      draft[sourceColumnIndex].cards.splice(source.index, 1)

      draft[destinationColumnIndex].cards.splice(destination?.index, 0, dragged)
    })

    setListToDo(newListToDo)
  }

  return (
    <S.Container>
      <S.Content>
        <DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result)}>
          {listToDo?.length > 0 &&
            listToDo.map(({ id, name, color, cards }) => (
              <Droppable key={`${name}-${id}`} droppableId={String(id)}>
                {(
                  provided: DroppableProvided,
                  snapshot: DroppableStateSnapshot
                ) => (
                  <S.ContentToDo
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    <S.Header bgColor={color}>{name}</S.Header>
                    <div>
                      {cards?.map((props, index) => (
                        <Draggable
                          key={props.id}
                          draggableId={String(props.id)}
                          index={index}
                        >
                          {(
                            provided: DraggableProvided,
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            snapshot: DraggableStateSnapshot
                          ) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card key={props.description} {...props} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </S.ContentToDo>
                )}
              </Droppable>
            ))}
        </DragDropContext>
      </S.Content>
    </S.Container>
  )
}

export default ToDoList
