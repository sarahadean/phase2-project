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
      fetch( 'http://localhost:3330/packing-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: item.trim(), checked: false }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to add packing item');
          }
        })
        .then((newItem) => {
          setPackingList([...packingList, newItem]);
          setItem('');
        })
        .catch((error) => {
          console.error('Failed to add packing item:', error);
        });
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

    fetch('http://localhost:3330/packing-items/${itemId}', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: !updatedList.find((item) => item.id === itemId).checked }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to toggle packing item');
        }
      })
      .catch((error) => {
        console.error('Failed to toggle packing item:', error);
      });
  };


  const handleDelete = (itemId) => {
    fetch(`/api/packing-items/${itemId}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedList = packingList.filter((item) => item.id !== itemId);
        setPackingList(updatedList);
      })
      .catch(error => console.error('Failed to delete packing item:', error));
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
