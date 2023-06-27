

const FishCard = ({fish}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-text">{fish.name}</h2>
          <p className="card-text">This {fish.type} is {fish.weight}lbs, and was caught using a {fish.reel} with {fish.bait} bait.</p>
        </div>
      </div>
    </>
  );
}

export default FishCard;