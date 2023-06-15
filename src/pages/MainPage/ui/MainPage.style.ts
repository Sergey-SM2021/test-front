import { styled } from "styled-components"

export const MainPageWrapper = styled.form`
  padding: 24px;
`

export const MainPageHeader = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: gray 1px solid;
  padding-bottom: 24px;
`

export const HeaderAvatar = styled.div`
  background-color: #d5e4f7;
  height: 80px;
  width: 80px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`

export const HeaderName = styled.div`
  font-weight: 600;
  color: #333333;
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 16px;
`

export const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #5558fa;
`

export const MainPageBody = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  @media (max-width: 720px) {
    align-items: normal;
  }
`

export const BodyFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
