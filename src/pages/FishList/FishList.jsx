import styles from '../FishList/FishList.module.css'

const FishList = (props) => {
  return (
    <>
      <h1>Fish List</h1>
      <div className={styles.container}>
        {props.fishes.map(fish => 
          <div key={fish._id}>
            <p>Fish Type: {fish.type}</p>
            <p>Fish Weight: {fish.weight}</p>
            <p>Reel Used: {fish.reel}</p>
            <p>Bait Used: {fish.bait}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FishList;