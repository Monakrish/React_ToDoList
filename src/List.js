import React from 'react';
import list from './list.css';

const List = (props) => {
    console.log(props);
    const deleteItem = (key) => {
      const newList = props.itemList.filter(itemobj => {
        return itemobj.key!==key;
      })
      props.setItemList(newList);
    }

     
  return (
    <div>
      {props.itemList.map(itemobj =>{
          return( 
            <div>
          <p>{itemobj.item}</p> 
          <button onClick={() => deleteItem(itemobj.key)}>X</button>
          
          </div>
          )

         
})}
    </div>
  )
}

export default List
