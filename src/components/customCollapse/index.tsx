import Collapse from 'rc-collapse';
import { ReactSVG } from 'react-svg';
import 'rc-collapse/assets/index.css';
import styled from 'styled-components';
import { ReactNode } from 'react';
const { Panel } = Collapse;

const CustomCollapseContainer = styled.div`
  user-select: none;
  width: 70vw;
  padding: 80px 15vw;
  background: ${(props) =>
    props.theme.name === 'Light' ? 'rgba(233, 238, 248, 0.5)' : '#161D35'};
  .collapse {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    border-top: 2px solid rgba(63, 109, 225, 0.1);
  }
  .customPanel {
    border: none;
    border-bottom: 2px solid rgba(63, 109, 225, 0.1);
    .rc-collapse-header {
      line-height: 70px;
    }
    .rc-collapse-content {
      border-left: 4px solid #3f6de1;
      background-color: rgba(63, 109, 225, 0);
      margin-left: 65px;
      margin-bottom: 32px;
      color: ${(props) => props.theme.color.bodyfontColorLevel2};
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      padding: 0 10% 0 30px;
    }
  }
  .wrapperSvg {
    height: 56px;
  }
`;

const HeaderContainer = styled.div`
  margin-left: 20px;
  color: ${(props) =>
    props.theme.name === 'Light' ? '#646464' : 'rgba(255, 255, 255, 0.87)'};
  font-weight: bold;
  font-size: 18px;
`;

const Title = styled.div`
  margin: 5% 0;
  color: ${(props) => props.theme.color.bodyfontColorLevel1};
  text-align: center;
  font-weight: bold;
  font-size: 36px;
`;

type MessageType = {
  header: string;
  content: string;
};

type CustomCollapseType = {
  title: string;
  array: MessageType[];
};

function CustomCollapse(props: CustomCollapseType) {
  const { title, array } = props;
  const beforeInjection = (svg) => {
    svg.setAttribute('style', 'line-height: 24px;transition: transform 2s');
  };
  const expandIcon = ({ isActive }): ReactNode => {
    if (isActive) {
      return (
        <ReactSVG
          className="wrapperSvg"
          beforeInjection={beforeInjection}
          src="/assets/Add.svg"
        />
      );
    }
    return (
      <ReactSVG
        className="wrapperSvg"
        beforeInjection={beforeInjection}
        src="/assets/Subtract.svg"
      />
    );
  };

  return (
    <CustomCollapseContainer>
      <Title>{title}</Title>
      <Collapse className="collapse" expandIcon={expandIcon} accordion>
        {array.map((item) => {
          return (
            <Panel
              className="customPanel"
              header={<HeaderContainer>{item.header}</HeaderContainer>}
            >
              {item.content}
            </Panel>
          );
        })}
      </Collapse>
    </CustomCollapseContainer>
  );
}

export default CustomCollapse;
