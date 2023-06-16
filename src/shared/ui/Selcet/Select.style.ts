import { styled } from "styled-components"
import { BaseStyle } from "../BaseStyle/BaseStyle"

export const DropListWrapper = styled.div`
  position: relative;
  ${BaseStyle}
  height: 1em;
  padding-right: 22px;
`

export const DropListArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  width: 10px;
`

export const DropListList = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 20px 0 rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-sizing: border-box;
`

export const DropListItem = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 8px 12px;
  &:hover {
    cursor: pointer;
  }
`
