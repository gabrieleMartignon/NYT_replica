import axios from "axios";
import { useEffect } from "react";
import "../Styles/FeedNews.css";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setNews } from "../Store/FeedNewsSlice";

function FeedNews() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.feedNews.loading);
  const error = useSelector((state) => state.feedNews.error);
  const news = useSelector((state) => state.feedNews.news);

  const apikey = "gZUVYwEoMvoAEkuzRv2ZItDcCouLcs0T";
  const url = `https://api.nytimes.com/svc/news/v3/content/nyt/World.json?limit=10&api-key=${apikey}`;

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(url)
      .then((response) => {
        dispatch(setNews(response.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error));
        console.error(error, "API Request Failed");
        dispatch(setLoading(false));
      });
  }, []);

  if (loading) {
    return (
      <div>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjdyZmo5dmV4NGo0dmV1Y2g0Z29uejIzZ3VrYW1yZ282anB1bDBmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  if (error) {
    return <p>{"API Request Failed"}</p>;
  }

  return (
    <>
      {news.results &&
        news.results.map((singleNews, key) => {
          const imageUrl = singleNews.multimedia[2]
            ? singleNews.multimedia[2].url
            : null;
          return (
            <article key={key}><a href={singleNews.url}>
             <h3 className="text">{singleNews.subsection}</h3>
              <h1 className="text">{singleNews.title}</h1>
              <h2 className="text">{singleNews.abstract}</h2>
              <img src={imageUrl}/>
              </a>
              <hr />
            </article>
          );
        })}
    </>
  );
}

export default FeedNews;
