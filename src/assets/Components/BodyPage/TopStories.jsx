import { useDispatch, useSelector } from "react-redux";
import {
  setLoading2,
  setError2,
  setNews2,
} from "../../Store/TopStoriesReducer.jsx";
import axios from "axios";
import { useEffect } from "react";
import "../../Styles/TopStories.css";
import ReadingInfo from "./ReadingInfo.jsx";

function TopStories() {
  const dispatch = useDispatch();
  const APIKEY = "gZUVYwEoMvoAEkuzRv2ZItDcCouLcs0T";
  const URL = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${APIKEY}`;
  const loading = useSelector((state) => state.topStories.loading);
  const error = useSelector((state) => state.topStories.error);
  const news = useSelector((state) => state.topStories.news);

  const min = 2;
  const max = 7;

  useEffect(() => {
    dispatch(setLoading2(true));
    axios
      .get(URL)
      .then((response) => {
        dispatch(setNews2(response.data));
        dispatch(setLoading2(false));
      })
      .catch((error) => {
        dispatch(setError2(error));
        console.error(error, "API Request Failed");
        dispatch(setLoading2(false));
      });
  }, []);

  if (loading) {
    return (
      <div className="top-stories-API-error">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjdyZmo5dmV4NGo0dmV1Y2g0Z29uejIzZ3VrYW1yZ282anB1bDBmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  if (error) {
    return (
      <p className="top-stories-API-error">
        {"Top Stories API Request Failed"}
      </p>
    );
  }

  return (
    <div className="top-stories-container">
      {news.results.slice(0, 23).map((singleNews, key) => {
        const imageUrl =
          singleNews.multimedia && singleNews.multimedia[2]
            ? singleNews.multimedia[2].url
            : null;
        let random = Math.floor(Math.random() * (max - min) + min);
        const imageSrc =
          imageUrl ||
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F7c%2F1c%2Fa4%2F7c1ca448be31c489fb66214ea3ae6deb.jpg&f=1&nofb=1&ipt=873dd0cdba824c322192ff36a0057d63f5f0fc5444daa37bc1cd001f00400d5f&ipo=images";
        return (
          <article key={key} className="top-stories">
            <h1>
              <a href={singleNews.url}>
                {singleNews.title} <ReadingInfo randomMinRead={random} />
              </a>
            </h1>
            <img src={imageSrc} alt={singleNews.title} />
          </article>
        );
      })}
    </div>
  );
}

export default TopStories;
