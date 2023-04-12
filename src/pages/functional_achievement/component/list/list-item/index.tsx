import * as React from 'react';

interface Iprops {

}

const ListItem: React.FC<Iprops> = props => {

  return (
    <div className='functional-list-item-wrapper'>
      item
    </div>
  );
}

export default ListItem;