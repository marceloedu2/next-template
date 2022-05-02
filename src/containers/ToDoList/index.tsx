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
import { useEffect, useState } from 'react'
import produce from 'immer'

import { TStage, TTask } from '@/pages/lista-de-tarefas'
import { UPDATE_COLUMN_TASK } from '@/graphql/mutations/tasks'
import { useApolloClient } from '@apollo/client'
import { GET_STAGES } from '@/graphql/queries/stages'
import { GET_TASKS } from '@/graphql/queries/tasks'

const ToDoList: React.FC = () => {
  const apolloClient = useApolloClient()
  resetServerContext()

  const [listToDo, setListToDo] = useState<TStage[]>([] as TStage[])

  const handleToDo = async () => {
    const {
      data: { stages }
    } = await apolloClient.query({
      query: GET_STAGES
    })

    const columns = await Promise.all(
      stages.map(async ({ id, name, color }: TStage) => {
        const {
          data: { tasks }
        } = await apolloClient.query({
          query: GET_TASKS,
          variables: {
            stageId: id
          }
        })
        return {
          id,
          name,
          color,
          cards: tasks || []
        }
      })
    )

    setListToDo(columns)
  }

  const onDragEnd = async (result: DropResult) => {
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

    await setListToDo(newListToDo)

    if (source.droppableId === destination.droppableId) {
      await insetSource(newListToDo[sourceColumnIndex].cards as TTask[])
    } else {
      const sourceColumn = newListToDo[sourceColumnIndex].cards as TTask[]
      const destinationColumn = newListToDo[destinationColumnIndex]
        .cards as TTask[]

      await insetSource(sourceColumn?.length > 0 ? sourceColumn : [])
      await insetSource(destinationColumn?.length > 0 ? destinationColumn : [])
    }
  }

  const insetSource = (listCard: TTask[]) => {
    console.log({ listCard })

    listCard?.forEach(async (card, index) => {
      console.log({
        id: Number(card.id),
        stage: Number(card.stage.id),
        order: Number(index + 1)
      })

      const { errors } = await apolloClient.mutate({
        mutation: UPDATE_COLUMN_TASK,
        variables: {
          id: Number(card.id),
          stage: Number(card.columnId),
          order: Number(index + 1)
        }
      })
      if (errors) {
        console.log('error')

        // return addToast({
        //   title: 'Erro de conexão.',
        //   description: 'Verifique sua internet e tente novamente mais tarde!',
        //   type: 'error'
        // })
      }
    })
  }

  useEffect(() => {
    handleToDo()
  }, [])

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
