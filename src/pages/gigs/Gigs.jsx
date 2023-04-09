import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales"); // Sorting
  const [open, setOpen] = useState(false); // Menu Opening
  const minRef = useRef();
  const maxRef = useRef();

  // reSort function to set the sorting type and close the dropdown menu
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
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
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>

        {/* We import the gigs from the data.js and then map them all. Displaying them through GigCard component and then passing each of the gig as a prop */}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
