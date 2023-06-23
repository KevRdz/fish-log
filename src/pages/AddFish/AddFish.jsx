

const AddFish = () => {

  return (
    <>
      <h1>Add Fish</h1>
      <div className="form-group mb-3">
        <label htmlFor="type-input" className="form-label">
          Type of Fish
        </label>
        <input 
          type="text"
          className="form-control"
          id="type-input"
          name="type"
          required
        />
      </div>
      <div>
        <label htmlFor="weight-input" className="form-label">
          Fish Weight
        </label>
        <input 
          type="number"
          className="form-control"
          id="weight-input"
          name="weight"
        />
      </div>
      <div>
        <label htmlFor="gear-input">
          Gear Used
        </label>
        <select name="reel" id="reel-options">
          <option value="baitcaster">Baitcaster</option>
          <option value="spincast">Spincast</option>
          <option value="spin">Spinning Reel</option>
          <option value="fly">Fly Reel</option>
        </select>
        <select name="bait" id="bait-options">
          <option value="Plastic">Plastic</option>
          <option value="Live">Live Bait</option>
          <option value="artificial">Artificial</option>
          <option value="dead bait">Dead Bait</option>
        </select>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary btn-fluid"
        >
          Add Catch
        </button>
      </div>
    </>
  );
}

export default AddFish;