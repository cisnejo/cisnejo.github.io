import styled from 'styled-components'
import { PageContainer } from './PageStyles'
import schedule from '../assets/schedule.png'
const ScheduleImage = styled.img`
object-fit: contain;
  display:block;
  width: auto;
  height: auto;
    max-width:50rem;
    max-height:60rem;
    `
export function Schedule() {

    return (
        <PageContainer >
            <ScheduleImage src={schedule} alt="" />
        </PageContainer>
    )
}