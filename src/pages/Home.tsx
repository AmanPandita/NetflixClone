import { Footer } from "../components/Footer";

import "./Home.css";
import data from "../data/items.json";

export function Home() {
  const items = data.movies;
  return (
    <>
      
      <div className="Container">
        <img className="Netflixpix" src="./public/images/Home.jpg"  />
        
      </div>

      <div className="heading1">
        <h5>Popular on Netflix</h5>
      </div>
      <div className="Carousel">
        {items.map((item) => (
          <div key={item.id} className="Card">
            <img src={item.poster} alt={item.title} />
          </div>
        ))}
      </div>

      <div className="heading1">
        <h5>Recently Added</h5>
      </div>
      <div className="Carousel">
        {items.map((item) => (
          <div key={item.id} className="Card">
            <img src={item.poster} alt={item.title} />
          </div>
        ))}
      </div>

      <div className="heading1">
        <h5>Continue Watching</h5>
      </div>
      <div className="Carousel">
        {items.map((item) => (
          <div key={item.id} className="Card">
            <img src={item.poster} alt={item.title} />
          </div>
        ))}

      </div>

        <Footer />
    </>
  );
}
