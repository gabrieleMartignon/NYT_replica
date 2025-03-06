import HeadPage from "./assets/Components/HeadPage/HeadPage";
import "../src/assets/Styles/App.css";
import FeedNews from "./assets/Components/BodyPage/FeedNews";
import Header from "./assets/Components/HeadPage/Header";
import TopStories from "./assets/Components/BodyPage/TopStories";

function App() {
  return (
    <>
      <HeadPage />
      <Header />
      <FeedNews />
      <TopStories />
    </>
  );
}

export default App;
