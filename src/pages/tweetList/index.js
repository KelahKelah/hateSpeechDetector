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
  ForwardArrow,  } from '../../assets/svgs'

const TweetList = () => {
  const [allData, setAllData ] = useState([]) 
  const [count, setCount ] = useState({hate: 0, nonHate: 0})
  let [pageNo, setPageNo] = useState(1)
  axios.defaults.headers.common["content-type"] = "application/json";
  axios.defaults.headers.common["unsafe-url"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  const navigate = useNavigate()
  // const { data } = useQuery(['allTweet'], 
  
  // () => {
  //   return axios.get("https://hate-speech-detector-app.herokuapp.com/?page=1")
  //   .then((res)=> {
  //     const raw = res.data.replace(/NaN/g, '"NaN"');
  //     const result = JSON.parse(raw)
  //     if(result) {
  //       console.log('result', result)
  //       return result
  //     }
  //   }).catch((err)=> {
  //     if(err) {
  //       console.log(err, 'err')
  //     }
  //   })
  // })

  // console.log("data", data)


  const handleNavigate = () => {
    console.log('enter')
    navigate("/detected")
  }


  useEffect(() => {
    const getTweets = () => {  axios.get(`https://hate-speech-detector-app.herokuapp.com/?page=${pageNo}`)
    .then((res)=> {
      const raw = res.data.replace(/NaN/g, '"NaN"');
      const result = JSON.parse(raw)
      if(result) {
        setAllData((prev) => [...prev, ...result] )
        // return result
      }
    }).catch((err)=> {
      if(err) {
        console.log(err, 'err')
      }
    })
  }
    getTweets()
    console.log(pageNo)

  }, [pageNo])

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
        {allData.map((ele, ind)=> { 
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
        <PlainBackArrow onClick={()=>setPageNo(pageNo--)} /> <p  className="active">{pageNo}</p><ForwardArrow onClick={()=>setPageNo(pageNo++)} /> 
      </PaginateWrap>  
    </TweetListWrap>
  );
};

export { TweetList };