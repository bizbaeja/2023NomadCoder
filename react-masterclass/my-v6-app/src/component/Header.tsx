import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Coin</Link>
        </li>
        <li>
          <Link to={"/Coins"}>Coins</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
