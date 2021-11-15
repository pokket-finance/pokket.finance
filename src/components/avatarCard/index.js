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

const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid ${(props) => {
    return props.theme.name === 'Light' ? '#eceff8' : 'rgba(255,255,255,0)'

  }};
  border-radius: 10px;
  overflow: hidden;
`;

const ReactSVGStyled = styled(ReactSVG)`
  filter: grayscale(100%);
`

const ReactSVGSocial = styled(ReactSVG)`
 color: #d8d8d8;
`

const Card = (props) => {
  const { className, member } = props;
  const { Discord, Git, Twitter } = useThemeSVGUrl([
    // 'Discord',
    // 'Git',
    'Twitter',
  ]);


  return (
    <AvatarCardContainer className={className}>
      <Avatar>
        <ImageDiv>
          {/* <ImageStyle src={member.pic} width="150" height="150" /> */}
          <ReactSVGStyled src={`/assets/Team/${member.pic}.svg`} />
        </ImageDiv>
      </Avatar>
      <CoreTeam>
        <div className="coreTeamTitle">{member.name}</div>
        <div className="message">{member.position} </div>
        <div className="link">
          <a href="" target="blank"><ReactSVGSocial
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={Twitter}
          /></a>
        </div>
      </CoreTeam>
    </AvatarCardContainer>
  );
};

export default Card;
