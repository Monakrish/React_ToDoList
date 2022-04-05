import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const[eneteredToDo,setEneterdToDo ] = useState('');
  const[itemList, setItemList] = useState([]);

  const displayHandler = (event) => {
     event.preventDefault();
     setItemList([...itemList,{item:eneteredToDo,key:Date.now()}])
    // console.log(itemList)
    setEneterdToDo("");
  }

  const toDoHandler = (event) => {
     
    // console.log(eneteredToDo);
    setEneterdToDo(event.target.value)
  }
  // console.log({eneteredToDo,itemList});
  
  return (
    <div>
     <form onSubmit={toDoHandler}>
       <input type="text" placeholder='What U Love To Do?' value={eneteredToDo} onChange={toDoHandler}></input>
      
       <button  onClick={displayHandler}>ADD</button>
    
          
     </form>
     
     <List itemList = {itemList} setItemList = {setItemList}></List>
    
    </div>
  );
}

export default App;
