import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import Dropdown, { DropMenuItem } from '@/components/dropdown';
import CustomButton from '@/components/customButton';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

import TopPanel from '../topPanel';

const HeaderContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  height: 60px;
  padding: 0px 5%;
  background-color: RGBA(0, 0, 0, 0);
  margin-top: 32px;
`;

const DropdownGroup = styled.div`
  display: flex;
`;

const Header = () => {
  const { Pokket } = useThemeSVGUrl('Pokket');
  return (
    <>
      <TopPanel />
      <HeaderContainer>
        <ReactSVG src={Pokket} />
        <DropdownGroup>
          <Dropdown width={100} title="About" />
          <Dropdown width={100} title="Vaults">
            <DropMenuItem>
              <Link href="/hodl">HODL Booster</Link>
            </DropMenuItem>
            <DropMenuItem>
              <Link href="/vol">ALPHA VOL</Link>
            </DropMenuItem>
          </Dropdown>
          <Dropdown width={150} title="Tokenomics" />
          <Dropdown width={100} title="Docs" />
        </DropdownGroup>
        <CustomButton>Launch App</CustomButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
