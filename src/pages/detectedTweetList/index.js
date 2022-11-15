import React, { useState } from "react";
import axios from 'axios'
import { useQuery  } from "react-query";
import { Card, Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import {
    DetectedTweetListWrap,
  Heading,
  Alpha,
  Beta,
  Delta,
  HateSpeech,
  NonHateSpeech,
  CountWrap,
} from './style.js'
import { 
  CardContainer,
  CardWrap
} from '../tweetList/style'
import {  
  BackArrow,
 } from '../../assets/svgs'

import {   Graph } from '../../assets/svgs'

const DetectedTweetList = () => {
  const navigate = useNavigate()
   const [filtered, setfiltered] = useState({hate: [], nonHate: [] })
  //  const [loading, setLoading] = useState(false)

  const handleGoback = () => {
    console.log('enter')
    navigate("/")
  }

  const {   isLoading, isError, error, data,  } = useQuery({
    queryKey: ['allDetectedTweet', ],
    queryFn: () => {  return axios.get("https://hate-speech-detector-app.herokuapp.com/analysis")
    .then((res)=> {
      const raw = res.data.replace(/NaN/g, '"NaN"');
      const result = JSON.parse(raw)
      if(result !== undefined) {
        console.log("barking")
        return result[0]
      }
    }).catch((err)=> {
      if(err) {
        console.log(err, 'err')
      }
    })
  },
  keepPreviousData: true
  })


  return (
        <DetectedTweetListWrap>
          {isLoading && <Loader /> }

        <Alpha>
            <BackArrow onClick={()=>handleGoback()} />
        </Alpha>

        
      <Delta>
        <div className="heading">
          <Heading>Tweets</Heading>
        </div>

        <CountWrap>
          <HateSpeech><div></div>{`Hate speech-${filtered.hate.length}`}</HateSpeech>
          <NonHateSpeech><div></div>{`Non-hate speech-${filtered.nonHate.length}`}</NonHateSpeech>
        </CountWrap>
      </Delta>

        <Beta>
          <CardContainer>
          {data?.map((ele, ind)=> { 
            return(
              <CardWrap key={ind}>
              <Card 
                detected={ele.isHateSpeech===false? true : false }
                tweet={ele?.tweet}
                username={ele?.tweet_author_username}
                fullName={ele?.tweet_author_username}
                twitterLogo={ele.twitterLogo}
                avater={ele?.tweet_author_image}
                date={ `${ele.created_at}`.replace("GMT", "") }
              />
            </CardWrap>
            )
          })} 
        </CardContainer>

        </Beta>

      </DetectedTweetListWrap>
  );
};

export { DetectedTweetList };