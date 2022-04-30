import apolloClient from '@/configs/apolloApi'
import ToDoListContainer from '@/containers/ToDoList'
import { GET_STAGES } from '@/graphql/queries/stages'
import { GET_TASKS } from '@/graphql/queries/tasks'
import LayoutDefault from '@/layout/default'

export type TStage = {
  id: string
  name: string
  color: string
  cards?: TTask[]
}

export type TTask = {
  id: string
  description: string
  priority: {
    id: string
    name: string
    color: string
  }
  task_type: {
    id: string
    name: string
  }
  user: {
    id: string
    username: string
  }
}

const ToDoList: React.FC<{ columns: TStage[] }> = ({ columns }) => {
  return (
    <LayoutDefault>
      <ToDoListContainer columns={columns} />
    </LayoutDefault>
  )
}

export async function getServerSideProps() {
  try {
    const {
      data: { stages }
    } = await apolloClient.query({
      query: GET_STAGES,
      fetchPolicy: 'no-cache'
    })

    const columns = [] as TStage[]

    await stages.forEach(async ({ id, name, color }: TStage) => {
      const {
        data: { tasks }
      } = await apolloClient.query({
        query: GET_TASKS,
        variables: {
          stageId: id
        },
        fetchPolicy: 'no-cache'
      })

      await columns.push({
        id,
        name,
        color,
        cards: tasks || []
      })
    })

    return {
      props: {
        columns
      }
    }
  } catch {
    return {
      props: { columns: [] }
    }
  }
}

export default ToDoList
