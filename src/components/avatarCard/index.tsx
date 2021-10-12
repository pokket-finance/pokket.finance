import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const AvatarCardContainer = styled.div`
  user-select: none;
  width: 500px;
  display: flex;
  flex-direction: row;
`;
const Avatar = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-left: 24px;
  .title {
    font-weight: bold;
    font-size: 20px;
    color: #323232;
  }
  .message {
    font-weight: normal;
    font-size: 16px;
    color: #969696;
    height: 55px;
    padding: 10px 0;
  }
  .link {
    display: flex;
  }
`;

const Card = () => {
  return (
    <AvatarCardContainer>
      <Avatar>
        <ReactSVG src={'/assets/Avatar.svg'} />
      </Avatar>
      <Message>
        <div className="title">Wade Warren</div>
        <div className="message">Amet minim mollit non deserunt </div>
        <div className="link">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Youtube.svg`}
          />
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Youtube.svg`}
          />
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Youtube.svg`}
          />
        </div>
      </Message>
    </AvatarCardContainer>
  );
};

export default Card;
