import { gql } from '@apollo/client'

export const GET_STAGES = gql`
  query GET_STAGES {
    stages(sort: "order") {
      id
      name
      color
    }
  }
`
