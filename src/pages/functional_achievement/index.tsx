import * as React from 'react';
import Header from './component/header';
import ToDoList from './component/list';
import Footer from './component/footer';
import { ITodoList } from './consts';

import styles from './index.module.css';

interface Iprops {

}

const FunctionalToDoList: React.FC<Iprops> = (props) => {
  const [todoList, setTodoList] = React.useState<ITodoList[]>([]);

  /** 新增事项 */
  const addItem = (name: string) => {
    const todoObj = {
      id: Math.floor(10000000 * Math.random()),
      name,
      status: false
    };
    setTodoList(prevList => [...prevList, todoObj]);
  };

  /** 删除事项 */
  const delItem = (id: number) => {
    setTodoList(prevList => {
      return prevList.filter(item => {
        return item.id !== id
      });
    });
  };

  /** 更新事项 */
  const updateItem = (id: number, status: boolean) => {
    setTodoList(prevList => {
      return prevList.map(item => {
        if(item.id === id){
          return {
            ...item,
            status: status,
          }
        } else {
          return item;
        }
      });
    });
  };

  /** 全选/全不选 */
  const allChecked = (check: boolean) => {
    setTodoList(prevList => {
      return prevList.map(item => {
        return {
          ...item,
          status: check,
        }
      });
    });
  };

  /** 删除所有已完成 */
  const delALLDoneItems = () => {
    setTodoList(prevList => {
      return prevList.filter(item => {
        return !item.status;
      });
    });
  };

  return (
    <div className={styles.container}>
      <div>Functional Component ToDoList!</div>
      <Header addItem={addItem} />
      <ToDoList 
        todoList={todoList} 
        updateItem={updateItem} 
        delItem={delItem} 
      />
      <Footer 
        todoList={todoList}
        allChecked={allChecked}
        delALLDoneItems={delALLDoneItems}
      />
    </div>
  );
}

export default FunctionalToDoList;