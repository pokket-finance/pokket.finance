import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
// import Image from 'next/image';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const AvatarCardContainer = styled.div`
  user-select: none;
  width: 30%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1280px) {
    flex-direction: wrap;
    width: 100%;
    /* margin-left: 20px; */
    justify-content: center;
  }
`;

const Avatar = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};

  @media only screen and (max-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

const CoreTeam = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-left: 24px;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    width: 180px;
  }

  .coreTeamTitle {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.color.bodyfontColorLevel1};

    @media only screen and (max-width: 1280px) {
      font-size: 16px;
    }
  }
  .message {
    font-weight: normal;
    font-size: 16px;
    color: #969696;
    height: 55px;
    padding: 10px 0;

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
      height: 35px;
  }
  }
  .link {
    display: flex;
    .space {
      /* margin-left: 10px; */
    }
  }
`;

const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;

  @media only screen and (max-width: 1280px) {
    width: 120px;
    height: 120px;
  }
`;

const ReactSVGStyled = styled(ReactSVG)`
  width: 150px;
  height: 150px;

  @media only screen and (max-width: 1280px) {
    width: 120px;
    height: 120px;
  }
`

const ReactSVGSocial = styled(ReactSVG)`
 color: #d8d8d8;
`

const LinkStyle = styled.a`
  margin: 0 10px 0 0;
`

const Card = (props) => {
  const { className, member } = props;
  const { Twitter, LinkedIn } = useThemeSVGUrl([
    'Twitter',
    'LinkedIn',
  ]);


  return (
    <AvatarCardContainer className={className}>
      <Avatar>
        <ImageDiv>
          <ReactSVGStyled src={`/assets/Team/${member.pic}.svg`} />
        </ImageDiv>
      </Avatar>
      <CoreTeam>
        <div className="coreTeamTitle">{member.name}</div>
        <div className="message">{member.position} </div>
        <div className="link">
          {member.twitter && <LinkStyle href={member.twitter} target="blank"><ReactSVGSocial
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={Twitter}
          /></LinkStyle>}
          {member.linkedin && <LinkStyle href={member.linkedin} target="blank"><ReactSVGSocial
            className="space"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px;height: 24px;');
            }}
            src={LinkedIn}
          /></LinkStyle>}
        </div>
      </CoreTeam>
    </AvatarCardContainer>
  );
};

export default Card;
