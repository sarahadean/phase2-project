import React, { useState } from 'react';

function PackingList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [listCategory, setListCategory] = useState('');


  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setListCategory(event.target.value);
  };

  const handleAddToList = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };




  return (
    <div>
      <h2>Packing List</h2>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" value={listCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="children">Children</option>
        </select>
      </div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddToList}>Add to list</button>
      <ul>
        {tasks.map((task, index) => {
          if (
            listCategory === '' ||
            task.category === listCategory
          ) {
            return (
              <li key={index}>
                {task.task}
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            );
          }
          return null;
        })}
      </ul>
     
    </div>
  );
}

//   return (
//     <div>
//       <h2>Packing List</h2>
//       <input
//         type="text"
//         value={newTask}
//         onChange={handleInputChange}
//         placeholder="Add to List"
//       />
//       <button onClick={handleAddToList}>Add to list </button>
//       <ol>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ol>
     
//     </div>
//   );
// }

export default PackingList;
