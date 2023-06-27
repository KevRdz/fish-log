import styles from './FishList.module.css'
import FishCard from '../../components/FishCard/FishCard';

const FishList = (props) => {
  return (
    <>
      <h1>Fish List</h1>
      <div className={styles.container}>
        {props.fishes.map(fish => 
          <FishCard key={fish._id} fish={fish}/>
        )}
      </div>
    </>
  );
}

export default FishList;