import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import styles from './index.module.css';

interface Iprops {
  delALLDoneItems?: () => void;
}

const Footer: React.FC<Iprops> = props => {
  console.log('Footer render');
  const { delALLDoneItems } = props;

  const onClick = () => {
    delALLDoneItems?.();
  }

  return (
    <div className={styles.footerWrapper}>
      <Button 
        size='small'
        type='primary' 
        onClick={onClick}
      >
        清除已完成任务
      </Button>
    </div>
  );
}

export default React.memo(Footer);