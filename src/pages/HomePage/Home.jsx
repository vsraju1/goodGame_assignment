import React, {useEffect,useState} from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("")
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const results = await response.json();
      setData(results);
    } catch (error) {}
  };
  return (
    <div>
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal}/>
      <Card allData={data} searchVal={searchVal}/>
    </div>
  );
};

export default Home;
