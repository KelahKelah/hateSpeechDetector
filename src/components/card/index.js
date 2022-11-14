import React from "react";
import { CardWrap, Alpha, Beta, Gamma, UserDetail, NameWrap, Name, Username, Date } from './style'
import { TwitterIcon, Av  } from '../../assets/svgs'

const Card = ({fullName, username, tweet, date, avater, twitterLogo}) => {
  
  return (
    <CardWrap>
        <Alpha>
            <UserDetail>
                <>{avater}</>
                <NameWrap>
                    <Name>{fullName}</Name>
                    <Username>{username}</Username>
                </NameWrap>
            </UserDetail>
            <>{twitterLogo}</>
        </Alpha>

        <Beta>
            <p>{tweet}</p>
        </Beta>

        <Gamma>
            <Date>{date}</Date>
        </Gamma>
    </CardWrap>
  );
};
export { Card };