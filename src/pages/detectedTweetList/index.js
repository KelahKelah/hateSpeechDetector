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
  CardWrap,
  PaginateWrap,
} from '../tweetList/style'
import {  
  BackArrow,
  PlainBackArrow,
  ForwardArrow
 } from '../../assets/svgs'

// import {   Graph } from '../../assets/svgs'

const DetectedTweetList = () => {
  const navigate = useNavigate()
   const [filtered, setfiltered] = useState({hate: [], nonHate: [] })
   const [pageNo, setPageNo] = useState(1)

  const handleGoback = () => {
    console.log('enter')
    navigate("/")
  }

  const {   isLoading, isError, error, data,  } = useQuery({
    queryKey: ['allDetectedTweet'],
    queryFn: () => {  return axios.get(`https://hate-speech-detector-app.herokuapp.com/analysis`)
    .then((res)=> {
      const raw = res.data.replace(/NaN/g, '"NaN"');
      const result = JSON.parse(raw)
      if(result !== undefined) {
        return {res: result[0], count: result[1] }
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
          <HateSpeech><div></div>{`Hate speech-${data?.count?.count?.hateSpeech}`}</HateSpeech>
          <NonHateSpeech><div></div>{`Non-hate speech-${data?.count?.count?.notHateSpeech}`}</NonHateSpeech>
        </CountWrap>
      </Delta>

        <Beta>
          <CardContainer>
          {data?.res?.map((ele, ind)=> { 
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

      <PaginateWrap>
        <PlainBackArrow onClick={()=>setPageNo(pageNo--)} /> <p  className="active">{pageNo}</p><ForwardArrow onClick={()=>setPageNo(pageNo++)} /> 
      </PaginateWrap>  
    
      </DetectedTweetListWrap>
  );
};

export { DetectedTweetList };