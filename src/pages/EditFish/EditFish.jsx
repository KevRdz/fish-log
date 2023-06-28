// import { useState } from "react";
import { Link } from "react-router-dom";

const EditFish = () => {
  return (
    <>
      <h1>Edit Fish</h1>
      <form autoComplete="off">
        <div className="form-group mb-3">
          <label htmlFor="type-input" className="form-label">
            Fish Type
          </label>
          <input 
            type="text"
            className="form-control"
            id="type-input"
            name="type"
            required
          />
        </div>
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
          <label htmlFor="text">
            Reel Used
          </label>
          <select 
            name="reel" 
            id="reel-input"
          >
            <option value="...">...</option>
            <option value="Spincast Reel">Spincast Reel</option>
            <option value="Baitcasting Reel">Baitcasting Reel</option>
            <option value="Spinning Reel">Spinning Reel</option>
            <option value="Fly Reel">Fly Reel</option>
          </select>
        </div>
        <div className="form-group mb-3">
        <label htmlFor="bait-input">
            Bait Used
          </label>
          <select 
            name="bait" 
            id="bait-input"
          >
            <option value="...">...</option>
            <option value="Plastic">Plastic</option>
            <option value="Live">Live Bait</option>
            <option value="artificial">Artificial</option>
            <option value="Dead">Dead Bait</option>
          </select>
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
          >
            Save Fish
          </button>
        </div>
        <div className="d-grid">
          <Link to="/fish" className="btn btn-danger btn-fluid">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}

export default EditFish;