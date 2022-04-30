import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 60px;

    @media (max-width: ${theme.breakpoint.md}) {
      padding: 40px 0;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    align-items: center;
    width: 100%;
    height: 100%;

    overflow-x: auto;

    @media (max-width: ${theme.breakpoint.md}) {
      padding: 0 24px;
    }
  `}
`

export const ContentToDo = styled.div<{ isDraggingOver: boolean }>`
  ${({ theme, isDraggingOver }) => css`
    display: flex;
    width: 100%;
    min-width: 250px;
    max-width: 300px;
    height: 98%;
    flex-direction: column;
    overflow-y: auto;
    margin: 4px;
    background-color: ${isDraggingOver
      ? theme.colors.display[200]
      : theme.colors.display[100]};
    box-shadow: ${theme.colors.Shadow};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 5px 5px 8px -7px rgba(0, 0, 0, 0.16);

    > div {
      overflow-x: auto;
      padding: 8px;
    }
  `}
`
export const Header = styled.h3<{ bgColor: string }>`
  ${({ bgColor }) => css`
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
  `}
`
