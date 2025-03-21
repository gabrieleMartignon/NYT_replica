import "./ReadingInfo.css"

function ReadingInfo({ randomMinRead, author }) {
  return (
    <div className="reading-info">
      <h3>{randomMinRead} MIN READ</h3>
      <h3>{author}</h3>
    </div>
  );
}

export default ReadingInfo;
