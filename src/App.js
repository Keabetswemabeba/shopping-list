import React, { useState } from "react";
import { AddShopList } from "./Components/AddShopList";
import { ViewShopList } from "./Components/ViewShopList";

function App() {
  const [itemlistToEdit, setItemListToEdit] = useState(null);

  const handleEditIcon = (shoplist) => {
    setItemListToEdit(shoplist);
  };

  const cancelUpdate= () => {
    setItemListToEdit(null)
  }

  return (
    <div className="wrapper">
      <h1>
        <b>Shopping List</b>
      </h1>
      <div className="add-and-view-list">
        <AddShopList itemlistToEdit={itemlistToEdit}
        />
        <ViewShopList
          handleEditIcon={handleEditIcon}
          itemlistToEdit={itemlistToEdit}
          cancelUpdate={cancelUpdate}
        />
      </div>
    </div>
  );
}

export default App;
