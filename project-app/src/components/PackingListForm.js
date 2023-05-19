import React, { useState } from 'react';


function PackingListForm() {
  const [item, setItem] = useState('');
  const [packingList, setPackingList] = useState([
    { id: 1, text: 'Passport', checked: false },
    { id: 2, text: 'Sandals', checked: false },
    { id: 3, text: 'Swimsuit', checked: false }
  ]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: item.trim(),
        checked: false
      };
      setPackingList([...packingList, newItem]);
      setItem('');
    }
  };

  const handleCheck = (itemId) => {
    const updatedList = packingList.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setPackingList(updatedList);
  };

  const handleDelete = (itemId) => {
    const updatedList = packingList.filter((item) => item.id !== itemId);
    setPackingList(updatedList);
  };

  return (
    <div>
      <h1>Packing List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {packingList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingListForm;
