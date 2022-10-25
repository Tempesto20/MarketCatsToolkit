import React from 'react';
// import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setSortType } from '../../redux/slices/filterSlice';
import arrowBottom from '../../assets/img/arrowBottom.png';
import arrowTop from '../../assets/img/arrowTop.png';
import moneyBottom from '../../assets/img/moneyBottom.png';
import moneyTop from '../../assets/img/moneyTop.png';
import './sort.scss';

type SortItem = {
  name: string;
  sortProperty: string;
  img: string;
};

const sortList: SortItem[] = [
  { name: 'сначала взрослые', sortProperty: 'age', img: arrowTop },
  { name: 'сначала юные', sortProperty: '-age', img: arrowBottom },
  { name: 'сначала дорогие', sortProperty: 'price', img: moneyTop },
  { name: 'сначала недорогие', sortProperty: '-price', img: moneyBottom },
];

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [sortIsActive, setSortIsActive] = React.useState(false);

  const [arrowActive, setArrowActive] = React.useState(false);
  const sortType = useSelector((state: RootState) => state.filterSlice.sort);

  const changeHandler = () => {
    setSortIsActive((sortIsActive) => !sortIsActive); //чтобы открывать и закрывать
    setArrowActive((arrow) => !arrow);
  };
  const onChangeSortType = (items: any) => {
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
                  <img src={items.img} className="arrow"></img>
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
