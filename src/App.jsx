// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddFish from './pages/AddFish/AddFish'
import FishList from './pages/FishList/FishList'
import EditFish from './pages/EditFish/EditFish'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as fishService from './services/fishService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [fishes, setFishes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllFishes = async () => {
      const FishData = await fishService.getAll()
      setFishes(FishData)
    }
    fetchAllFishes()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const fishPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await fishService.addPhoto(photoData, id)
  }

  const handleAddFish = async (newFishData, photo) => {
    const newFish = await fishService.create(newFishData)
    if (photo) {
      newFish.photo = await fishPhotoHelper(photo, newFish._id)
    }
    setFishes([...fishes, newFish])
    navigate('/fish')
  }

  const handleDeleteFish = async id => {
    const deletedFish = await fishService.deleteOne(id)
    setFishes(fishes.filter(fish => fish._id !== deletedFish._id))
  }

  const handleUpdateFish = async (updatedFishData, photo) => {
    const updatedFish = await fishService.update(updatedFishData)
    if (photo) {
      updatedFish.photo = await fishPhotoHelper(photo, updatedFish._id)
    }
    const newFishesArray = fishes.map(fish =>
      fish._id === updatedFish._id ? updatedFish : fish
    )
    setFishes(newFishesArray)
    navigate('/fish')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/add"
          element={<AddFish handleAddFish={handleAddFish}/>}
        />
        <Route
          path="/fish"
          element={<FishList fishes={fishes} handleDeleteFish={handleDeleteFish} user={user}/>}
        />
        <Route
          path="/edit"
          element={<EditFish />}
          handleUpdateFish={handleUpdateFish}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
