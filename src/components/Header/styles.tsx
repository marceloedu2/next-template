import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 16px 32px;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.Default};
  `}
`
