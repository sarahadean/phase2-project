import React from 'react';
import PackingListForm from '../components/PackingListForm';














function PackingList() {
  return (
    <div id="Packing List">
      <PackingListForm/>


    </div>
  )
//   const [list, setList] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [listCategory, setListCategory] = useState('');
//   const [categories, setListCategories] = useState('')
//   const [category, setCategory] = useState([])

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };


//   const handleCategoryChange = (event) => {
//     setListCategory(event.target.value);
//   };

//   const handleAddToList = () => {
//     if (newTask.trim() !== '') {
//       const updatedList = {
//         list: newTask,
//         category: listCategory,
//       };
//       setList([...list, updatedList]);
//       setNewTask('');
  
//       if (!categories.includes(listCategory)) {
//         setListCategory([...category, listCategory]);
//       }
//     }
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   // };
  

//   const handleDeleteTask = (index) => {
//     const updatedList = [...list];
//     updatedList.splice(index, 1);
//     setList(updatedList);
//   };




//   return (
//     <div>
//       <h2>Packing List</h2>
//       <div>
//         <label htmlFor="category">Select Category:</label>
//         <select id="category" value={listCategory} onChange={handleCategoryChange}>
//           <option value="">All</option>
//           <option value="men">Men</option>
//           <option value="women">Women</option>
//           <option value="children">Children</option>
//         </select>
//       </div>
//       <div>

//       </div>
//       {/* <div>
//       <label htmlFor="category">Select Category:</label>
//       </div> */}
//       <input
//         type="text"
//         value={newTask}
//         onChange={handleInputChange}
//         placeholder="Add to List"
//       />
//       <button onClick={handleAddToList}>Add to list</button>
//       <ol>
//         {list.map((list, index) => {
//           if (
//             listCategory === '' ||
//             list.category === listCategory
//           ) {
//             return (
//               <li key={index}>
//                 {list.list}
//                 <button onClick={() => handleDeleteTask(index)}>Delete</button>
//               </li>
//             );
//           }
//           return null;
//         })}
//       </ol>
     
//     </div>
//   );
// }

// //   return (
// //     <div>
// //       <h2>Packing List</h2>
// //       <input
// //         type="text"
// //         value={newTask}
// //         onChange={handleInputChange}
// //         placeholder="Add to List"
// //       />
// //       <button onClick={handleAddToList}>Add to list </button>
// //       <ol>
// //         {tasks.map((task, index) => (
// //           <li key={index}>
// //             {task}
// //             <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ol>
     
// //     </div>
// //   );
// // }
}
export default PackingList;
