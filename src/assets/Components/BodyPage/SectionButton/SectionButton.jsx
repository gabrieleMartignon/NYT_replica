import "./SectionButton.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SectionButton(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSectionTopStories = useSelector((state) => state.topStoriesSection[1]);
  const currentSectionFeedNews = useSelector((state) => state.feedNewsSection[1]);
  const sections = [
    ["Arts", "Sports", "Business", "Fashion"],
    ["Food", "Health", "Movies", "Opinion"],
    ["Science", "Technology", "US", "World"],
  ];


  function setURL() {
    navigate(`/Home/${currentSectionFeedNews}/${currentSectionTopStories}`)
  }

  useEffect(() => {
    setURL();
  }, [currentSectionFeedNews, currentSectionTopStories])


  return (
    <div className="selected-section">
      <button
        className="section-button"
        onClick={() => dispatch(props.actionToggle())}
      >
        Select Section
      </button>
      <div className={props.buttonClicked ? "section-open" : "section-closed"}>
        {sections.map((column, key) => (
          <div key={column} className="section-column">
            {column.map((section, key) => (
              <li
                key={section}
                onClick={() => {
                  dispatch(props.setSection(section))
                }}
              >
                {section}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionButton;
