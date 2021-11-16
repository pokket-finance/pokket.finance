import React from 'react';
import styled from 'styled-components';

const StepsContainer = styled.div`
  padding: 45px 0;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${'/assets/BG/Roadmap.png'});

  @media only screen and (max-width: 1280px) {
    background-image: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    background-image: none;
    /* background-color: black; */
    justify-content: left;
    padding-left: 40px;
  }
`;

const Line = styled.div`
  width: 8px;
  border-radius: 4px;
  background: rgba(63, 109, 225, 0.15);
  .Space {
    height: 130px;
  }

  @media only screen and (max-width: 1280px) {
    width: 8px;
  }
`;

export type StepsProps = {
  children?: React.ReactNode;
};

const Steps = (props: StepsProps): JSX.Element => {
  const { children } = props;
  return (
    <StepsContainer>
      <Line>
        {children}
        <div className="Space" />
      </Line>
    </StepsContainer>
  );
};

export default Steps;
