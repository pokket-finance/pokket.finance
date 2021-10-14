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

const CoreTeam = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-left: 24px;
  .coreTeamTitle {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.color.bodyfontColorLevel1};
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
    .space {
      margin-left: 10px;
    }
  }
`;

const Card = (props: { className?: string }) => {
  const { className } = props;
  return (
    <AvatarCardContainer className={className}>
      <Avatar>
        <ReactSVG src={'/assets/Avatar.svg'} />
      </Avatar>
      <CoreTeam>
        <div className="coreTeamTitle">Wade Warren</div>
        <div className="message">Amet minim mollit non deserunt </div>
        <div className="link">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Discord.svg`}
          />
          <ReactSVG
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Git.svg`}
          />
          <ReactSVG
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={`/assets/Twitter.svg`}
          />
        </div>
      </CoreTeam>
    </AvatarCardContainer>
  );
};

export default Card;
