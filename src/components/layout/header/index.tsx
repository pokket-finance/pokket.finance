import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import Dropdown, { DropMenuItem } from '@/components/dropdown';
import { CustomButton, ComingSoonButton } from '@/components/customButton';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

import TopPanel from '../topPanel';

const HeaderContainer = styled.div`
  max-width: 1280px;
  padding: 10px calc((100% - 1440px) / 2 + 80px);
  z-index: 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: transparent;

  @media only screen and (max-width: 1280px) {
    background-color: ${(props) => {
      return props.theme.name === 'Light' ? '#FFFFFF' : '#252632';
    }};
    padding: 0;
    justify-content: right;
    align-items: none;
    margin: 0;
    padding: 0 16px 0 16px;
  }
`;

const LogoContainer = styled.div`
  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  position: left;

  @media only screen and (max-width: 1280px) {
    display: flex;
    align-items: right;
    position: right;
  }
`;

const DropdownGroup = styled.div`
  display: flex;
  margin-left: auto;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

const Header = () => {
  const { Pokket } = useThemeSVGUrl('Pokket');
  return (
    <>
      <TopPanel />
      <HeaderContainer>
        <LogoContainer>
          <Link href="/" passHref>
            <ReactSVG src={Pokket} style={{ cursor: 'pointer' }} />
          </Link>
        </LogoContainer>
        <DropdownGroup>
          <Dropdown width={100} title="About">
            <DropMenuItem>
              <Link href="/team">Team</Link>
            </DropMenuItem>
            <DropMenuItem>
              <Link href="/roadmap">Roadmap</Link>
            </DropMenuItem>
          </Dropdown>

          {/* <Dropdown width={100} title="Vaults">
            <DropMenuItem>
              <Link href="/hodl">HODL Booster</Link>
            </DropMenuItem>
            <DropMenuItem>
              <Link href="/alpha_vol">ALPHA VOL</Link>
            </DropMenuItem>
          </Dropdown> */}
          <Dropdown width={100} title="Docs" />
        </DropdownGroup>
        <LinkContainer>
          {/* <CustomButton>Launch App</CustomButton> */}
          <ComingSoonButton>Coming Soon</ComingSoonButton>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
