import React from 'react';
// import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../redux/slices/filterSlice';
import './sort.scss';

const sortList = [
  { name: 'сначала взрослые', sortProperty: 'age' },
  { name: 'сначала юные', sortProperty: '-age' },
  { name: 'сначала дорогие', sortProperty: 'price' },
  { name: 'сначала недорогие', sortProperty: '-price' },

  // { name: 'цене (DESC)', sortProperty: 'price' },
  // { name: 'цене (ASC)', sortProperty: '-price' },
];

const Sort = () => {
  const [sortIsActive, setSortIsActive] = React.useState(false);

  const [arrowActive, setArrowActive] = React.useState(false);
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filterSlice.sort);

  const changeHandler = () => {
    setSortIsActive((sortIsActive) => !sortIsActive); //чтобы открывать и закрывать
    setArrowActive((arrow) => !arrow);
  };
  const onChangeSortType = (items) => {
    dispatch(setSortType(items));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={arrowActive ? 'transform' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>

        <b>Сортировка:</b>
        <span onClick={changeHandler}>{sortType.name}</span>
      </div>
      {sortIsActive && (
        <div className="sort__popup">
          <ul>
            {sortList.map((items, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onChangeSortType(items)}
                  className={sortType.sortProperty === items.sortProperty ? 'active' : ''}>
                  {/*сравниваем то что у родителя и то, что мы выбрали  */}
                  {items.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

{
  /* <Form.Select 
                
tabIndex="10"
name="price"
className="catSelect"
// onChange={amountHendler}  
style={{backgroundColor: '#E5E5E5'}}         
>
<option defaultValue value="defaultPrice" className="nice">Сортировка по:</option>
<option value="more" className="nice" >
    Дороже
</option>
<option value="less" className="nice" >
    Дешевле
</option>

<option value="under" className="nice">
    Юные
</option>
<option value="older" className="nice">
    Взрослые
</option>

</Form.Select> */
}

// {/* <div className="sort">
// <h2 className="sorting__cat">Сортировать по:</h2>
// <div className="catSelect">
//   <svg
//     className={arrowActive ? 'transform' : ''}
//     width="10"
//     height="6"
//     viewBox="0 0 10 6"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
//       fill="#2C2C2C"
//     />
//   </svg>
//   <span onClick={changeHandler}></span>
//   {/* {sortType.name} */}
//   {sortIsActive && (
//     <div className="sort__popup">
//       <ul>
//         {sortPopup.map((items, index) => {
//           return (
//             <li
//               key={index}
//               onClick={() => onChangeSortType(items)}
//               // className={sortType.sortProperty === items.sortProperty ? 'active' : ''}
//               >
//               {items.name}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )}
// </div>
// </div> */}

// React.useEffect(() => {
//   //нужно для скрытия попап окна, в лучае если оно крыто и пользователь нажимает в другое место
//   const handlerActivePopup = (event) => {

//     if (sortRef.current && !event.path.includes(sortRef.current)) {
//       // console.log('клик на сорт');
//       setSortIsActive(false);
//     }
//   };
//   document.body.addEventListener('click', handlerActivePopup);
// }
// );
