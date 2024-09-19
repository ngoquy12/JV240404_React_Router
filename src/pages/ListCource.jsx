import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const cources = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "Reactjs",
  },
  {
    id: 4,
    name: "Java",
  },
];

export default function ListCource() {
  const [searchParam, setSeachParam] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  const handleSearch = () => {
    setSeachParam({
      productName: inputValue,
      startPrice: startPrice,
      endPrice: endPrice,
    });
  };

  useEffect(() => {
    const productNameValue = searchParam.get("productName");
    const startPriceValue = searchParam.get("startPrice");
    const endPriceValue = searchParam.get("endPrice");

    console.log("productNameValue: ", productNameValue);
    console.log("startPriceValue: ", startPriceValue);
    console.log("endPriceValue: ", endPriceValue);
  }, [searchParam]);

  return (
    <div>
      <h3>List cource</h3>
      <div style={{ display: "flex", gap: 20 }}>
        {cources.map((cource) => (
          <div key={cource.id}>
            <p>Id: {cource.id}</p>
            <p>Name: {cource.name}</p>
            <button>
              <Link to={`/course-detail/${cource.id}`}>Xem chi tiết</Link>
            </button>
          </div>
        ))}
      </div>

      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên"
      />
      <input
        onChange={(e) => setStartPrice(e.target.value)}
        value={startPrice}
        type="number"
      />
      <input
        onChange={(e) => setEndPrice(e.target.value)}
        value={endPrice}
        type="number"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}
