import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setIsSell } from '../../redux/slices/filterSlice';
import styles from './checkpoint.module.scss';

const checkpointList = ['Все', 'В наличии', 'Отсутсвуют в продаже'];
const Checkpoint: React.FC = () => {
  const dispatch = useAppDispatch();
  // const [value, setValue] = React.useState(0);
  const sell = useSelector((state: RootState) => state.filterSlice.sell);
  console.log('sell' + ' ' + sell);
  // const arr = useSelector((state) => state.catsSlice.items);
  // console.log(arr);

  const checkboxHandler = (event: any) => {
    console.log('event' + ' ' + event.target.value);
    dispatch(setIsSell(event.target.value));
    // dispatch(setIsSell({
    //   ...sell,
    //   sell : event.target.value
    // }));
  };
  // const isRadioSelected = (value: number): boolean => sell === value;

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
                <label className={styles.eventTitle} key={index} htmlFor={item}>
                  <input
                    type="radio"
                    name="radio"
                    value={index}
                    onChange={checkboxHandler}
                    // checked={isRadioSelected(sell)}
                    // checked={sell === index ? true : false}
                    // checked={sell === index ? true : sell}
                    // checked={sell.value === index ? true : sell.value}
                    // checked={sell.value === item.value}
                    // checked={sell === index ? true : false}
                    className={styles.subtitle}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkpoint;

// type checkpoinImem ={
//   name:string;
//   value: number;
// }

// const checkpointList: checkpoinImem[] = [
//   { name: 'Все', value: 0 },
//   { name: 'В наличии', value: 1 },
//   { name: 'Отсутсвуют в продаже', value: 2 },
// ];

{
  /* {checkpointList.map((item, index) => {
              return (
                <label className={styles.eventTitle} key={index} htmlFor={item.name}>
                  <input
                    type="radio"
                    name="radio"
                    value={item.value}
                    onChange={checkboxHandler}
                    // checked={sell === index}
                    // checked={sell.value === index ? true : sell.value}
                    // checked={sell.value === item.value}
                    // checked={sell === index ? true : false}
                    // checked={check.isGoing}
                    className={styles.subtitle}
                  />
                  {item.name}
                </label>
              );
            })} */
}

{
  /* <label htmlFor={item.name} className={styles.subtitle}>{item.name}</label> */
}
