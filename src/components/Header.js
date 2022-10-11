
function Header() {
   return (
      <header className="header">
         <div className="header__about-shop">
            <img width={40} height={40} src="/img/logo.png" alt="logo"/>     
            <div className="header__info">
               <h3>React Sneakers</h3>
               <p>Магазин ліпших кросівок</p>
            </div>
         </div>

         <ul className="header__action">
            <li>
               <img width={18} height={18} src="/img/cart.svg" alt="Cart icon"/>
               <span>1205 грн.</span>
            </li>
            <li>
               <img width={18} height={18} src="/img/favorite.svg" alt="Favorite icon"/>
            </li>
            <li>
               <img width={18} height={18} src="/img/user.svg" alt="User icon"/>
            </li>
         </ul>
      </header>
   )
}

export default Header;