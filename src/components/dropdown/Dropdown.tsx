import React, { useState, Children } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

export type DropdownProps = {
  title: string;
  href?: string;
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
  cursor: pointer;
  font-weight: ${(props) => {
    return props.open ? '600' : '600';
  }};
  color: ${(props) => {
    if (props.open && props.theme.name === 'Light') {
      return '#3f6de1';
    }
    if (!props.open && props.theme.name === 'Light') {
      return '#646464';
    }
    if (props.open && props.theme.name !== 'Light') {
      return 'white';
    }
    return '#FFFFFF99';
  }};
  a {
    width: 100px;
    text-decoration: none;
    font-size: 20px;
    line-height: 130%;
    user-select: none;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-weight: ${(props) => {
      return props.open ? '600' : '600';
    }};
    color: ${(props) => {
      if (props.open && props.theme.name === 'Light') {
        return '#3f6de1';
      }
      if (!props.open && props.theme.name === 'Light') {
        return '#646464';
      }
      if (props.open && props.theme.name !== 'Light') {
        return 'white';
      }
      return '#FFFFFF99';
    }};
  }
`;

const MenuContainer = styled.div<StyleProps>`
  position: relative;
  top: 10px;
  width: 200px;
  background-color: ${(props) => props.theme.color.dropdownBackground};
  box-shadow: 0px 4px 20px rgba(116, 116, 116, 0.03);
  border-radius: 8px;
  overflow: hidden;
  display: ${(props) => {
    return props.open ? 'block' : 'none';
  }};
  white-space: nowrap;
  /* :after {
    content: '';
    position: absolute;
    border: 8px solid transparent;
    border-bottom-color: ${(props) => props.theme.color.dropdownBackground};
    bottom: 100%;
    padding-top: 100px;
    left: 20px;
    white-space: nowrap;
  } */
`;

const Dropdown = (props: DropdownProps): JSX.Element => {
  const { Down } = useThemeSVGUrl(['Down']);
  const [open, setOpen] = useState(false);
  const { title, href = '', width, children } = props;
  const childrenCount = Children.count(children);
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
        {childrenCount !== 0 ? title : <Link href={href}>{title}</Link>}
        {childrenCount !== 0 ? (
          <ReactSVG style={{ marginLeft: '6px' }} src={open ? Down : ''} />
        ) : (
          ''
        )}
      </TitleContainer>
      {childrenCount !== 0 ? (
        <MenuContainer open={open}>{children}</MenuContainer>
      ) : (
        ''
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
