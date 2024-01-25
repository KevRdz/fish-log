import styles from './FishList.module.css'
import FishCard from '../../components/FishCard/FishCard';

const FishList = (props) => {
  const fishIds = [469, 481, 588, 615, 700, 716, 848, 881, 1011, 1069, 124, 147, 172, ]

  return (
    <>
      <h1>Fish List</h1>
      <div className={styles.container}>
        {props.fishes.map(fish =>{
            <FishCard key={fish._id} fish={fish} handleDeleteFish={props.handleDeleteFish} user={props.user} randFishImgId={fishIds[Math.floor(Math.random()*(fishIds.length))]}/>
          })}
      </div>
    </>
  );
}

export default FishList;