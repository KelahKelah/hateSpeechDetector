import React, { useEffect, useState } from "react";
import axios from 'axios'
// import { data } from '../../utils/data'
import { useQuery } from "react-query";
import { BaseUrl } from '../../utils/baseUrl'
import { useNavigate } from "react-router-dom";
import { Card, Button } from "../../components";
import {
  TweetListWrap,
  Heading,
  Title,
  CardWrap,
  CardContainer,
  Text,
  Alpha,
  PaginateWrap
} from './style.js'
import {  
  PlainBackArrow,
  ForwardArrow, TwitterIcon, Logo } from '../../assets/svgs'

const TweetList = () => {
  // const [data, setData ] = useState([]) 
  
  axios.defaults.headers.common["content-type"] = "application/json";
  axios.defaults.headers.common["unsafe-url"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  const navigate = useNavigate()
  const [pageNo, setPageNo] = useState(1)
  
  const { data } = useQuery(['allTweet'], () => {
    return axios.get(`https://hate-speech-detector-app.herokuapp.com/?page=${pageNo}`)
    .then((res)=> {
      const raw = res.data.replace(/NaN/g, '"NaN"');
      const result = JSON.parse(raw)
      // setData((prev)=> [...prev, ...result ]  ) 
      if(result) {
        console.log('result', result)
        return result
      }
    }).catch((err)=> {
      if(err) {
        console.log(err, 'err')
      }
    })
  }
  
  )
  console.log("data", data)


  const handleNavigate = () => {
    console.log('enter')
    navigate("/detected")
  }


  return (
    <TweetListWrap>
      <Alpha>
        <Title>
          <Heading>Tweets</Heading>
          <Text>A poll of tweet are displayed below</Text>
        </Title>
        <Button className="primaryButton" name="Analyze Tweets" onClick={()=>handleNavigate()} />
      </Alpha>

      <CardContainer>
        {data.map((ele, ind)=> { 
          return(
            <CardWrap key={ind}>
            <Card 
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

      <PaginateWrap>
        <PlainBackArrow /> <p className="active">1</p> <p onClick={()=> setPageNo(pageNo++)}>2</p>... <p>99</p> <p>100</p>  <ForwardArrow /> 
      </PaginateWrap>  
    </TweetListWrap>
  );
};

export { TweetList };