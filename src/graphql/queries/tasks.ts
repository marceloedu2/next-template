import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GET_TASKS($stageId: ID!) {
    tasks(where: { stage: $stageId }, sort: "order") {
      id
      order
      created_at
      description
      priority {
        id
        name
        color
      }
      stage {
        id
      }
      task_type {
        id
        name
      }
      user {
        id
        username
      }
    }
  }
`
