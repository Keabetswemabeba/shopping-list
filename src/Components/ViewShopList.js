import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteShopList, fetchList } from "../Store/ShopsSlice";
import Icon from "react-icons-kit";
import { basic_trashcan_remove } from "react-icons-kit/linea/basic_trashcan_remove";
import { software_pencil } from "react-icons-kit/linea/software_pencil";

export const ViewShopList = ({ handleEditIcon, itemlistToEdit, cancelUpdate }) => {
  const data = useSelector((state) => state.shops.shoppingArray);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteShopList(id));
  };

  return (
    <div className="view-list">
      {data.length > 0 ? (
        <>
          {data.map((newList) => (
            <div className="list" key={newList.id}>
              <div className="content">
                <span>.{newList.shoplist.item}</span>
                <h6>
                  {newList.shoplist.title} = R{newList.shoplist.price}
                </h6>
              </div>
              <div className="actions">
                {itemlistToEdit === null && (
                  <span
                    className="icon red"
                    onClick={() => handleDelete(newList.id)}
                  >
                    <Icon icon={basic_trashcan_remove} size={22} />
                  </span>
                )}
                <span
                  className="icon blue"
                  onClick={() => handleEditIcon(newList)}
                >
                  <Icon icon={software_pencil} size={22} />
                </span>
              </div>
            </div>
          ))}
          {itemlistToEdit===null?(
            <>
            {(
              <button></button>
            )}
            </>
          ):(
            <button className="btn btn-danger" onClick={cancelUpdate}>Cancel Update</button>
          )}
        </>
      ) : (
        <div>There is no shopping list added yet!</div>
      )}
    </div>
  );
};

export default ViewShopList;
