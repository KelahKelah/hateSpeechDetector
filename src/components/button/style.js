import styled from "styled-components";
import { screen } from "../../utils/screeSize";

export const ButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    background: #009EDB;
    border-radius: 8px;
    border-style: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    @media ${screen.tablet} {
        font-size: 12px 15px ;
        padding: 10px;
    }
    @media ${screen.mobileL} {
        flex-wrap: wrap;
        font-size: 12px;
        padding: 10px;
    }
`;