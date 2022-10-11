
function Card() {
   return (
      <div className="content__card card">
         <div className="card__favorite">
            <img src="/img/heart-unliked.svg" alt="Unliked"/>
         </div>
         <img widtd={133} height={112} src="/img/sneakers/1.jpg" alt="Img sneaker 1"/>
         <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
         <div className="card__bottom">
            <div className="card__price">
               <span>Ціна:</span>
               <b>12 999 грн.</b>
            </div>
            <button className="card__button">
               <img widtd={11} height={11} src="/img/plus.svg" alt=""/>
            </button>
         </div>
      </div>
   );
}

export default Card;