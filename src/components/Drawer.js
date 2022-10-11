

function Drawer() {
   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="drawer__top">
               Кошик
               <img className="drawer__close" src="/img/btn-remove.svg" alt="Sneakers 2" />
            </h2>

            <div className="drawer__cart-items">
               <div className="drawer__cart-item cart-item">
                  <img className="cart-item__img" widtd={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers 2" />
                  <div className="cart-item__info" >
                     <p>Чоловічі кросівки Nike Air Max 270</p>
                     <b>12 999 грн.</b>
                  </div>
                  <img className="cart-item__remove" src="/img/btn-remove.svg" alt="Sneakers 2" />
               </div>
               <div className="drawer__cart-item cart-item">
                  <img className="cart-item__img" widtd={70} height={70} src="/img/sneakers/3.jpg" alt="Sneakers 3" />
                  <div className="cart-item__info" >
                     <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                     <b>8 499 грн.</b>
                  </div>
                  <img className="cart-item__remove" src="/img/btn-remove.svg" alt="Sneakers 2" />
               </div>
            </div>

            <div className="drawer__total total">
               <ul className=" total__inner ">
                  <li className="total__item price">
                     <span>Всього:</span>
                     <div></div>
                     <b>21 498 грн.</b>
                  </li>
                  <li className="total__item tax">
                     <span>Податок 5%</span>
                     <div></div>
                     <b>1074 грн.</b>
                  </li>
               </ul>
            
               <button className="green-btn">
                  Здійснити замвлення
                  <img src="/img/arrow-right.svg" alt="Arrow icon" />
               </button>
            </div>
         </div>   
      </div>
   )
}

export default Drawer;