import styled from 'styled-components';

export type ButtonType = {
  styleType?: 'primary' | 'default';
};

const Button = styled.button<ButtonType>`
  display: flex;
  max-height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 8px 32px rgba(63, 109, 225, 0.15);
  border-radius: 4px;
  border: 0px;
  font-weight: bold;
  user-select: none;
  padding: 12px 24px;
  font-size: 16px;
  border: ${(props) =>
    props.styleType === 'default'
      ? `1px solid ${props.theme.color.buttonBorder}`
      : ' 0px'};
  background: ${(props) =>
    props.styleType === 'primary'
      ? props.theme.color.primaryButtonBackground
      : props.theme.color.defaultButtonBackground};
  color: ${(props) =>
    props.styleType === 'primary'
      ? props.theme.color.primaryButtonFontColor
      : props.theme.color.defaultButtonFontColor};
`;

export const CustomButton = ({
  styleType = 'primary',
  children,
  className,
}: ButtonType & JSX.IntrinsicElements['button']) => {
  return (
    <Button styleType={styleType} className={className}>
      {children}
    </Button>
  );
};

const ButtonComingSoon = styled.button<ButtonType>`
  display: flex;
  max-height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  /* box-shadow: 0px 8px 32px rgba(63, 109, 225, 0.15); */
  border-radius: 4px;
  border: 0px;
  font-weight: bold;
  user-select: none;
  padding: 12px 24px;
  font-size: 16px;
  background: ${(props) =>
    props.theme.name === 'Light' ? ' #E2EAFB' : ' #162146'};
  color: ${(props) =>
    props.theme.name === 'Light' ? ' #3F6DE166' : ' #6F778F'};
`;

export const ComingSoonButton = ({
  styleType = 'primary',
  children,
  className,
}: ButtonType & JSX.IntrinsicElements['button']) => {
  return (
    <ButtonComingSoon styleType={styleType} className={className}>
      {children}
    </ButtonComingSoon>
  );
};
