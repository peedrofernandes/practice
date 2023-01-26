import React, { useState, useMemo, useCallback } from 'react';
import { Item } from './components/Item';

function App() {
  console.log("App re-rendered!");

  const [items, setItems] = useState<string[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  // function addItemToWishList(item: string) {
  //   setWishList([...wishList, item])
  // }

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, [])

  // // countItemsWithOne normalmente (re-renderizando)
  // const countItemsWithOne = items.filter(item => item.includes('1')).length;

  // countItemsWithOne com useMemo
  const countItemsWithOne = useMemo(() => {
    return items.filter(item => item.includes('1')).length;
  }, [items]);

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => <Item key={item} onAddToWishList={addItemToWishList} title={item} />)}
      </ul>
      <div>
        Contagem {countItemsWithOne}
      </div>
    </div>
  );
}

export default App;
