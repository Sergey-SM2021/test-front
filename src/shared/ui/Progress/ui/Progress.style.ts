import { styled } from "styled-components"

export const ProgressWrapper = styled.div`
  display: flex;
  position: relative;
`

export const ProgressStepLine = styled.div<{ isPassed: boolean }>`
  width: calc(100% / 2);
  height: 8px;
  background-color: ${(props) =>
		props.isPassed ? props.theme.blue : props.theme.grayLight};
`

export const ProgressStepItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  gap: 12px;
  transform: translateY(-25%) translateX(-50%);
`

export const ProgressStepIcon = styled.div<{ disabled: boolean }>`
  min-width: 16px;
  min-height: 16px;
  border-radius: 100%;
  background-color: ${(props) =>
		props.disabled ? props.theme.gray : props.theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProgressStepPending = styled.div`
  background-color: #fff;
  width: 3px;
  height: 3px;
`

export const ProgressStepNumber = styled.div``
