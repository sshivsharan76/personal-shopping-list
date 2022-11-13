import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import { View } from "./View";
import ItemContext from "./ItemContext";
import "./App.css";
//getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}; 

const Home= () => {
  const navigate = useNavigate();

  const navigateToAddItem = () => {
    // navigate to /AddItem
    navigate('./AddItem');
  };

  // main array of objects state || items state || items array of objects
  const [items, setitems] = useState(getDatafromLS());

  

  // delete item from LS
  const deleteitem = (title) => {
    const filtereditems = items.filter((element) => {
      return element.title !== title;
    });
    setitems(filtereditems);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div >
  <button className="navbtn-add" onClick={navigateToAddItem}>Add Item</button>
   <h1 className="subheadhome">Daily Groceries</h1>
        <div >
              <div >
                <table className="table">
                  <thead >
                    <tr >
                      <th style={{borderBottom: ' dashed rgb(190, 189, 189) .2rem',borderRight: ' dashed rgb(190, 189, 189) .2rem'}}>Title</th>
                      <th style={{borderBottom: ' dashed rgb(190, 189, 189) .2rem',borderRight: ' dashed rgb(190, 189, 189) .2rem'}}>Quantity</th>
                      <th style={{borderBottom: ' dashed rgb(190, 189, 189) .2rem',borderRight: ' dashed rgb(190, 189, 189) .2rem'}}>Price</th>
                      <th style={{borderBottom: ' dashed rgb(190, 189, 189) .2rem'}}>Delete</th>
                    </tr>
                  </thead>
                  <tbody className="disp">
                    <ItemContext.Provider  value={{items , deleteitem}}>
                      <View />
                    </ItemContext.Provider>
                    {/* <View  items={items} deleteitem={deleteitem} /> */}
                  </tbody>
                </table>
              </div>
        </div>
    </div>
  );
};

export default Home;
