import React, { useState } from "react";
import { CardWrap, Alpha, Beta, Gamma, UserDetail, NameWrap, Name, Username, Date } from './style'
import { TwitterIcon, Av  } from '../../assets/svgs'

const Card = ({fullName, username, tweet, date, avater, detected, className}) => {

  return (
    <CardWrap>
        <Alpha>
            <UserDetail>
                <img src={avater} alt="avater" />
                <NameWrap>
                    <Name>{fullName}</Name>
                    <Username>{username}</Username>
                </NameWrap>
            </UserDetail>
            <TwitterIcon />
        </Alpha>

        <Beta>
            <p className={detected ? "red" : "gray"}>{tweet.length < 60 ? "peter obi didnt steal money clear debts didnt bequeath poverty children clear parent pension" : tweet }</p>
        </Beta>

        <Gamma>
            <Date>{date}</Date>
        </Gamma>
    </CardWrap>
  );
};
export { Card };