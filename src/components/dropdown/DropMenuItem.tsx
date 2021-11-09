import React from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  title: string;
};

const DropMenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px 0px;
  width: 152px;
  height: 50px;
  font-weight: 600;
  color: #969696;
  background-color: ${(props) => props.theme.color.dropdownBackground};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${(props) => {
      return props.theme.name === 'Light'
        ? 'rgba(63,109,225,0.1)'
        : '#FFFFFF1A';
    }};
    font-weight: 800;
    color: #3f6de1;
    white-space: nowrap;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#969696' : '#FFFFFF99';
    }};
    white-space: nowrap;
  }
  a:hover {
    font-weight: 600;
    color: ${(props) => {
      return props.theme.name === 'Light' ? '#3f6de1' : 'white';
    }};
    white-space: nowrap;
  }
`;

const DropMenuItem = (props: { children: React.ReactNode }): JSX.Element => {
  const { children } = props;
  return <DropMenuItemContainer>{children}</DropMenuItemContainer>;
};

export default DropMenuItem;
