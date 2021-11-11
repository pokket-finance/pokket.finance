import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import BottomPanel from '@/components/layout/bottomPanel';

const FooterContainer = styled.div`
  max-width: 1280px;
  padding: 64px calc((100% - 1280px) * 0.5) 40px calc((100% - 1280px) * 0.5);
  display: flex;
  background: #18202b;
  user-select: none;

  @media only screen and (max-width: 1280px) {
    padding: 0;
    width: 100%;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  width: 50%;
`;

const LinkContainer = styled.div`
  width: 60%;
  display: flex;
  white-space: nowrap;
`;

const LinkContainerSplit = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 60px;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    padding-bottom: 12px;
  }
  .link {
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
          <LinkContainerSplit>
            <LinkItem>
              <div className="title">About</div>
              <div className="link">Team</div>
              <div className="link">Blog</div>
              <div className="link">Roadmap</div>
              <div className="link">Whitepaper</div>
            </LinkItem>
            <LinkItem>
              <div className="title">Legal</div>
              <div className="link">Term of service</div>
              <div className="link">Privacy policy</div>
            </LinkItem>
          </LinkContainerSplit>
          <LinkContainerSplit>
            <LinkItem>
              <div className="title">Pokket Vaults</div>
              <div className="link">Coming soon.</div>
              {/* <div className="link">Lorem ipsum</div> */}
              {/* <div className="link">Lorem ipsum</div> */}
            </LinkItem>
            <LinkItem>
              <div className="title">Institutions</div>
              <div className="link">Pokket.com</div>
              <div className="link">Lend Assets</div>
              {/* <div className="link">Lorem ipsum</div> */}
            </LinkItem>
          </LinkContainerSplit>
        </LinkContainer>
      </FooterContainer>
      <BottomPanel />
    </>
  );
};

export default Footer;
