import * as React from 'react';

interface Iprops {

}

const Footer: React.FC<Iprops> = props => {

  return (
    <div className='functional-footer-wrapper'>
      {/* 全选功能 */}
      <input type="checkbox" />
      <span>
        <span>已完成</span> / 全部 还需要显示现在全部todolist的数量
      </span>
      <button>清除已完成的任务</button>
    </div>
  );
}

export default Footer;