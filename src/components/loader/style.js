import styled from "styled-components";

export const LoaderContainer = styled.div` 
    width: 100%;
    height: 100%;
    z-index: 1200;
    background: rgba(0.2, 0.2, 0.2, 0.2);
    position: fixed;
    top: 0;
    left: 0;
`
export const Load = styled.div` 
    width: 0%;
    height: 5px;
    border-radius: 0px 20px 20px 0px;
    background: #009EDB;
    animation: expand 1s linear infinite;
    @keyframes expand { 
        0% {
        width: 0%;
        }
        100% {
        width: 100%
        }
    }
 `
  
 
  