import React from "react";

export default function Books({ language }) {
  const renderItems = () => {
    if (language === "he") {
      return (
        <div>
          <h1>ספרים</h1>
          <p>
            הארי פוטר
            <br />
            50 ש"ח
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Books</h1>
          <p>
            Harry Potter
            <br />
            200 $
          </p>
        </div>
      );
    }
  };
  return <div>{renderItems()}</div>;
}
