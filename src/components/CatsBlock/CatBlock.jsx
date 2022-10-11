import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAddItem } from '../../redux/slices/cartSlice';
import { setAddLike, setRemoveLike,setLike } from '../../redux/slices/favoriteSlice';
import notLike from '../../assets/img/svg/like.svg';
import Like from '../../assets/img/svg/like2.svg';
import line from '../../assets/img/svg/line.svg';
import './catBlock.scss';

function CatBlock({ id, img, name, price, age, discount, buy, isFavorite }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartSlice.items);
  // console.log(cartItem.length)
  const likeItem = useSelector((state) => state.favoriteSlice.items);
  // console.log(likeItem)

  // const like = useSelector((state)=>state.favoriteSlice.isFavorite)
  // console.log(like)
  // let like = isFavorite;
  // console.log(like)


  const [like, setLike] = React.useState(isFavorite);
// console.log(like)
  // const chengeLikeYes = () => {
  //   setLike(true);
  // };

  // const chengeLikeNo = () => {
  //   setLike(false);
  // };
  // console.log(id + ' ' + like);



  // for(let i=0; i<likeItem.length; i++){
  //   console.log(likeItem[i].id)
  //   if(likeItem[i].id === id){
  //     likeItem[i].isFavorite = true;
  //   } else {
  //     likeItem[i].isFavorite = false;
  //   }
  // }



const handlerLikeYes = () => {
  const item = {
    id,
    name,
    price,
    img,
    isFavorite,
    count: 0,
  };

  // for(let i=0; i<likeItem.length; i++){
  //   console.log(likeItem[i].id)
  //   if(likeItem[i].id === id){
  //      dispatch(setLike(true));
  //   } 
  // }

  setLike(true);
  dispatch(setAddLike(item));
  // console.log(item)
};


  const handlerLikeNo = () => {
    dispatch(setLike(false));
    dispatch(setRemoveLike(id));
    //console.log(item)
  };

  const handlerAddItems = () => {
    for (let i = 0; i < cartItem.length; i++) {
      //console.log(cartItem[i].id);
      if (cartItem[i].id !== id) {
        //если такой id ещё НЕ имеется корзине, то добавлять
        //console.log('если такой id ещё НЕ имеется корзине, то добавлять');
      } else {
        //если такой id ИМЕЕТСЯ корзине, то не добавлять
        //console.log('не добавлять')
        return;
      }
    }
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
        <div className="card__img" alt="">
          <Link to={`/cat/${id}`} key={id}>
            <img src={img} alt="" className="card__cat-img" />
          </Link>
          <div className={clsx(discount !== 0 ? 'card__discount' : '')}>
            <p className={clsx(discount !== 0 ? 'discount' : '')}>
              {discount !== 0 ? -discount : ''}
              {discount !== 0 ? `%` : ''}
            </p>
          </div>
          <div className="card__like">
            {!like && <img src={notLike} onClick={handlerLikeYes} alt="" />}
            {like && <img src={Like} onClick={handlerLikeNo} alt="" />}
          </div>
        </div>

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
              <div className="old__cat">
                4<p className="quantity__cat">Кол-во лап</p>
              </div>
            </div>
          </div>
          <h3 className="price__cat">{price} руб.</h3>

          <button
            disabled={buy === 'Продан'}
            //пофиксил возможность приобретения уже проданных котиков
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
//     <b className="byu__cat-1 ">{buy}</b>
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
//   <b>цена {price}</b>
//   <b>возраст {age}</b>
//   <b>лайк {isFavorite}</b>
//   <button onClick={likeHandler}> like </button>
//   <div style={{ backgroundColor: '#161617', maxWidth: '250px' }}>
//     {like}
//     {/* {like && <img src={notLike} />} */}
//   </div>
// </div>;
