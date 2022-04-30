import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GET_TASKS($stageId: ID!) {
    tasks(where: { stage: $stageId }) {
      id
      created_at
      description
      priority {
        id
        name
        color
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
