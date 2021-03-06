import { useState, memo, useEffect } from "react";
import "./TikTokToe.scss";
var classNames = require("classnames");

function Square({ squareItem, isX, onClick, isWin }) {
  const [isHover, setIsHover] = useState(false);

  const isXcheck = squareItem === "x";
  const isOcheck = squareItem === "o";
  const isCheck = squareItem;

  console.log("square re-render");
  return (
    <div
      onMouseEnter={() => !isCheck && setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onClick()}
      className={classNames(
        "item",
        isXcheck && "active active-x",
        isOcheck && "active active-o",
        isHover && !isCheck && isX && "hover hover-x",
        isHover && !isCheck && !isX && "hover hover-o"
      )}
    ></div>
  );
}
export default memo(Square);
