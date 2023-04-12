import * as React from 'react';
import Header from './component/header';
import ToDoList from './component/list';
import Footer from './component/footer';

interface Iprops {

}

const FunctionalToDoList: React.FC<Iprops> = (props) => {
  return (
    <div className='functional-container'>
      <div>Functional Component ToDoList!</div>
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default FunctionalToDoList;