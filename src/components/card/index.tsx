import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

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
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
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
}: {
  title: string | React.ReactNode;
  message?: string;
}) => {
  const { Discord, Git, Twitter } = useThemeSVGUrl([
    'Discord',
    'Git',
    'Twitter',
  ]);

  return (
    <CardContainer>
      <TitleContainer>{title}</TitleContainer>
      {message && <MessageContainer>{message}</MessageContainer>}
      <ButtonContainer>
        <a href="" target="blank">
          <ReactSVG src={Discord} style={{ marginRight: '16px' }} />
        </a>
        <a href="" target="blank">
          <ReactSVG src={Git} style={{ marginRight: '16px' }} />
        </a>
        <a href="https://twitter.com/PokketOfficial" target="blank">
          <ReactSVG src={Twitter} />
        </a>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
