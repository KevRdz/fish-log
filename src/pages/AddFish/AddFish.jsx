import { useState, useRef, useEffect } from "react";


const AddFish = (props) => {
  const [formData, setFormData] = useState({
    name: " ",
    weight: 0,
    reel: "...",
    bait: "...",
  })

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddFish(formData)
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
            <option value="...">...</option>
            <option value="spincast">Spincast</option>
            <option value="spin">Spinning Reel</option>
            <option value="fly">Fly Reel</option>
          </select>
          <label htmlFor="bait-input">
            Bait Used
          </label>
          <select 
            name="bait" 
            id="bait-input"
            value={formData.bait}
            onChange={handleChange}
          >
            <option value="...">...</option>
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