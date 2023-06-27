import React, { useState, useEffect } from "react";
import { ReactComponent as NoDisplay } from "../../Images/noDisplay.svg";
import "./error.scss";

function Error() {
  return (
    <div className="error-body">
      <div className="table-error">
        <div>
          <NoDisplay />
          <label>ERROR 404</label>
          <label>Oooops, Page does not exist</label>
        </div>
      </div>
    </div>
  );
}

export default Error;
