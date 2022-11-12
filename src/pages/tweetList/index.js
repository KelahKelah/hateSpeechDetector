import React, { useEffect, useState } from "react";
import axios from 'axios'
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
  const [data, setData ] = useState([])

  // const data = [
  //   { avater: <Logo /> , fullName: "Groovy gray", username: "@groovy" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  //   { avater: <Logo /> , fullName: "Emeka Oko", username: "@emeka" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  //   { avater: <Logo /> , fullName: "Gift Chukwu", username: "@gift" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  //   { avater: <Logo /> , fullName: "John Micheal", username: "@johnMic" , tweet: "Lorem ipsum dolor sit amet consectetur. Eget elementum quis faucibus id. Imperdiet eget aliquam gravida diam risus eget augue congue placerat....", icon: <TwitterIcon /> },
  // ]

  axios.defaults.headers.common["content-type"] = "application/json";
  axios.defaults.headers.common["unsafe-url"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  const navigate = useNavigate()
  const getTweets = () => {
    axios.get("https://hate-speech-detector-app.herokuapp.com/?page=1")
    .then((res)=> {
      const result = res.data.json()

      console.log('result', result)
      if(result) {
        result.map((ele, ind) => {
          console.log('element',ele)
        })
      }
      // setData((prev)=> [...prev, ...res.data ]  ) 
    }).catch((err)=> {
      console.log(err, 'err')
    })
    // const {data} = await axios.get("https://hate-speech-detector-app.herokuapp.com/?page=1")
    // for (const key in data) {
    //   if (Object.hasOwnProperty.call(data, key)) {
    //     const element = data[key];
    //     console.log(element);
    //   }
    // }
  }
  
  const handleNavigate = () => {
    console.log('enter')
    navigate("/detected")
  }
  // useEffect(() => {
    
  // }, []) 

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
        <Button name="Analyze Tweets" onClick={()=>handleNavigate()} />
      </Alpha>

      <CardContainer>
        {/* {data.map((ele, ind)=> { 
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
        })}  */}
      </CardContainer>



      <PaginateWrap>
        <PlainBackArrow /> <p className="active">1</p> <p>2</p>... <p>99</p> <p>100</p>  <ForwardArrow /> 
      </PaginateWrap>  
    </TweetListWrap>
  );
};

export { TweetList };