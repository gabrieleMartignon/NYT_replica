function ReadingInfo({ randomMinRead, author }) {
  return (
    <p className="reading-info">
      <h3>{randomMinRead} MIN READ</h3>
      <h3>{author}</h3>
    </p>
  );
}

export default ReadingInfo;
