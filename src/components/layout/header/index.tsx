import styled, { DefaultTheme } from 'styled-components';
import { ReactSVG } from 'react-svg';
import Dropdown, { DropMenuItem } from '@/components/dropdown';
import CustomButton from '@/components/customButton';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

import TopPanel from '../topPanel';

const HeaderContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 160px);
  height: 94px;
  padding: 0px 5%;
  background-color: RGBA(0, 0, 0, 0);
`;

const DropdownGroup = styled.div`
  display: flex;
`;

const Header = ({
  updateTheme,
}: {
  updateTheme: (prop: DefaultTheme) => void;
}) => {
  const { Pokket } = useThemeSVGUrl('Pokket');
  return (
    <>
      <TopPanel updateTheme={updateTheme} />
      <HeaderContainer>
        <ReactSVG src={Pokket} />
        <DropdownGroup>
          <Dropdown width={120} title="About">
            <DropMenuItem>Lorem ipsum</DropMenuItem>
            <DropMenuItem>Lorem ipsum123</DropMenuItem>
            <DropMenuItem>Lorem ipsum234</DropMenuItem>
          </Dropdown>
          <Dropdown width={196} title="Pokket Vaults">
            <DropMenuItem>Lorem ipsum</DropMenuItem>
            <DropMenuItem>Lorem ipsum123</DropMenuItem>
            <DropMenuItem>Lorem ipsum234</DropMenuItem>
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
