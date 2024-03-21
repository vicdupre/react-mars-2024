import { useEffect, useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Welcome from "../ui/Welcome";
import Card from "../ui/Card";
import MouseTracker from "../ui/MouseTracker";
import PlanetsList from "../ui/PlanetsList";
import { Link, useNavigate } from "react-router-dom";

const items = [
  { price: 120, id: 1 },
  { price: 100, id: 2 },
  { price: 150, id: 3 },
];

function Home() {
  const [count, setCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();
  const myCount = useRef(0);
  const ref = useRef(null);
  console.log("myCount", myCount);
  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    console.log(total);
    setFilteredItems(
      items.flatMap((item) => {
        if (item.price > 100) {
          return <li key={item.id}>Price : {item.price}</li>;
        }
        return [];
      })
    );
  }, []);

  useEffect(() => {
    console.log(count);
    if (count === 5) {
      navigate("/planetes");
    }
  }, [count]);

  return (
    <>
      <MouseTracker />
      <Link to={"/planetes"}>Voir les planètes</Link>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Welcome>
        <h1>Hello, world!</h1>
      </Welcome>
      <Card title="Welcome to Vite + React" footer="C'est super !">
        <p> My component is composed of smaller components </p>
      </Card>
      <Welcome name="Jojo" />
      <Welcome name="Toto" />
      <div className="card" ref={ref}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <button
          onClick={() => {
            myCount.current = myCount.current + 1;
          }}
        >
          myCount is {myCount.current}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ol>{filteredItems}</ol>
    </>
  );
}

export default Home;
