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
  const addItem = React.useCallback((name: string) => {
    const todoObj = {
      id: Math.floor(10000000 * Math.random()),
      name,
      status: false
    };
    console.log('addItem', todoList);
    const newList = [...todoList, todoObj];
    setTodoList(newList);
    // setTodoList(prevList => [...prevList, todoObj]);
  },[]);

  /** 更新事项 */
  const updateItem = React.useCallback((id: number, status: boolean) => {
    console.log('updateItem', todoList);
    const newList = todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          status: status,
        }
      } else {
        return item;
      }
    });
    setTodoList(newList);
    // setTodoList(prevList => {
    //   return prevList.map(item => {
    //     if(item.id === id){
    //       return {
    //         ...item,
    //         status: status,
    //       }
    //     } else {
    //       return item;
    //     }
    //   });
    // });
  },[]);

  /** 删除所有已完成 */
  const delALLDoneItems = React.useCallback(() => {
    // setTodoList(prevList => {
    //   return prevList.filter(item => {
    //     return !item.status;
    //   });
    // });
    console.log('delAllDoneItems', todoList);
    const newList = todoList.filter(item => {
      return !item.status;
    })
    setTodoList(newList);
  },[]);

  return (
    <div className={styles.container}>
      <div>Functional Component ToDoList!</div>
      <Header addItem={addItem} />
      <ToDoList 
        todoList={todoList} 
        updateItem={updateItem} 
      />
      <Footer
        delALLDoneItems={delALLDoneItems}
      />
    </div>
  );
}

export default FunctionalToDoList;