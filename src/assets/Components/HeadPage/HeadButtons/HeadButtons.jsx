import "../../HeadPage/HeadButtons/HeadButtons.css";
import { Link } from "react-router-dom";

function HeadButtons() {
  return (
    <Link to={"/SignUp"} className="login">
      <img
        src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY3NzLTFwNjZudzIiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzMzMzMzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSI+PHBhdGggZD0iTTE0LjIzNzkgNkMxNC4yMzc5IDguMjA5MTQgMTIuNDQ3MSAxMCAxMC4yMzc5IDEwQzguMDI4NzggMTAgNi4yMzc5MiA4LjIwOTE0IDYuMjM3OTIgNkM2LjIzNzkyIDMuNzkwODYgOC4wMjg3OCAyIDEwLjIzNzkgMkMxMi40NDcxIDIgMTQuMjM3OSAzLjc5MDg2IDE0LjIzNzkgNloiIGZpbGw9IiMzMzMzMzMiPjwvcGF0aD48cGF0aCBkPSJNMTYuMjM1NSAxNC41NzE0QzE2LjIzNzEgMTQuNTQ3NyAxNi4yMzc5IDE0LjUyMzkgMTYuMjM3OSAxNC41QzE2LjIzNzkgMTMuMTE5MyAxMy41NTE2IDEyIDEwLjIzNzkgMTJDNi45MjQyMSAxMiA0LjIzNzkyIDEzLjExOTMgNC4yMzc5MiAxNC41QzQuMjM3OTIgMTQuNTIzOSA0LjIzODcyIDE0LjU0NzcgNC4yNDAzMiAxNC41NzE0SDQuMjM3OTJWMThIMTYuMjM3OVYxNC41NzE0SDE2LjIzNTVaIiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+PC9zdmc+"
        alt="login"
      />
    </Link>
  );
}

export default HeadButtons;
