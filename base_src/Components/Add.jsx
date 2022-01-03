import React from "react";

export default function Add({ language }) {
  const renderItems = () => {
    if (language === "he") {
      return <button>הוסף לעגלה</button>;
    } else {
      return <button>Add to cart</button>;
    }
  };
  return <div>{renderItems()}</div>;
}
