import { Link } from "react-router-dom";

const FishCard = ({fish, handleDeleteFish, user, randFishImgId}) => {
  return (
    <div className="card">
      {/* {fish.photo
        ? <img src={fish.photo} alt="fish" style={{width: '240px'}}/>
        : null
      } */}
      <img 
        src={
          fish.photo
            ? fish.photo
            : `https://picsum.photos/id/${randFishImgId}/640/480`
        } 
        alt="fish"
        className="card-img-top"
        style={{width: '240px'}}
      />
      <div className="card-body">
        <h2 className="card-text">{fish.name}</h2>
        <p className="card-text">Fish Type: {fish.type.toUpperCase()}</p>
        <p className="card-text">Fish Weight: {fish.weight}lbs</p>
        <p className="card-text">Reel Used: {fish.reel}</p>
        <p className="card-text">Bait Used: {fish.bait}</p>
      </div>
      {user?.profile === fish.owner._id && 
        <div className="card-footer">
          <Link className="btn btn-sm btn-warning" to="/edit" state={{fish}}>
            Edit
          </Link>
          <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeleteFish(fish._id)}>
            Delete
          </button>
        </div>
      }
    </div>
  );
}

export default FishCard;