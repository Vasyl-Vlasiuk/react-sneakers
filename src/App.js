
function App() {
   return (
      <div className="wrapper">
         <header className="header">

            <div className="header__about-shop">
               <img width={40} height={40} src="/img/logo.png" alt=""/>     
               <div className="header__info">
                  <h3>React Sneakers</h3>
                  <p>Магазин ліпших кросівок</p>
               </div>
            </div>

            <ul className="header__action">
               <li>
                  <img width={18} height={18} src="/img/cart.svg"/>
                  <span>1205 грн.</span>
               </li>
               <li>
                  <img width={18} height={18} src="/img/favorite.svg"/>
               </li>
               <li>
                  <img width={18} height={18} src="/img/user.svg"/>
               </li>
            </ul>
         </header>

         <div className="content">
            <h1>Усі кросівки</h1>

            <div className="content__inner">
               {/* card 1 */}
               <div className="content__card card">
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

               {/* card 2 */}
               <div className="content__card card">
                  <img widtd={133} height={112} src="/img/sneakers/2.jpg" alt="Img sneaker 2"/>
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

               {/* card 3 */}
               <div className="content__card card">
                  <img widtd={133} height={112} src="/img/sneakers/3.jpg" alt="Img sneaker 3"/>
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

               {/* card 4 */}
               <div className="content__card card">
                  <img widtd={133} height={112} src="/img/sneakers/4.jpg" alt="Img sneaker 4"/>
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

            </div>

         </div>
      </div>
   );
}

export default App;
