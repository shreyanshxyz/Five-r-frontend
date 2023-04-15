import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales"); // Sorting
  const [open, setOpen] = useState(false); // Menu Opening
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  console.log(location);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  // reSort function to set the sorting type and close the dropdown menu
  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  // Refetch Our Gigs Whenever Sort Changes
  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Five-r Graphics & Design </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Five-r's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            {/* The menu will open on dropdown button click */}
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {/* if the menu up in "useState" will be set as open then only these three sorting options will be shown */}
            {open && (
              <div className="rightMenu">
                {/* in rightmenu, it will sort it according to the sorting style set */}
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("price")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>

        {/* We import the gigs from the data.js and then map them all. Displaying them through GigCard component and then passing each of the gig as a prop */}
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
