import React, { useEffect, useState } from "react";
import axios from 'axios'
import { data } from '../../utils/data'
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
  const getTweets = () => {

    axios.get("https://hate-speech-detector-app.herokuapp.com/?page=1")
    .then((res)=> {
      let jsontemp = res?.data.replace((/([\w]+)(:)/g), "\"$1\"$2");
      let correctjson = jsontemp.replace((/'/g), "\"");
      console.log("res", correctjson)
      // const result = res?.data.replace(/NaN/g, 'NaN')
      // console.log('result', JSON.parse(result))
      // setData((prev)=> [...prev, ...res.data ]  ) 
    }).catch((err)=> {
      console.log(err, 'err')
    })
  }
  
  const handleNavigate = () => {
    console.log('enter')
    navigate("/detected")
  }

  useEffect(() => {
    getTweets()
  }, [])

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
              tweet={ele.tweet}
              username={ele.username}
              fullName={ele.username}
              twitterLogo={ele.twitterLogo}
              avater={ele.avater}
              date={ele.date}
            />
          </CardWrap>
          )
        })} 
      </CardContainer>
{/* 
      <CardContainer>
        {data.map((ele, ind)=> { 
          return(
            <CardWrap key={ind}>
            <Card 
              tweet={ele.tweet}
              username={ele.username}
              fullName={ele.fullName}
              icon={ele.icon}
              avater={ele.avater}
            />
          </CardWrap>
          )
        })} 
      </CardContainer> */}



      <PaginateWrap>
        <PlainBackArrow /> <p className="active">1</p> <p>2</p>... <p>99</p> <p>100</p>  <ForwardArrow /> 
      </PaginateWrap>  
    </TweetListWrap>
  );
};

export { TweetList };