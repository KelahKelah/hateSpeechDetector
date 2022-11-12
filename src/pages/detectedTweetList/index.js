import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import {
    DetectedTweetListWrap,
  Heading,
  Title,
  CardWrapGreen,
  CardWrapRed,
  Text,
  GraphWrap,
  ListWrap,
  Alpha,
  TitleWrap,
  Beta,
  Delta,
  CardWrapGreenContainer,
  CardWrapRedContainer,
  HateSpeech,
  NonHateSpeech,
  CountWrap
} from './style.js'
import {  
  BackArrow,
  ForwardArrow } from '../../assets/svgs'
import { Gamma } from "../../components/card/style";
import {  
  TwitterIcon, Logo, GraphImg } from '../../assets/svgs'

const DetectedTweetList = () => {
  const navigate = useNavigate()

  const handleGoback = () => {
    console.log('enter')
    navigate("/")
  }

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },

  ];
  const greenData = [
    { avater: <Logo /> , fullName: "Groovy gray", username: "@groovy" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "Emeka Oko", username: "@emeka" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "Gift Chukwu", username: "@gift" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "John Micheal", username: "@johnMic" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  ]

  const redData = [
    { avater: <Logo /> , fullName: "Groovy gray", username: "@groovy" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "Emeka Oko", username: "@emeka" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "Gift Chukwu", username: "@gift" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
    { avater: <Logo /> , fullName: "John Micheal", username: "@johnMic" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  ]
  return (
        <DetectedTweetListWrap>
        <Alpha>
            <BackArrow onClick={()=>handleGoback()} />
        </Alpha>

        <Gamma>
          <GraphWrap>
            <GraphImg />
          </GraphWrap>

          <ListWrap>
            <TitleWrap>
              <Title>Top hits phrases</Title>
              <Text>See alll</Text>
            </TitleWrap>
              <p><span></span>“Eze is a slave and will alway be”</p>
              <p><span></span>“You are just a black slave”</p>
              <p><span></span>“Death to your generation”</p>
              <p><span></span>“Your life is a joke and still no one laughs”</p>
              <p><span></span>“Death to your generation”</p>
              <p><span></span>“Your life is a joke and still no one laughs”</p>
              <p><span></span>“Your life is a joke and still no one laughs”</p>
              <p><span></span>“Your life is a joke and still no one laughs”</p>
          </ListWrap>

        </Gamma>

        
      <Delta>
        <div className="heading">
          <Heading>Tweets</Heading>
        </div>

        <CountWrap>
          <HateSpeech><div></div>Hate speech-3234k</HateSpeech>
          <NonHateSpeech><div></div>Non-hate speech-3234k</NonHateSpeech>
        </CountWrap>
      </Delta>

        <Beta>
          <CardWrapGreenContainer>

            {greenData.map((ele, ind)=> {
              return(
                <CardWrapGreen key={ind}>
                    <Card 
                      tweet={ele.tweet}
                      username={ele.username}
                      fullName={ele.fullName}
                      icon={ele.icon}
                      avater={ele.avater}
                    />
                </CardWrapGreen>
              )
            })}
          </CardWrapGreenContainer>

          <CardWrapRedContainer>
            {redData.map((ele, ind)=> {
            return(
              <CardWrapRed key={ind}>
                  <Card 
                    tweet={ele.tweet}
                    username={ele.username}
                    fullName={ele.fullName}
                    icon={ele.icon}
                    avater={ele.avater}
                  />
              </CardWrapRed>
            )
          })}
          
          </CardWrapRedContainer>
        </Beta>

      {/* <Gamma> */}
      {/* </Gamma> */}


      </DetectedTweetListWrap>
  );
};

export { DetectedTweetList };