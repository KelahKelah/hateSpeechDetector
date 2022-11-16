import React, { useEffect, useState } from "react";
import axios from 'axios'
// import { data } from '../../utils/data'
import { useQuery } from "react-query";
import { BaseUrl } from '../../utils/baseUrl'
import { useNavigate } from "react-router-dom";
import { Card, Button, Loader } from "../../components";
import {
  TweetListWrap,
  Heading,
  Title,
  CardWrap,
  CardContainer,
  Text,
  Alpha,
  PaginateWrap,
} from './style.js'
import {  
  PlainBackArrow,
  ForwardArrow,  } from '../../assets/svgs'

const TweetList = () => {
  let [pageNo, setPageNo] = useState(1)
  axios.defaults.headers.common["content-type"] = "application/json";
  axios.defaults.headers.common["unsafe-url"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  
  const navigate = useNavigate()
  
    const {   isLoading, isError, error, data,  } = useQuery({
      queryKey: ['allTweet', pageNo],
      queryFn: () => {  return axios.get(`https://hate-speech-detector-app.herokuapp.com/?page=${pageNo}`)
      .then((res)=> {
        const raw = res.data.replace(/NaN/g, '"NaN"');
        const result = JSON.parse(raw)
        if(result) {
          return result
        }
      }).catch((err)=> {
        if(err) {
          console.log(err, 'err')
          return isError
        }
      })
    },
    keepPreviousData: true
    })
  
  const handleNavigate = () => {
    navigate("/detected")
  }


  return (
    <TweetListWrap>
      {isLoading && <Loader />   }
      <Alpha>
        <Title>
          <Heading>Tweets</Heading>
          <Text>A poll of tweet are displayed below</Text>
        </Title>
        <Button className="primaryButton" name="Analyze Tweets" onClick={()=>handleNavigate()} />
      </Alpha>

      <CardContainer>
        {data && data?.map((ele, ind)=> { 
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
        {pageNo < 1 ? <></> : <PlainBackArrow onClick={()=>setPageNo(pageNo--)} />  }
        <p  className={pageNo === 1 ? "active" : ""} onClick={()=>setPageNo(1) }>{pageNo> 1 || pageNo < 1 ? "1" : `${pageNo}` }</p >
        <p className={pageNo===2 ? "active" : ""} onClick={()=>setPageNo(2)} >2</p>
      <ForwardArrow className={pageNo === 2 ? 'active' : ""} onClick={()=>setPageNo(pageNo++)} /> 
      </PaginateWrap>  

    </TweetListWrap>
  );
};

export { TweetList };