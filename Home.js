import React, { useState } from "react";

const Home = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
    }
    const filterval = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filterval);
  };

  return (
    <div>
      This is home page
      <div className="search container center mt-5">
        Search: <input name="query" type="text" onChange={handleSearch} />
        <hr />
        <h2>Collection is {}</h2>
        {filterList &&
          filterList.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};

export default Home;
