import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addListToFirestore, updateShoplist } from "../Store/ShopsSlice";

export const AddShopList = ({ itemlistToEdit }) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [editedItem, setEditedItem] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  useEffect(() => {
    if (itemlistToEdit !== null) {
      setEditedItem(itemlistToEdit.shoplist.item);
      setEditedTitle(itemlistToEdit.shoplist.title);
      setEditedPrice(itemlistToEdit.shoplist.price);
    }
  }, [itemlistToEdit]);

  const handleAddList = (e) => {
    e.preventDefault();
    let shoplist = {
      item,
      title,
      price,
    };

    dispatch(addListToFirestore(shoplist));

    setItem("");
    setTitle("");
    setPrice("");
  };

  const handleUpdateList = (e) => {
    e.preventDefault()
    let shoplist = {
      item: editedItem,
      title: editedTitle,
      price: editedPrice
    }
    dispatch(updateShoplist({id: itemlistToEdit.id, shoplist}))
  }

  return (
    <>
      {itemlistToEdit === null ? (
        <form className="form-group custom-form" onSubmit={handleAddList}>
          <label>#Item</label>
          <input
            className="form-control"
            required
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          <br />

          <label>Title</label>
          <input
            className="form-control"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />

          <label>Price</label>
          <input
            className="form-control"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <br />

          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={handleUpdateList}>
          <label>#Item</label>
          <input
            className="form-control"
            required
            onChange={(e) => setEditedItem(e.target.value)}
            value={editedItem}
          />
          <br />

          <label>Title</label>
          <input
            className="form-control"
            required
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
          />
          <br />

          <label>Price</label>
          <input
            className="form-control"
            required
            onChange={(e) => setEditedPrice(e.target.value)}
            value={editedPrice}
          />
          <br />

          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      )}
    </>
  );
};

export default AddShopList;
