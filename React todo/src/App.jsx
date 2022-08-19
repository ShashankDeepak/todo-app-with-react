import React, {useState} from 'react';

export function App(props) {

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }; 

    const delteItems = (id) => {
      console.log(id);
      setItems((oldItems) => {
        return oldItems.filter((arrayElem,index) => {
          console.log(index);
            return index !== id;
        }); 
      });
  }

  const [items,setItems] = useState([]);

  const listOfItem = () => {
      setItems((oldItems) => {
        return [...oldItems,inputList];
      });

      setInputList("");
  }
  const [inputList,setInputList] = useState("");
  return (
    <div className='App'>
      <h1>Todo App with react</h1>
      <input type="text" placeholder = "Add items" onChange = {itemEvent}/> 
      <button onClick = {listOfItem}> + </button>

      <ul type = "none">
        {
          items.map((itemval,index) => {
            return  <li key = {index}>
             <button onClick = {() => {delteItems(index)}}> x </button>
        {"\t\t" + itemval}
        </li>
          })
        }
      </ul>
    </div>
  );
}
