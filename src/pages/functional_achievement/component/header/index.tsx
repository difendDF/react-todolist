import * as React from 'react';

interface Iprops {

}

const Header: React.FC<Iprops> = props => {
  // 处理Enter事件
  const handleKeyUp = (e) => {

  }

  return (
    <div className='functional-header-wrapper'>
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={(e) => handleKeyUp(e)}/>
    </div>
  );
}

export default Header;