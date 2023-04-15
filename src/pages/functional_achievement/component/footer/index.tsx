import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import styles from './index.module.css';
import { ITodoList } from '../../consts';
interface Iprops {
  todoList: ITodoList[],
  allChecked?: (check: boolean) => void;
  delALLDoneItems?: () => void;
}

const Footer: React.FC<Iprops> = props => {
  const { todoList, allChecked, delALLDoneItems } = props;

  const onChange = (e: CheckboxChangeEvent) => {
    allChecked?.(e.target.checked);
  }

  const onClick = () => {
    delALLDoneItems?.();
  }

  return (
    <div className={styles.footerWrapper}>
      {/* 全选功能 */}
      <Checkbox onChange={onChange} />
      <div className={styles.footerDesc}>
        <div>已完成/ 全部 {todoList.length}</div> 
      </div>
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

export default Footer;