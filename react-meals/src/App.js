import Header from "./Layout/Header/Header";
import MealsListContainer from "./Meals/MealsListContainer";
import MealsSummary from "./Meals/MealsSummery";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <MealsSummary></MealsSummary>
        <MealsListContainer></MealsListContainer>
      </main>
    </div>
  );
}

export default App;
