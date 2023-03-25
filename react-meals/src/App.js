import Header from "./Layout/Header/Header";
import MealsListContainer from "./Meals/MealsListContainer";
import MealsSummary from "./Meals/MealsSummery";
import CartModal from "./Cart/CartModal";
import CartContext from "./Contexts/CartModalContext";
import { useState } from "react";


function App() {
 const [orderList , setOrderList] = useState([])
 const [modalVisibility , setModalVisibility] = useState(false);

const ctxObject = {
  isVisable: modalVisibility,
  orderList: orderList,
  Orders:(value)=>{
    setOrderList(value)
   },
  setVisibility:(getVisibility)=>{
    setModalVisibility(getVisibility)
   }
}

  return (
    <CartContext.Provider value={ctxObject}>
    <div>
      <CartModal visibility={modalVisibility} orders ={orderList}></CartModal>
      <Header></Header>
      <main>
        <MealsSummary></MealsSummary>
        <MealsListContainer></MealsListContainer>
      </main>
    </div>
    </CartContext.Provider>
  
  );
}

export default App;
