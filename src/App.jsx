import { Navigate, Route, Routes } from "react-router-dom";
import { ALPHABET } from "./constance/alphabet";
import { AppBar } from "components/AppBar";
import MainPage from "pages/MainPage";
import { SingleDrinkPage } from "pages/SingleDrinkPage";
import { DrinksByLetterView } from "views/DrinksByLetterView";
import { RandomDrinkView } from "views/RandomDrinkView";
import { ManualyuSearchView } from "views/ManualyuSearchView";
import { DrinksAlcoholicView } from "views/DrinksAlcoholicView";
import { DrinksNonAlcoholicView } from "views/DrinksNonAlcoholicView";
import { DrinksOrdinaryView } from "views/DrinksOrdinaryView";
import { DrinksCoktailView } from "views/DrinksCoktailView";
import { Footer } from "components/Footer";

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/*" element={<MainPage />}>
          <Route index element={<RandomDrinkView />} />
          <Route path="drinks" element={<ManualyuSearchView />}>
            {ALPHABET.small.map((letter) => (
              <Route
                key={letter}
                path=":letter"
                element={<DrinksByLetterView />}
              />
            ))}
          </Route>
        </Route>

        <Route path="drinks/alcoholic" element={<DrinksAlcoholicView />} />

        <Route
          path="drinks/non-alcoholic"
          element={<DrinksNonAlcoholicView />}
        />

        <Route path="drinks/ordinary-drink" element={<DrinksOrdinaryView />} />

        <Route path="drinks/cocktail" element={<DrinksCoktailView />} />

        <Route path="/drink/:drinksId" element={<SingleDrinkPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
