import React from 'react';
import { Button } from 'antd';
import Button1 from '@components/Button1';
import styles from './App.module.less';

const App: React.FC = () => (
  <div className={styles.app}>
    <Button type="primary">Connect Wallet</Button>
    <Button1 />
  </div>
);

export default App;
