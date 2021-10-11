import React, { useState, Children } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export type DropdownProps = {
  title: string;
  width: number;
  children?: React.ReactNode;
};

interface StyleProps {
  open?: boolean;
  width?: number;
}

const DropdownContainer = styled.div<StyleProps>`
  width: ${(props) => {
    return `${props.width}px` || '150px';
  }};
  height: 26px;
  padding: 10px;
  white-space: nowrap;
`;

const TitleContainer = styled.div<StyleProps>`
  width: 100px;
  font-size: 20px;
  line-height: 130%;
  user-select: none;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: ${(props) => {
    return props.open ? 'bold' : 500;
  }};
  color: ${(props) => {
    return props.open ? '#3f6de1' : '#646464';
  }};
`;

const MenuContainer = styled.div<StyleProps>`
  position: relative;
  top: 10px;
  width: 200px;
  background-color: ${(props) => props.theme.color.dropdownBackground};
  box-shadow: 0px 4px 20px rgba(116, 116, 116, 0.03);
  border-radius: 8px;
  display: ${(props) => {
    return props.open ? 'block' : 'none';
  }};
  white-space: nowrap;
  div:first-child {
    border-radius: 8px 8px 0 0;
  }
  div:last-child {
    border-radius: 0 0 8px 8px;
  }
  :after {
    content: '';
    position: absolute;
    border: 8px solid transparent;
    border-bottom-color: ${(props) => props.theme.color.dropdownBackground};
    bottom: 100%;
    padding-top: 10px;
    left: 20px;
    white-space: nowrap;
  }
`;

const Dropdown = (props: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { title, width, children } = props;
  return (
    <DropdownContainer
      width={width}
      onMouseOver={() => {
        setOpen(true);
      }}
      onMouseOut={() => {
        setOpen(false);
      }}
    >
      <TitleContainer open={open}>
        {title}
        {Children.count(children) !== 0 ? (
          <ReactSVG
            style={{ marginLeft: '6px' }}
            src={`/assets/${open ? 'Up' : 'Down'}.svg`}
          />
        ) : (
          ''
        )}
      </TitleContainer>
      {Children.count(children) !== 0 ? (
        <MenuContainer open={open}>{children}</MenuContainer>
      ) : (
        ''
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
