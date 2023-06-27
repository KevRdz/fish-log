

const FishCard = ({fish, handleDeleteFish, user}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{fish.name}</h2>
        <p className="card-text">This {fish.type} is {fish.weight}lbs, and was caught using a {fish.reel} with {fish.bait} bait.</p>
      </div>
      {user?.profile === fish.owner._id && 
        <div className="card-footer">
          <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeleteFish(fish._id)}>
            Delete
          </button>
        </div>
      }
    </div>
  );
}

export default FishCard;