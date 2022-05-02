import ToDoListContainer from '@/containers/ToDoList'

import LayoutDefault from '@/layout/default'

export type TStage = {
  id: string
  name: string
  color: string
  cards?: TTask[]
}

export type TTask = {
  id: string
  columnId?: string
  description: string
  priority: {
    id: string
    name: string
    color: string
  }
  stage: {
    id: string
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

const ToDoList: React.FC = () => {
  return (
    <LayoutDefault>
      <ToDoListContainer />
    </LayoutDefault>
  )
}

export async function getServerSideProps() {
  return {
    props: { columns: [] }
  }
}

export default ToDoList
