import "../../HeadPage/MenuButton/MenuButton.css";
import { useDispatch } from "react-redux";
import MenuList from "../MenuList/MenuList.jsx";
import { toggle } from "../../../Store/menuButtonSlice.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Menu() {
  const dispatch = useDispatch();
  const buttonState = useSelector((state) => state.menuButton);

  function toggleMenu() {
    dispatch(toggle());
  }

  useEffect(() => {
    const bodyTag = document.getElementsByTagName("body")[0];
    if (buttonState) {
      bodyTag.classList.add("no-scroll");
    } else {
      bodyTag.classList.remove("no-scroll");
    }
  }, [buttonState]);

  return (
    <>
      <MenuList toggleMenu={toggleMenu} />
      <div id="Menu" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <rect x="2" y="3" width="12" height="2" />
          <rect x="2" y="7" width="12" height="2" />
          <rect x="2" y="11" width="12" height="2" />
          <path
            fillRule="evenodd"
            d="M2 12a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"
          />
        </svg>
      </div>
    </>
  );
}

export default Menu;
