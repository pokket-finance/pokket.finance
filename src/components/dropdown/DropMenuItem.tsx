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
  width: 149px;
  height: 50px;
  font-weight: 600;
  color: #969696;
  border-left: ${(props) =>
    `solid 3px ${props.theme.color.dropdownBackground}`};
  background-color: ${(props) => props.theme.color.dropdownBackground};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  :hover {
    background-color: rgba(63, 109, 225, 0.1);
    font-weight: 800;
    color: #3f6de1;
    border-left: solid 3px #3f6de1;
    white-space: nowrap;
  }
`;

const DropMenuItem = (props: { children: React.ReactNode }): JSX.Element => {
  const { children } = props;
  return <DropMenuItemContainer>{children}</DropMenuItemContainer>;
};

export default DropMenuItem;
