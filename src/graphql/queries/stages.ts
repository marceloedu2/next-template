import { gql } from '@apollo/client'

export const GET_STAGES = gql`
  query GET_STAGES {
    stages {
      id
      name
      color
    }
  }
`
