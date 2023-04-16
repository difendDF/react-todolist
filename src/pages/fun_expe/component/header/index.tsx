import * as React from 'react';

import styles from './index.module.css';
import { Input } from 'antd';

interface Iprops {
  addItem?: (name: string) => void; // 新增事项
}

const Header: React.FC<Iprops> = props => {
  console.log('Header render!');
  const { addItem } = props;
  const [tipStatus, setTipStatus] = React.useState(false);

  const onPressEnter = (e: any) => {
    if(e.target.value.trim() === '') {
      setTipStatus(true);
      return;
    }
    setTipStatus(false);
    addItem?.(e.target.value.trim());
  };

  return (
    <div className={styles.wrapper}>
      <Input
        style={{width: '560px', height: '28px'}}
        onPressEnter={onPressEnter}
      />
      { tipStatus && <div className={styles.headerTip}>请输入代办事项！</div> }
    </div>
  );
}

export default React.memo(Header);