import styled from '@emotion/styled'
import mq from '../styles/util/mq'

export const AboutProfileContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  & .round-image {
    border-radius: 8px;
  }
`

export const ProfileText = styled.div`
  word-break: keep-all;
  padding: 0 20px;
  min-width: 300px;
  max-width: 400px;
  line-height: 25px;
  ${mq()({
    marginTop: ['20px', '0'],
  })}
`

export const ProfileTextSub = styled.span`
  color: var(--tx-sub-dark);
`
