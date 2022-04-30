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

export const HeaderContent = styled.div<{ color: string }>`
  ${({ color }) => css`
    width: 100%;
    background-color: ${color || '#ffff'};
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
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 4px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: 6px;
      border: 1px solid ${theme.colors.display[500]};
    }
  `}
`

export const FooterContent = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    border-top: 1px solid ${theme.colors.display[300]};
    padding: 4px;

    span {
      margin-left: auto;

      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${color};
    }
  `}
`
