import React, { useState, useEffect } from "react";//to dynamically update data
import { useNavigate} from 'react-router-dom';//for navgation on page
import "./App.css";
// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function AddItem() {
    const navigate = useNavigate();
  
    const navigateHome = () => {
      //  navigate to /
      navigate('/');
    };
  

     // main array of objects state || items state || items array of objects
  const [items, setitems] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");

  // form submit event
  const handleAdditemsubmit = (e) => {
    // e.preventDefault();
    // creating an object
    
    let item = {
      title,
      Quantity,
      Price
    };
    if(title!=='')
    {
      setitems([...items, item]);
    }
    // alert(`Added ${title} to list`,navigateHome())
    
    setTitle("");
    setQuantity("");
    setPrice("");
    
    
    
  };

  
  
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

    return (
        <div className="form-container">
               <button  className="navbtn-home" onClick={navigateHome}>Home</button>
               <h1 className="subheadadd" >Add Item</h1>
           
        <form  onSubmit={handleAdditemsubmit}  action="/" >
          <label htmlFor="titleId">Title:</label>
          <input
            id="titleId"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <br></br>
          <label htmlFor="quantityId">Quantity:</label>
          <input
            id="quantityId"
            type="text"
            onChange={(e) => setQuantity(e.target.value)}
            value={Quantity}
          ></input>
          <br></br>
          <label htmlFor="priceId">Price:</label>
          <input
            id="priceId"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
          ></input>
          <br></br>
          <button type="submit"  >
            Add 
          </button>
        </form>
      </div>

         )
}
  
export default AddItem;
