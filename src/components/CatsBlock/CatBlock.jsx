import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CartItemSlice, setAddItem } from '../../redux/slices/cartSlice';
import notLike from '../../assets/img/svg/like.svg';
import Like from '../../assets/img/svg/like2.svg';
import line from '../../assets/img/svg/line.svg';
import './catBlock.scss';

function CatBlock({ id, img, name, price, age, discount, buy, isFavorite }) {

  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartSlice.items).find(
    (obj) => obj.id === id,
  );
console.log(cartItem)
  const [like, setLike] = React.useState(isFavorite);

  const chengeLikeYes = () => {
    setLike(true);
  };

  const chengeLikeNo = () => {
    setLike(false);
  };
  // console.log(id + ' ' + like);
  
  // const like = React.useEffect(()=>{
  //   let favoriteLike = isFavorite;
  //   console.log(favoriteLike)
  //   favoriteLike = notLike;
  // },[chengeLikeHandler])

  const handlerAddItems = () => {
    const item = {
      id,
      name,
      price,
      img,
      count: 0,
    };
    dispatch(setAddItem(item));
    //console.log(item)
  };

  return (
    <div className="cards__cat">
      <div className="card">
        {/* <Link to={`/cat/${id}`} key={id}> */}
        <div className="card__img" alt="">
        <Link to={`/cat/${id}`} key={id} >
          <img src={img} alt="" className="card__cat-img" />
          </Link>
          <div className={clsx(discount !== 0 ? 'card__discount' : '')}>
            <p className={clsx(discount !== 0 ? 'discount' : '')}>
              {discount !== 0 ? -discount : ''}
              {discount !== 0 ? `%` : ''}
            </p>
          </div>
          <div className="card__like">
            {/* <img src={like} alt="" onClick={chengeLikeHandler}/> */}

            {!like && <img src={notLike} onClick={chengeLikeYes} alt="" />}
            {like && <img src={Like} onClick={chengeLikeNo} alt="" />}
          </div>
        </div>

        {/* <div className="card__like">
          {!like && <img src={Like} onClick={chengeLikeYes} alt="" />}
          {like && <img src={notLike} onClick={chengeLikeNo} alt="" />}
        </div> */}

        {/* </Link> */}

        <div className="card__background">
          <Link to={`/cat/${id}`} key={id} className="card__title">
            {name}
          </Link>

          <div className="card__cat-row">
            <img src={line} alt="" className="line"></img>

            <p className="color__cat">
              Коричневый
              <br></br>
              окрас
            </p>
            <div className="cat_year">
              <p className="years__cat">{age}</p>
              <p className="years__cat-1">Возраст</p>
            </div>
            <div className="cat__quantity">
              <p className="old__cat">
                4<p className="quantity__cat">Кол-во лап</p>
              </p>
            </div>
          </div>
          <h3 className="price__cat">{price} руб.</h3>

          <button 
          onClick={handlerAddItems}
          className={clsx(buy !== 'Продан' ? 'buy__cat buy' : 'buy__cat sold')}>
            {/*onClick={clickHandler}*/}
            <p className="byu__cat-1 ">{buy}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatBlock;

//  {discount !== 0 ? cardDiscount : cardDiscountNone}

// const catBuy = (
//   <button className="buy__cat buy">
//     {/*onClick={clickHandler}*/}
//     <p className="byu__cat-1 ">{buy}</p>
//   </button>
// );

// const catSold = (
//   <div className="buy__cat sold">
//     <a href="#!" className="byu__cat-1 ">
//       {buy}
//     </a>
//   </div>
// );
//          {/* {buy !== 'Продан' ? catBuy : catSold} */}

// <div>
//   <img src={img} style={{ maxWidth: '250px' }} />
//   <h1>имя {name}</h1>
//   <p>цена {price}</p>
//   <p>возраст {age}</p>
//   <p>лайк {isFavorite}</p>
//   <button onClick={likeHandler}> like </button>
//   <div style={{ backgroundColor: '#161617', maxWidth: '250px' }}>
//     {like}
//     {/* {like && <img src={notLike} />} */}
//   </div>
// </div>;
