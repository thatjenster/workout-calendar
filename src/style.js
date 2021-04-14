import styled from 'styled-components'
import backgroundImage from './static/background.jpeg'

export const _BodyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-top: 102px;
  h1 {
    font-size: 64px;
    font-weight: 500;
    line-height: 100%;
    color: #5253a3;
    max-width: 292px;
    padding: 0 32px;
    margin: 0;
  }
  p {
    font-size: 24px;
    margin: 0;
    max-width: 284px;
    text-align: right;
    span {
      color: #5253a3;
      font-size: 36px;
      font-weight: 500;
      line-height: 100%;
      display: block;
    }
  }
`