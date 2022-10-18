import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCheckpoinValue } from '../../redux/slices/filterSlice';
import styles from './checkpoint.module.scss';

const checkpointList = [
  { name: 'Все', value: 'Купить' && "Продан" },
  { name: 'В наличии', value: 'Купить' },
  { name: 'Отсутсвуют в продаже', value: 'Продан' },
];

function Checkpoint() {
  const dispatch = useDispatch();

  const checkpointValue = useSelector((state) => state.filterSlice.checkpoint);
console.log(checkpointValue)
const arr = useSelector((state) => state.catsSlice.items);
console.log(arr)


  const checkboxHandler = (event) => {
    console.log(event.target.value);
    dispatch(setCheckpoinValue(event.target.value));
  };


  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Группировать по:</p>

          <div className={styles.eventList}
           onChange={checkboxHandler}
           >
            {checkpointList.map((item, index) => {
              return (
                <div className={styles.eventTitle} key={index} name={item.name}>
                  <input value={item.value} type="radio"  checked
                  // onClick={(items) => checkboxHandler(items)}
                  />
                  <label className={styles.subtitle} for={item.name}>{item.name}</label>
                </div>
              );
            })}
              <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked />
      <label for="huey">Huey</label>
    </div>
    <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked />
      <label for="huey">Huey</label>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkpoint;

{
  /* <div className={styles.eventList} onChange={checkboxHandler}>
<label className={styles.eventTitle}>
  <input value={all} type="checkbox" ></input>
  <span className={styles.subtitle}>Все</span>
</label>
<label className={styles.eventTitle}>
  <input value={more} type="checkbox" ></input>
  <span className={styles.subtitle}>В наличии</span>
</label>
<label className={styles.eventTitle}>
  <input value={less} type="checkbox"     ></input>
  <span className={styles.subtitle}>Отсутсвуют в продаже</span>
</label>
</div> */
}

{
  /* <div>
<input type="checkbox" id="scales" name="scales" checked />
<label for="scales">Scales</label>
</div>
<div>
<input type="checkbox" id="scales" name="scales" checked />
<label for="scales">Scales</label>
</div> */
}
