import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import useThemeSVGUrl from '@/hooks/useThemeSVGUrl';

const StepContainer = styled.div<{ isLeft: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isLeft ? 'row-reverse' : 'row')};
  position: relative;
  align-items: center;
  width: 600px;
  height: 44px;
  right: ${(props) => (props.isLeft ? '575px' : '15px')};
  margin-top: 80px;
  border-radius: 4px;

  @media only screen and (max-width: 1280px) {
    /* width: 90%; */
    width: 300px;
  }
`;

const Divider = styled.div`
  width: 100px;
  height: 0px;
  border: 1px dashed #3f6de1;

  @media only screen and (max-width: 1280px) {
    width: 30px;
  }
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #3f6de1;

  @media only screen and (max-width: 1280px) {
    width: 14px;
    height: 14px;
    border-radius: 100px;
  }
`;

const StepContent = styled.div<{ isLeft: boolean }>`
  width: 400px;
  max-height: 44px;
  margin-left: ${(props) => (props.isLeft ? '0' : '24px')};
  margin-right: ${(props) => (props.isLeft ? '24px' : '0')};
  line-height: 32px;
  text-align: ${(props) => (props.isLeft ? 'right' : 'left')};

  @media only screen and (max-width: 1280px) {
    /* width: 100%; */
  }

  .title {
    line-height: 44px;
    color: ${(props) => props.theme.color.bodyfontColorLevel1};
    font-weight: bold;
    font-size: 24px;

    @media only screen and (max-width: 1280px) {
      font-size: 16px;
    }
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    color: ${(props) => props.theme.color.bodyfontColorLevel2};

    @media only screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

export type StepsProps = {
  isLeft?: boolean;
  title: string;
  content: string;
};

const Step = (props: StepsProps): JSX.Element => {
  const { title, content, isLeft = true } = props;
  const { Step: StepUrl } = useThemeSVGUrl('Step');
  return (
    <StepContainer isLeft={isLeft}>
      <ReactSVG src={StepUrl} />
      <Divider />
      {window.innerWidth < 1280 ? '' : <Circle />}
      <StepContent isLeft={isLeft}>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </StepContent>
    </StepContainer>
  );
};

export default Step;
