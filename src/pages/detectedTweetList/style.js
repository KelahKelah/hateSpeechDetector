import styled from 'styled-components'
import { screen } from '../../utils/screeSize'
export const DetectedTweetListWrap = styled.div`
    max-width: 100%;
    padding: 52px 64px;
` 
export const Alpha = styled.div`
    margin-bottom: 52px;
` 

export const Beta = styled.div`
   display: flex;
   justify-content: space-between;
` 
export const CardWrapRedContainer = styled.div`
    display: flex;
    width: 49.2%;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #FFFAFA;
    border-radius: 16px;
` 
export const CardWrapGreenContainer = styled.div`
    display: flex;
    width: 49.2%;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #FAFFFA;
    border-radius: 16px;
` 
export const CardWrapGreen = styled.div`
    display: flex;
    width: 48.5%;
    border-radius: 16px;
    flex-wrap: wrap;
` 
export const CardWrapRed = styled.div`
    display: flex;
    width: 48.5%;
` 
export const Delta = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 41px 0;
    .heading {
        background: #FFFFFF;
        padding: 16px 24px;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    }
` 

export const Heading = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
`

export const Gamma = styled.div`
    display: flex;
    /* align-items: center; */
    background-color: yellow;
    /* justify-content: space-between; */
    width: 100%;
    @media ${screen.tablet} {
        flex-wrap: wrap;
    }
` 

export const GraphWrap = styled.div`
    width: 72.5%;
    margin-right: 10px;
    align-self: flex-start;
    svg {
        width: 100%;
        height: 100%
    }
` 
export const ListWrap = styled.div`
    width: 24%;
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #E4E7EC;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    height: 357px;
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #667085;
        margin: 0px;
        padding-bottom: 12px;
        display: flex;
        align-items: center;
    }
    
`

export const TitleWrap = styled.h6`
    display: flex;
    justify-content: space-between;
` 

export const Title = styled.h6`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
    margin: 0;
` 
export const Text = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    margin: 0;
` 
export const ListText = styled.div`
    div {
        width: 8px;
        height: 8px;
        background: #009EDB;
        border-radius: 50%;
        margin-right: 8px;
    }
` 
export const CountWrap = styled.div`
    background: #FAFAFA;
    border: 1px solid #E4E7EC;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    align-self: flex-end;
    width: 30%;
    padding: 8px ;
    margin-top: 24px;
    display: flex;
`
export const HateSpeech = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    margin: 0;
    display: flex;
    align-items: center;
   div {
    width: 8px;
    height: 8px;
    background: #F55959;
    border-radius: 50%;
   }
`
export const NonHateSpeech = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    margin: 0;
    display: flex;
    align-items: center;
   div {
    width: 8px;
    height: 8px;
    background: #86E086;
    border-radius: 50%;
   }
`
