import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center header-wrap">
          <div className="col-auto">
            <div >
              <Link className="header__logo" to="/reactjs">My-App</Link>
            </div>
          </div>
          <div className="col-auto">
             <ul>
               <li>
                 <Link className="header__link" to="/reactjs/todo">Todo</Link>
               </li>
               <li>
                 <Link className="header__link" to="/reactjs/tiktoktoe">TikTokToe</Link>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
