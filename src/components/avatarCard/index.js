import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const AvatarCardContainer = styled.div`
  user-select: none;
  width: 30%;
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

const ImageStyle = styled(Image)`
  border-radius: 12px;
`;

const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
`;

const Card = (props) => {
  const { className, member } = props;
  // const { Discord, Git, Twitter } = useThemeSVGUrl([
  //   'Discord',
  //   'Git',
  //   'Twitter',
  // ]);

  console.log('member', member);

  return (
    <AvatarCardContainer className={className}>
      <Avatar>
        {/* <ReactSVG src={'/assets/Avatar.svg'} /> */}
        <ImageDiv>
          <ImageStyle src={member.pic} width="150" height="150" />
        </ImageDiv>
      </Avatar>
      <CoreTeam>
        <div className="coreTeamTitle">{member.name}</div>
        <div className="message">{member.position} </div>
        <div className="link">
          {/* <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={Discord}
          />
          <ReactSVG
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={Git}
          />
          <ReactSVG
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={Twitter}
          /> */}
        </div>
      </CoreTeam>
    </AvatarCardContainer>
  );
};

export default Card;
