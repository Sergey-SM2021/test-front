import { Stack } from "shared/ui/Stack/Stack.style"
import { styled } from "styled-components"

export const Page2Wrapper = styled.form`
`

export const Page2AdvantagesItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Page2Inner = styled.div`
  padding-bottom: 66px;
`

export const Page2Actions = styled(Stack)`
  justify-content: stretch;
  flex-direction: column-reverse;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
