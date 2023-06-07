import React, { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

export const SearchForm = () => {
  const { setSearchImages } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchImages(searchValue);
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Image</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
