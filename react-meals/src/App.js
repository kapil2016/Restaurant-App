import Header from "./Layout/Header/Header";
import MealsListContainer from "./Meals/MealsListContainer";
import MealsSummary from "./Meals/MealsSummery";
import CartModal from "./Cart/CartModal";
import CartContext from "./Contexts/CartModalContext";
import { useState } from "react";


function App() {
  const [modalVisibility , setModalVisibility] = useState(false);
 const ModalState ={setVisibility:(getVisibility)=>{
  setModalVisibility(getVisibility)
 }}
  return (
    <CartContext.Provider value={ModalState}>
    <div>
      <CartModal visibility={modalVisibility}></CartModal>
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
