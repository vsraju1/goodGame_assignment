import "./Card.css";

const Card = ({ allData, searchVal }) => {
  return (
    <div className="container">
      {allData
        .filter((item) => {
          return searchVal.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(searchVal);
        })
        .map((item) => (
          <div className="card_container" key={item.id}>
            <div className="img_container">
              <img src={item.image} alt="Image" />
            </div>
            <div className="text">
              <h2>{item.name.substring(0, 14)}...</h2>
              <h4>{item.price}</h4>
              <p>
                Ratings: {item.rating.average.toFixed(1)}({item.rating.reviews})
              </p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
