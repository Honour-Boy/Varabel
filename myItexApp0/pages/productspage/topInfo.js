import React, { useState } from "react";
import { ReactComponent as UserIcon } from "../../Images/user.svg";
import { ReactComponent as NotificationIcon } from "../../Images/notification.svg";
import { ReactComponent as DownArrowIcon } from "../../Images/arrow-down.svg";
import { TableObject } from "./table/tableinfo";

export default function Top({ Head, details, bool, deleteIndexes }) {
  const [allowDelete, setAllowDelete] = useState(false)

  const deleteStyle = bool
    ? {
        top: "0px",
      }
    : {};

  function del() {
    setAllowDelete(!allowDelete)
  }

  React.useEffect(() => {
    async function deleteData(){
      for(let i = 0; i < deleteIndexes.length; i++){
        await TableObject.delete(deleteIndexes[i])
      }
    }

    async function handleDeletes(){
      await deleteData()
      window.location.reload()
    }
    if(allowDelete){
      handleDeletes()
    }

  }, [allowDelete]);

  return (
    <div className="top-container">
      <div className="delete-container" style={deleteStyle}>
        <label>Are you sure you want to delete?</label>
        <button onClick={del}>Delete</button>
      </div>

      <div className="main">
        <h2>{Head}</h2>
        <label>{details}</label>
      </div>
      <div className="acc-display">
        <div>
          <NotificationIcon />
          <span>
            <UserIcon />
          </span>
          <h3>Adewunmi</h3>
        </div>
        <DownArrowIcon className="img" />
      </div>
    </div>
  );
}
