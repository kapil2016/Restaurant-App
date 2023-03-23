import Header from "./Layout/Header/Header";
import MealsListContainer from "./Meals/MealsListContainer";
import MealsSummary from "./Meals/MealsSummery";
import CartModal from "./Cart/CartModal";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <MealsSummary></MealsSummary>
        <CartModal></CartModal>
        <MealsListContainer></MealsListContainer>
      </main>
      
    </div>
  );
}

export default App;
