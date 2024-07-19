const Shimmer = () => {
  return (
    <div className="restraunt-list">
      {new Array(10).fill("").map((_, i) => {
        return <h1 key={i}>Loading...</h1>;
      })}
    </div>
  );
};

export default Shimmer;
