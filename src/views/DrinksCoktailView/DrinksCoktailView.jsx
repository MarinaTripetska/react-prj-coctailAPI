import { getCoktailDrinks } from "APIoperations/getRequests";
import { ListCoctails } from "components/ListCoctails";
import { Loader } from "components/Loader";
import { Title } from "components/Title";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

export const DrinksCoktailView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Coktails"],

    getCoktailDrinks,

    {
      onError: (error) => Toast.notifyERROR(error.message),
    }
  );

  const hasDrinks = data?.data?.drinks;

  if (isFetching) {
    return <Loader />;
  }

  if (isSuccess && hasDrinks) {
    return (
      <main>
        <Title>Coktails</Title>
        <ListCoctails drinks={data.data.drinks} />
      </main>
    );
  }
};
