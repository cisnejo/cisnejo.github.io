import { keyframes } from "styled-components";
import styled from "styled-components";

const fadeInAnimation = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

export const PageContainer = styled.div`
    display:flex;
    flex:1;
    animation:${fadeInAnimation} 1.5s forwards ;
    z-index:-1;
`

