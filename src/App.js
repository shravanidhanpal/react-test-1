import React,{useState,useEffect} from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{},[]);
  const addDataHandler = (enteredData) => {
    setData(prevdata => {
      const updatedData=[enteredData,...prevdata];
      localStorage.setItem('storedData',JSON.stringify(updatedData));
      return updatedData;
    })
  }
  const deleteHandler = (deltetedItemId) => {
    // console.log(deltetedItemId);
    setData(prevData => {
      return prevData.filter(item => {
        // console.log(item.id)
        localStorage.removeItem('storedData');
       return  item.id !== deltetedItemId
      })
    })
};
  const FoodData = data.filter((item) => { return item.cat === "food" });
  const ElectronicData = data.filter((item) => { return item.cat === "electronic" });
  const SkincareData = data.filter((item) => { return item.cat === "skincare" });
  return (
    <React.Fragment>
      <Form addItem={addDataHandler} />
      <h1>PRODUCTS:</h1>
      <List ondelete={deleteHandler} category={"Food-Items"} listItems={FoodData} />
      <List ondelete={deleteHandler} category={"Electronic-Items"} listItems={ElectronicData} />
      <List ondelete={deleteHandler} category={"Skincare-Items"} listItems={SkincareData} />
    </React.Fragment>
  );
}
export default App;