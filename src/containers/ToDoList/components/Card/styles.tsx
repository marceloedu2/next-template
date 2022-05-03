import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    margin: 8px;
    box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.09);
    border-radius: 4px;
    background-color: ${theme.colors.Background};
    overflow: hidden;
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.display[400]};
    padding: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }
  `}
`

export const BodyContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 4px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: 6px;
      box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.09);
    }
  `}
`

export const FooterContent = styled.div<{ color: string }>`
  ${({ theme, color }) => css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${theme.colors.display[300]};
    div {
      display: flex;
      padding: 4px;
    }

    > span {
      width: 100%;
      height: 5px;
      background-color: ${color};
    }
  `}
`
