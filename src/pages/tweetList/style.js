import styled from "styled-components";
import { screen } from "../../utils/screeSize";

export const TweetListWrap = styled.div`
    padding: 40px 64px;
    display: flex;
    flex-direction: column;
    
    @media ${screen.mobileL} {
        padding: 0px 20px;

    }
    `;
export const Alpha = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
    @media ${screen.mobileL} {
        flex-wrap: wrap;
    }
    .primaryButton {
        @media ${screen.mobileL} {
        width: 100%;
    }
    }
`;
export const Title = styled.div`
    @media ${screen.mobileL} {
            width: 100%;
            padding-top: 20px;
        }
`;
export const Heading = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #06123C;
    margin: 0;
    @media ${screen.mobileL} {
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #727998;
    margin: 4px 0 0 0;
    @media ${screen.mobileL} { 
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 24px;
    }
`;
export const CardContainer = styled.div`
     display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${screen.tablet} {
        flex-wrap: wrap;
    }
`
export const CardWrap = styled.div`
    width: 24%;
    @media ${screen.tablet} {
        width: 48%;
    }
    @media ${screen.mobileL} {
        width: 100%;
    }
`;


export const PaginateWrap = styled.div`
    padding: 40px 0;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${screen.mobileM} {
            width: 100%;
        }
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #596275;
        margin: 0 21px;
        cursor: pointer;
    }
    p.active {
        width: 32px;
        height: 32px;
        background: #009EDB;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #FAFAFA;
        cursor: pointer;

    }
`;
export const Border = styled.div`
    border-bottom: 1px solid yellow;
` 