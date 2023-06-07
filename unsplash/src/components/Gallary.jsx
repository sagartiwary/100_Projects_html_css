import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../Context/AppContextProvider";
let url = `https://api.unsplash.com/search/photos?client_id=944fU64S-CUzI_QamGJsldTl0qltIMvppZIHbnxsm0c&page=1&`;
export const Gallary = () => {
  const { searchImages } = useContext(AppContext);
  const response = useQuery({
    queryKey: ["images", searchImages],
    queryFn: async () => {
      let result = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=944fU64S-CUzI_QamGJsldTl0qltIMvppZIHbnxsm0c&page=1&query=${searchImages}`
      );
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section>
        <h4 className="image-container">Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section>
        <h4 className="image-container">Something wrong...</h4>
      </section>
    );
  }

  let result = response.data.results;

  if (result < 1) {
    return (
      <section>
        <h4 className="image-container">No result found!!</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result?.map((ele) => {
        return (
          <img
            src={ele?.urls.regular}
            key={ele.id}
            alt={ele.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
