import styled from "styled-components";
import { screen } from "../../utils/screeSize";

export const CardWrap = styled.div`
    background: #FEFEFE;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 20px 24px -4px rgba(164, 188, 237, 0.02), 0px 8px 8px -4px rgba(16, 24, 40, 0.02);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px;
    margin-top: 20px;
    height: 200px;
`;
export const Alpha = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Beta = styled.div`
  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #2A303D;
    padding-top: 12px;

    @media ${screen.tablet} {
        flex-wrap: wrap;
        font-size: 12px;
    }
    @media ${screen.mobileS} {
        flex-wrap: wrap;
        font-size: 12px;
    }
  }
`;
export const Gamma = styled.div`
  display: flex;
  justify-content: flex-end;

`;
export const Date = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #707275;
`;
export const UserDetail= styled.div`
    display: flex;
`;
export const NameWrap = styled.div`
    margin: 0 16px;
`;

export const Name = styled.h6`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #2A303D;
    margin: 0;
`;
export const Username = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #596275;
    margin: 0;
`;
