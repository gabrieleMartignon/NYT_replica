import "../../HeadPage/MenuList/MenuList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../Store/menuButtonSlice";
import { Link } from "react-router-dom";

function MenuList() {
  const isOpen = useSelector((state) => state.menuButton);
  const dispatch = useDispatch();

  function toggleMenu() {
    dispatch(toggle());
  }

  return (
    <aside className={isOpen ? "isOpen" : "isClosed"}>
      <img
        src="https://static.thenounproject.com/png/705306-200.png"
        alt="Close"
        onClick={toggleMenu}
      />
      <Link className="Link" onClick={toggleMenu} to={"/Home/World/World"}>
        Home
      </Link>
      <Link className="Link" to={"/SignUp"} onClick={toggleMenu}>
        Sign Up
      </Link>
    </aside>
  );
}

export default MenuList;
