import { useDispatch, useSelector } from "react-redux";
import { showComingSoon, hideComingSoon } from "../../Store/ComingSoonSlice";
import "../../Styles/Header.css";
// Importa le azioni

function Header() {
  const dispatch = useDispatch();
  const isComingSoon = useSelector((state) => state.comingSoon);

  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDay = days[today.getDay()];
  const todayMonth = months[today.getMonth()];
  const todayYear = today.getFullYear();
  const todaysDate = `${todayDay},${
    todayMonth + " " + today.getDate()
  },${todayYear}`;

  function handleClick() {
    dispatch(showComingSoon());

    setTimeout(() => {
      dispatch(hideComingSoon());
    }, 1000);
  }

  return (
    <div className="time">
      <p>{todaysDate}</p>
      <button onClick={handleClick}>Subscribe for 0,50€/week</button>
      <div className={`ComingSoon ${isComingSoon ? "visible" : ""}`}>
        <p>Coming Soon</p>
      </div>
    </div>
  );
}

export default Header;
