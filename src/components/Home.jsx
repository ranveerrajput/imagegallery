import React, { useEffect } from "react";
import { useState } from "react";
import CardComponent from "./CardComponent";
import Loading from "./Loading";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoding] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [seacrhInput, setSearchInput] = useState("");

  async function getCardData() {
    const result = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=car&client_id=kCHh2uIEqm0G-AxvhWFVUIozZCzChg53A49E-jrgp_s`
    );
    let data = await result.json();
    data = data.results;
    setCard((prev) => [...prev, ...data]);
    setFilterData((prev) => [...prev, ...data]);
    setIsLoding(false);
  }
 
  async function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (innerHeight + scrollTop + 1 >= scrollHeight) {
      setPage((pre) => pre + 1);
      setIsLoding(true);
    }
  }

  function handleOnChange(e) {
    setSearchInput(e.target.value);
  }

  function filterSearchData(searchText, card) {
    const searchResult = card.filter((ele) =>
      ele?.user?.name.toLowerCase()?.includes(searchText?.toLowerCase())
    );
   
    return searchResult;
  }

  function handleOnSubmit() {
    const resultData = filterSearchData(seacrhInput, card);
    setFilterData(resultData);
  }

  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <h1>List Of Images</h1>
        <input
          type="text"
          value={seacrhInput}
          placeholder="Type name of the user..."
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleOnSubmit}>
          Search
        </button>
      </div>
      <CardComponent cardInfo={filterData} />
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
