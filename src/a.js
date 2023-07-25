import React, { useState } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemImage, setNewItemImage] = useState(null);

  const handleNameChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = URL.createObjectURL(file);
    setNewItemImage(reader);

  };

  const addItem = () => {
    if (newItemName.trim() !== "" && newItemImage) {
      const newItem = { name: newItemName, image: newItemImage };
      const duplicateItem = items.find((item) => item.name === newItemName);
      if (duplicateItem) {
        // Handle duplicate item validation here
        alert("Item already exists in the cart.");
      } else {
        setItems([...items, newItem]);
        setNewItemName("");
        setNewItemImage(null);
      }
    }
  };
  

  const removeItem = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={handleNameChange}
          placeholder="Item name"
        />
        <input
          type="file"
          onChange={handleImageChange}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <h2>Items in the cart:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <img src={item.image} alt={item.name} />
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
