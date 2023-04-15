import * as React from 'react';
import { Button, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
  DeleteOutlined
} from '@ant-design/icons';

import { ITodoList } from '@/pages/functional_achievement/consts';
import styles from './index.module.css';

interface Iprops {
  listItem: ITodoList,
  updateItem?: (id: number, status: boolean) =>  void;
  delItem?: (id: number) => void;
}

const ListItem: React.FC<Iprops> = props => {
  const { listItem, updateItem, delItem } = props;

  const onChange = (e: CheckboxChangeEvent) => {
    updateItem?.(listItem.id, e.target.checked);
  };

  const onClick = () => {
    delItem?.(listItem.id);
  }

  return (
    <div className={styles.itemWrapper}>
      <Checkbox checked={listItem.status} onChange={onChange}></Checkbox>
      <div 
        className={styles.itemName}
        style={listItem.status ? {textDecoration: ' line-through'} : {}}
      >
          {listItem.name}
      </div>
      <Button 
        type='link' 
        icon={<DeleteOutlined />} 
        onClick={onClick}
      />
    </div>
  );
}

export default ListItem;