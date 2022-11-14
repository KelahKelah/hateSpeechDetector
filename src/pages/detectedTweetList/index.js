import React, { useEffect, useState } from "react";
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
  // const [data, setData] = useState([])
   const [filtered, setfiltered] = useState({hate: [], nonHate: [] })

  // const { data } = useQuery(['detectedTweets'], ()=> {
  //   return  axios.get("https://hate-speech-detector-app.herokuapp.com/analysis")
  //   .then((res)=> {
  //     console.log('response', res)
  //     const raw = res.data.replace(/NaN/g, '"NaN"')
  //     const result = JSON.parse(raw)
  //     console.log('raw', result[0])
  //     setData((prev) => [...prev, ...result])
  //     console.log("data", data)
  //   }).catch((err)=> {
  //     console.log(err, 'err')
  //   })
     
  // } )


  const handleGoback = () => {
    console.log('enter')
    navigate("/")
  }

  const handleDetected = ()=> {
    return  axios.get("https://hate-speech-detector-app.herokuapp.com/analysis")
    .then((res)=> {
      const raw = res.data.replace(/NaN/g, '"NaN"')
      const result = JSON.parse(raw)
      const hateSpeech = result[0].filter((ele, ind) => {
        return ele.isHateSpeech === true
      })
      const nonHateSpeech = result[0].filter((ele, ind) => {
        return ele.isHateSpeech === false
      })
      console.log('hate', hateSpeech, 'none', nonHateSpeech)
      setfiltered((prev) => ({...prev, hate: hateSpeech, nonHate: nonHateSpeech}) )
      console.log('====================>', filtered?.hate)
      
    }).catch((err)=> {
      console.log(err, 'err')
    })

  }

  useEffect(() => {
    handleDetected()
  }, [])

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
            {filtered?.nonHate.map((ele, ind)=> {
              return(
                <CardWrapGreen key={ind}>
                    <Card 
                      tweet={ele?.tweet}
                      username={ele?.tweet_author_username}
                      fullName={ele?.tweet_author_username}
                      avater={ele.tweet_author_image}
                      date={ `${ele.created_at}`.replace("GMT", "") }

                    />
                </CardWrapGreen>
              )
            })}
          </CardWrapGreenContainer>

          <CardWrapRedContainer>
            {filtered.hate.map((ele, ind)=> {
            return(
              <CardWrapRed key={ind}>
                  <DetectedCard 
                    tweet={ele?.tweet}
                    username={ele?.tweet_author_username}
                    fullName={ele?.tweet_author_username}
                    avater={ele.tweet_author_image}
                    date={ `${ele.created_at}`.replace("GMT", "") }
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