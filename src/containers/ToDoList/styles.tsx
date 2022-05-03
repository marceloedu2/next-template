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
    background-color: ${theme.colors.display[50]};

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
  `}
`

export const ContentCard = styled.div`
  overflow-x: auto;
  padding: 8px;
`
export const Header = styled.div<{ bgColor: string }>`
  ${({ theme, bgColor }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    display: flex;
    font-size: medium;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};

    > b {
      color: ${theme.colors.display[900]};
    }

    > p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      padding: 2px;
      font-size: 14px;
      border-radius: 50%;
      color: ${theme.colors.display[900]};
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;

      button {
        svg {
          width: 30px;
          height: 30px;
          margin-right: 6px;

          stroke: ${theme.colors.display[600]};

          transition: all 0.1s linear;
        }

        &:hover {
          svg {
            stroke: ${theme.colors.stone[500]};
          }
        }
      }
    }
  `}
`
