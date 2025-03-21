import axios from "axios";
import { useEffect } from "react";
import "../FeedNews/FeedNews.css";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setNews } from "../../../Store/FeedNewsSlice";
import ReadingInfo from "../ReadingInfo/ReadingInfo";
import SectionButton from "../SectionButton/SectionButton";
import { toggleSectionFeedNews, changeSectionFeedNews, } from "../../../Store/sectionSelectedSlice";

function FeedNews() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.feedNews.loading);
  const error = useSelector((state) => state.feedNews.error);
  const news = useSelector((state) => state.feedNews.news);
  const isFeedNewsOpen = useSelector((state) => state.feedNewsSection[0]);
  const APIKEY = import.meta.env.VITE_APIKEY;
  const currentSection = useSelector((state) => state.feedNewsSection[1]);
  const URL = `https://api.nytimes.com/svc/news/v3/content/nyt/${currentSection}.json?limit=10&api-key=${APIKEY}`;
  const min = 2;
  const max = 7;

  function wait() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(URL)
      .then((response) => {
        return wait().then(() => {
          dispatch(setNews(response.data));
          dispatch(setLoading(false));
        })
      })
      .catch((error) => {
        dispatch(setError(error));
        console.error(error, "API Request Failed");
        dispatch(setLoading(false));
      });
  }, [URL]);

  if (loading) {
    return (
      <div className="feeed-News-API-error">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjdyZmo5dmV4NGo0dmV1Y2g0Z29uejIzZ3VrYW1yZ282anB1bDBmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  if (error) {
    return (
      <p className="feeed-News-API-error">{"Feed News API Request Failed"}</p>
    );
  }

  return (
    <div className="container">
      <SectionButton
        buttonClicked={isFeedNewsOpen}
        actionToggle={toggleSectionFeedNews}
        setSection={changeSectionFeedNews}
        currentSection={currentSection}
      />
      {news.results &&
        news.results.map((singleNews, key) => {
          const imageUrl = singleNews.multimedia[2]
            ? singleNews.multimedia[2].url
            : null;
          let random = Math.floor(Math.random() * (max - min) + min);
          const imageSrc =
            imageUrl || 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F7c%2F1c%2Fa4%2F7c1ca448be31c489fb66214ea3ae6deb.jpg&f=1&nofb=1&ipt=873dd0cdba824c322192ff36a0057d63f5f0fc5444daa37bc1cd001f00400d5f&ipo=images";
          return (
            <>
              <article className="feed-news" key={key}>
                <a href={singleNews.url}>
                  <h3 className="text">{singleNews.subsection}</h3>
                  <h1 className="text">{singleNews.title}</h1>
                  <h2 className="text">{singleNews.abstract}</h2>
                  <img src={imageSrc} />
                  <ReadingInfo
                    randomMinRead={random}
                    author={singleNews.byline}
                  />
                </a>
                <hr />
              </article>
            </>
          );
        })}
    </div>
  );
}

export default FeedNews;
