import React from 'react';
import styled from 'styled-components';

const StepsContainer = styled.div`
  display: flex;
  padding: 100px 0 200px 0;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${'/assets/backgroundImage/roadmap.png'});
`;

const Line = styled.div`
  width: 8px;
  border-radius: 4px;
  background: rgba(63, 109, 225, 0.15);
  .Space {
    height: 130px;
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
