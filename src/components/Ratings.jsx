import '../styles/Components/Ratings.css';

function Ratings({ rating }) {
  return (
    <div className="ratings">
      {Array(5)
        .fill('i')
        .map((_, index) =>
          index < rating ? (
            <i key={index} className="fa-solid fa-star"></i>
          ) : (
            <i key={index} className="fa-regular fa-star"></i>
          )
        )}
    </div>
  );
}

export default Ratings;
