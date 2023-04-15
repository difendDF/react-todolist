import * as React from 'react';
import { ITodoList } from '@/pages/functional_achievement/consts';
import ListItem from './list-item';

import styles from './index.module.css';

interface Iprops {
  todoList: ITodoList[],
  updateItem?: (id: number, status: boolean) =>  void;
  delItem?: (id: number) => void;
}

const ToDoList: React.FC<Iprops> = props => {
  const { todoList, updateItem, delItem } = props;

  return (
    <div className={styles.mainWrapper}>
      {
        todoList.map(item => {
          return (
            <ListItem 
              key={item.id} 
              listItem={item} 
              updateItem={updateItem} 
              delItem={delItem} 
            />)
        })
      }
    </div>
  );
}

export default ToDoList;