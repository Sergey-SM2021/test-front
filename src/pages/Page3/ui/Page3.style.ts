import { Stack } from "shared/ui/Stack/Stack.style"
import { TextArea } from "shared/ui/TextArea.style"
import { styled } from "styled-components"

export const Page3Wrapper = styled.form``

export const Page3Inner = styled.div`
  padding-bottom: 66px;
  position: relative;
`

export const Page3Counter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Page3TextAreaWrapper = styled.div`
  position: relative;
`

export const Page3TextArea = styled(TextArea)`
  width: 100%;
  box-sizing: border-box;
  height: 84px;
  resize: none;
`

export const Page3Actions = styled(Stack)`
  justify-content: stretch;
  flex-direction: column-reverse;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`