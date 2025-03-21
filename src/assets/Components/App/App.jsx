import StartPage from "./../HeadPage/StartPage/StartPage.jsx";
import "../../Components/App/App.css";
import FeedNews from "../BodyPage/FeedNews/FeedNews.jsx";
import Header from "../HeadPage/Header/Header.jsx";
import TopStories from "../BodyPage/TopStories/TopStories.jsx";

function App() {
  return (
    <>
      <StartPage />
      <Header />
      <FeedNews />
      <TopStories />
    </>
  );
}

export default App;
