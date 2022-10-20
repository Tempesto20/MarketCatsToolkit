import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSell } from '../../redux/slices/filterSlice';
import styles from './checkpoint.module.scss';

const checkpointList = [
  { name: 'Все', value: 0 },
  { name: 'В наличии', value: 1 },
  { name: 'Отсутсвуют в продаже', value: 2 },
];

function Checkpoint() {
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState(0);
  const sell = useSelector((state) => state.filterSlice.sell.value);
  // console.log(checked);
  // const arr = useSelector((state) => state.catsSlice.items);
  // console.log(arr);


  const checkboxHandler = (event) => {
    // console.log(event.target.value);
    dispatch(setIsSell(event.target.value));
  };

 
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Группировать по:</p>

          <div
            className={styles.eventList}
            // onChange={checkboxHandler}
          >
            {checkpointList.map((item, index) => {
              return (
                <div className={styles.eventList} key={index} >
                  
                  <label htmlFor={item.name}><input
                    type="radio"
                    name="radio"
                    value={item.value}
                    onChange={checkboxHandler}
                    checked={sell === item.value ? true : sell}
                  />{item.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkpoint;


// import React from 'react';
// import './categories.scss';

// const categories = ['Все', 'В наличии', 'Отсутсвуют в продаже'];

// const Checkpoint = ({ valueCategories, onCategoriesHandler }) => {

//   return (
//     <div className="categories">
//       <ul>
//         {categories.map((items, index) => {
//           return (
//             <li
//               key={index}
//               onClick={() => onCategoriesHandler(index)}
//               //анонимный онклик - anonim onClick
//               className={valueCategories === index ? 'active' : ''}>
//               {items} {/* посомтреть номер объекта {index}*/}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Checkpoint;