import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AddFish = (props) => {
  const [formData, setFormData] = useState({
    type: " ",
    weight: 0,
    reel: "N/A",
    bait: "N/A",
    date: "yyyy-MM-dd",
  })
  const [photoData, setPhotoData] = useState({})
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddFish(formData, photoData.photo)
    props.handleAddFish(formData)
    navigate('/fish')
  }

  const handleChangePhoto = evt => {
    setPhotoData({photo: evt.target.files[0]})
  }

  return (
    <>
      <h1>Add Fish</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="type-input" className="form-label">
            Type of Fish
          </label>
          <input 
            type="text"
            className="form-control"
            id="type-input"
            name="type"
            value={formData.type}
            onChange={handleChange}
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
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <h3>Gear Used</h3>
        <div>
          <label htmlFor="reel-input">
            Reel Used
          </label>
          <select 
            name="reel" 
            id="reel-input"
            value={formData.reel}
            onChange={handleChange}
          >
            <option value="N/A">N/A</option>
            <option value="Spincast Reel">Spincast Reel</option>
            <option value="Baitcasting Reel">Baitcasting Reel</option>
            <option value="Spinning Reel">Spinning Reel</option>
            <option value="Fly Reel">Fly Reel</option>
          </select>
        </div>
        <div>
          <label htmlFor="bait-input">
            Bait Used
          </label>
          <select 
            name="bait" 
            id="bait-input"
            value={formData.bait}
            onChange={handleChange}
          >
            <option value="N/A">N/A</option>
            <option value="Plastic">Plastic Bait</option>
            <option value="Live">Live Bait</option>
            <option value="Artificial">Artificial Bait</option>
            <option value="Dead">Dead Bait</option>
          </select>
        </div>
        <div>
          <label htmlFor="date-input">
            Date Caught
          </label>
          <input 
            type="date" 
            name="date"
            id="date-input"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="photo-upload" className="form-label">
            Upload Photo
          </label>
          <input 
            type="file"
            className="form-control"
            name="photo"
            id="photo-upload"
            onChange={handleChangePhoto}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
            
          >
            Add Catch
          </button>
        </div>
      </form>
    </>
  );
}

export default AddFish;