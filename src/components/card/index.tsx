import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  font-size: 64px;
  font-weight: 700;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
`;
const MessageContainer = styled.div`
  width: 450px;
  margin-top: 14px;
  font-size: 18px;
  font-weight: normal;
  line-height: 130%;
  color: ${(props) => props.theme.color.bodyfontColorLevel2};

  @media only screen and (max-width: 1280px) {
    width: 100vw;
  }
`;

const Card = ({
  title,
  message,
}: {
  title: string | React.ReactNode;
  message?: string;
}) => {
  return (
    <CardContainer>
      <TitleContainer>{title}</TitleContainer>
      {message && <MessageContainer>{message}</MessageContainer>}
    </CardContainer>
  );
};

export default Card;
