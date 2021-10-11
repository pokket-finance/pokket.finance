import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import BottomPanel from '@/components/layout/bottomPanel';

const FooterContainer = styled.div`
  with: 100%;
  display: flex;
  background: #18202b;
  padding: 64px 165px;
  user-select: none;
`;

const LogoContainer = styled.div`
  width: 40%;
`;

const LinkContainer = styled.div`
  width: 50%;
  display: flex;
  white-space: nowrap;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    padding-bottom: 12px;
  }
  .link {
    width: 160px;
    padding: 12px 0;
    font-weight: normal;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoContainer>
          <ReactSVG src={`/assets/FooterLogo.svg`} />
        </LogoContainer>
        <LinkContainer>
          <LinkItem>
            <div className="title">About</div>
            <div className="link">Team</div>
            <div className="link">Blog</div>
            <div className="link">Whitepaper</div>
          </LinkItem>
          <LinkItem>
            <div className="title">Legal</div>
            <div className="link">Term of service</div>
            <div className="link">Privacy policy</div>
          </LinkItem>
          <LinkItem>
            <div className="title">Pokket Vaults</div>
            <div className="link">Lorem ipsum</div>
            <div className="link">Lorem ipsum</div>
            <div className="link">Lorem ipsum</div>
          </LinkItem>
          <LinkItem>
            <div className="title">Institutions</div>
            <div className="link">Lorem ipsum</div>
            <div className="link">Lorem ipsum</div>
            <div className="link">Lorem ipsum</div>
          </LinkItem>
        </LinkContainer>
      </FooterContainer>
      <BottomPanel />
    </>
  );
};

export default Footer;
