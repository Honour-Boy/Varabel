import React from "react";

export default function Images({
  selected,
  svg,
  hovFunc,
  word,
  show,
  clickFunc,
}) {
  const liStyle =
    selected && show
      ? {
          background: "#f5f6f9",
        }
      : {};

  const h3Style = selected
    ? {
        transition: "all 0.3s ease-in-out",
        fontWeight: 700,
      }
    : {};

  const spanStyle = selected
    ? {
        transition: "all 0.6s ease-in-out",
        opacity: 1,
      }
    : {};

  return (
    <li onMouseOver={hovFunc} onFocus={hovFunc} onClick={clickFunc} style={liStyle}>
      <div></div>
      <div className="elements">
      {React.cloneElement(svg, selected && {className: "svg-styled"})}
        <h3 style={h3Style}>{word}</h3>
      </div>
      <span style={spanStyle}></span>
    </li>
  );
}
