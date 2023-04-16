import * as React from 'react';
import { ITodoList } from '@/pages/fun_expe/consts';
import ListItem from './list-item';

import styles from './index.module.css';

interface Iprops {
  todoList: ITodoList[],
  updateItem?: (id: number, status: boolean) =>  void;
}

const ToDoList: React.FC<Iprops> = props => {
  console.log('list render');
  const { todoList, updateItem} = props;

  return (
    <div className={styles.mainWrapper}>
      {
        todoList.map(item => {
          return (
            <ListItem 
              key={item.id} 
              listItem={item} 
              updateItem={updateItem} 
            />)
        })
      }
    </div>
  );
}

export default React.memo(ToDoList);