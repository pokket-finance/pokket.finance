import React from 'react';
import styled from 'styled-components';
import CustomButton from '../customButton';

const CardContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
`;
const MessageContainer = styled.div`
  margin-top: 34px;
  font-size: 18px;
  font-weight: normal;
  line-height: 130%;
  color: ${(props) => props.theme.color.bodyfontColorLevel2};
`;

const ButtonContainer = styled.div`
  margin-top: 53px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button:last-child {
    margin-left: 23px;
  }
`;

const Card = ({
  title,
  message,
  firstButtonTitle,
  secondButtonTitle,
}: {
  title: string | React.ReactNode;
  message?: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
}) => {
  return (
    <CardContainer>
      <TitleContainer>{title}</TitleContainer>
      {message && <MessageContainer>{message}</MessageContainer>}
      <ButtonContainer>
        <CustomButton>{firstButtonTitle}</CustomButton>
        <CustomButton styleType="default">{secondButtonTitle}</CustomButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
