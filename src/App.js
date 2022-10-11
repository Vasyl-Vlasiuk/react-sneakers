import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
   return (
      <div className="wrapper">
         <Drawer/>
         <Header/>

         <div className="content">
            <div className="content__inner">
               <h1>Усі кросівки</h1>
               <div className="content__search search">
                  <img className="search__img" src="/img/search.svg" alt="Search"/>
                  <input type="text" placeholder="Пошук..." />
               </div>  
            </div>
            

            <div className="content__cards">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>

         </div>
      </div>
   );
}

export default App;
