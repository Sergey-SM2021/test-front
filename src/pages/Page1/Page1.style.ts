import { Stack } from "shared/ui/Stack/Stack.style"
import { styled } from "styled-components"

export const Page1Wrapper = styled.form``

export const Page1Inner = styled.div`
  padding-bottom: 88px;
  @media (min-width: 870px) {
    max-width: 50%;
  }
`

export const Page1Actions = styled(Stack)`
  justify-content: stretch;
  flex-direction: column-reverse;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
