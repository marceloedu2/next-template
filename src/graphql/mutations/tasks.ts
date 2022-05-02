import { gql } from '@apollo/client'

export const UPDATE_COLUMN_TASK = gql`
  mutation UPDATE_COLUMN_TASK($id: ID!, $stage: ID!, $order: Int!) {
    updateTask(
      input: { where: { id: $id }, data: { stage: $stage, order: $order } }
    ) {
      task {
        id
        order
        description
        stage {
          id
        }
      }
    }
  }
`
