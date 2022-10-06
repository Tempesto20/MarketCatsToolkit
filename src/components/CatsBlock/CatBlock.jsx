import React from 'react';
// import notLike from '../../assets/img/svg/like.svg';
// import Like from '../../assets/img/svg/like2.svg';
import line from '../../assets/img/svg/line.svg';
import  './catBlock.scss';


function CatBlock({ img, name, price, age, discount, buy, isFavorite }) {
  // const [like, setLike] = React.useState(nlikes);

  // let nlikes = <img src={notLike} />;
  // let likes = <img src={Like} />;

  // const likeHandler = () => {
  //   setLike(likes);
  // };

  const cardDiscount = (
    <div className="card__discount">
      <p className="discount">-{discount}%</p>
    </div>
  );

  const cardDiscountNone = <div></div>;

  const catBuy = (
    <button className="buy__cat buy">
      {/*onClick={clickHandler}*/}
      <p className="byu__cat-1 ">{buy}</p>
    </button>
  );

  const catSold = (
    <div className="buy__cat sold">
      <a href="#!" className="byu__cat-1 ">
        {buy}
      </a>
    </div>
  );

  return (
    <div className="cards__cat">
      <div className="card">
        <div className="card__img" alt="">
          <img src={img} alt="" className="card__cat-img" />
        </div>

        {discount !== 0 ? cardDiscount : cardDiscountNone}
        {/* <p>
           {like}
        </p>
        <button onClick={likeHandler}> like </button> */}

        {/* <div className="card__like">
          {!like && <img src={props.like} onClick={chengeLikeHamdlerYes} alt="" />}
          {like && <img src={like2} onClick={chengeLikeHamdlerNo} alt="" />}
        </div> */}

        <div className="card__background">
          <h2 className="card__title">{name}</h2>
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

          {buy !== 'Продан' ? catBuy : catSold}
        </div>
      </div>
    </div>
  );
}

export default CatBlock;

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
