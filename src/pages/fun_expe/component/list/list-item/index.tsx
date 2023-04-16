import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import { ITodoList } from '@/pages/fun_expe/consts';
import styles from './index.module.css';

interface Iprops {
  listItem: ITodoList,
  updateItem?: (id: number, status: boolean) =>  void;
}

const ListItem: React.FC<Iprops> = props => {
  const { listItem, updateItem } = props;

  const onChange = (e: CheckboxChangeEvent) => {
    updateItem?.(listItem.id, e.target.checked);
  };

  return (
    <div className={styles.itemWrapper}>
      <Checkbox checked={listItem.status} onChange={onChange}></Checkbox>
      <div 
        className={styles.itemName}
        style={listItem.status ? {textDecoration: ' line-through'} : {}}
      >
          {listItem.name}
      </div>
    </div>
  );
}

export default ListItem;