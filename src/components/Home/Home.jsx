import { useEffect, useState } from "react";
import Day from "./Day";
import { daysAvailabilityDays } from "./data";
import "./home.css";
import Bio from "./Bio";
import Education from "./Education";

const Home = () => {
  const [initialValue, setInitialValue] = useState(0);
  const [activetab, setActiveTab] = useState("Bio");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // axios
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <div>
        <h1>Availability Days</h1>
        <h2>
          Counter <span>{initialValue}</span>
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button onClick={() => setInitialValue((prev) => prev + 1)}>+</button>
          <button>-</button>
        </div>

        <ul>
          {daysAvailabilityDays &&
            daysAvailabilityDays.map((item) => {
              return <Day data={item} key={item.id} />;
            })}
        </ul>
      </div>

      {/* tabs */}
      <ul className="tabs">
        <li onClick={() => setActiveTab("Bio")}>Bio</li>
        <li onClick={() => setActiveTab("Education")}>Education</li>
      </ul>

      {/* components */}
      {activetab === "Bio" && <Bio />}
      {activetab === "Education" && <Education />}

      {/* API DATA */}

      <div className="products">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="product">
                <img src={product.image} alt="" width="200px" height="250px" />
                <h5>{product.title}</h5>
                <hr />
                <h5>Price: {product.price}</h5>
                <button>ADD TO CART</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
