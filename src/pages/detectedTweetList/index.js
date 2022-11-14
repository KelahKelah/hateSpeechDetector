import React, { useEffect } from "react";
import axios from 'axios'
import { useQuery  } from "react-query";
import {greenData, redData} from '../../utils/data'
import { Card, Button, DetectedCard } from "../../components";
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
  CountWrap,
  ListText,
  Checking
} from './style.js'
import {  
  BackArrow,
 } from '../../assets/svgs'

import {  
  TwitterIcon, Logo, GraphImg } from '../../assets/svgs'

const DetectedTweetList = () => {
  const navigate = useNavigate()

  const { data } = useQuery(['detectedTweets'], ()=> {
    return  axios.get("https://hate-speech-detector-app.herokuapp.com/analysis")
    .then((res)=> {
      console.log('response', res)
      const raw = res.data.replace(/NaN/g, '"NaN"')
      const result = JSON.parse(raw)
      console.log('raw', result[0])
    }).catch((err)=> {
      console.log(err, 'err')
    })
     
  })


  const handleGoback = () => {
    console.log('enter')
    navigate("/")
  }

  return (
        <DetectedTweetListWrap>
        <Alpha>
            <BackArrow onClick={()=>handleGoback()} />
        </Alpha>

        <Checking>
          <GraphWrap>
            <GraphImg />
          </GraphWrap>

          <ListWrap>
            <TitleWrap>
              <Title>Top hits phrases</Title>
              <Text>See alll</Text>
            </TitleWrap>

            <ListText>
              <p><div></div>“Eze is a slave and will alway be”</p>
              <p><div></div>“You are just a black slave”</p>
              <p><div></div>“Death to your generation”</p>
              <p><div></div>“Your life is a joke and still no one laughs”</p>
              <p><div></div>“Death to your generation”</p>
              <p><div></div>“Your life is a joke and still no one laughs”</p>
              <p><div></div>“Your life is a joke and still no one laughs”</p>
              <p><div></div>“Your life is a joke and still no one laughs”</p>
            </ListText>
          </ListWrap>

        </Checking>

        
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
                      fullName={ele.username}
                      icon={ele.icon}
                      avater={ele.avater}
                      date={ele.date}

                    />
                </CardWrapGreen>
              )
            })}
          </CardWrapGreenContainer>

          <CardWrapRedContainer>
            {redData.map((ele, ind)=> {
            return(
              <CardWrapRed key={ind}>
                  <DetectedCard 
                    tweet={ele.tweet}
                    username={ele.username}
                    fullName={ele.username}
                    twitterLogo={ele.twitterLogo}
                    avater={ele.avater}
                    date={ele.date}
                  />
              </CardWrapRed>
            )
          })}
          
          </CardWrapRedContainer>
        </Beta>

      </DetectedTweetListWrap>
  );
};

export { DetectedTweetList };