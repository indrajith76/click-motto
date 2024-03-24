import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { createClient } from "pexels";
import { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import { useEffect } from "react";
import { categories, featureData } from "./allData";
import Loader from "./components/Loader";

const client = createClient(
  "GT5aKaWC0Bt7m5MAJD9wBCNG0gEyrgAOxClWbzhYkxXAE3WknlPusvHb"
);

function App() {
  const [query, setQuery] = useState("Summer");
  const [dataAll, setDataAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.photos.search({ query, per_page: 11 }).then((photos) => {
      setDataAll(photos.photos);
    });
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="main-section fadeInAnimation">
      <Navbar />
      <Banner />
      <div className="bg-white productSection">
        <div>
          <p>Top Categories</p>
          <div className="categories" data-aos="fade-up">
            {categories.map((category, idx) => (
              <div onClick={() => setQuery(category.text)}>
                <CategoryCard
                  key={idx}
                  text={category.text}
                  img={category.img}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="second-nav" data-aos="fade-up">
          <div className="navbar">
            <ul className="menu-list">
              <li>All</li>
              <li className="text-gray">Photos</li>
              <li className="text-gray">Videos</li>
              <li className="text-gray">Freebies</li>
              <li className="text-gray">360 </li>
            </ul>
            <select name="" id="" className="btn border-none">
              <option value="Recommended">Recommended</option>
              <option value="Most Recent">Most Recent</option>
              <option value="Most Viewed">Most Viewed</option>
              <option value="Most Downloaded">Most Downloaded</option>
              <option value="Most Appreciated">Most Appreciated</option>
            </select>
          </div>
        </div>

        <div className="productAndFeature">
          <div className="products">
            {dataAll.map((data, idx) => (
              <img key={idx} src={data.src.portrait} alt="" />
            ))}
            <div className="feature">
              <p>Featured Artists</p>
              <div className="feature-author text-white">
                {featureData.map((data) => (
                  <div>
                    <img src={data.img} alt="" />
                    <div className="authorTxt">
                      <p>{data.name}</p>
                      <small>{data.view} views</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
