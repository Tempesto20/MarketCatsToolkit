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
    // console.log(event.target.checked);
    dispatch(setIsSell(event.target.value));
    // dispatch(setIsSell(event.target.value));
  };

 
  return (
    <div className={styles.background}>
      <div className={styles.container}>
      <div className={styles.wrapper}>
        
          <p>Группировать по:</p>

          <div
            className={styles.eventList}
            // onChange={checkboxHandler}
          >
            {checkpointList.map((item, index) => {
              return (
                <label className={styles.eventTitle} key={index} htmlFor={item.name}>
                  <input
                    type="radio"
                    name="radio"
                    value={item.value}
                    onChange={checkboxHandler}
                    checked={sell === item.value ? true : sell}
                    // checked={sell === index ? true : false}
                    // checked={check.isGoing}
                    className={styles.subtitle}
                  />
                  {item.name}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkpoint;

{/* <label htmlFor={item.name} className={styles.subtitle}>{item.name}</label> */}