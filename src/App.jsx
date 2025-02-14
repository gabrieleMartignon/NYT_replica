import { createSlice, configureStore } from '@reduxjs/toolkit'
import HeadPage from './assets/Components/HeadPage/HeadPage'
import '../src/assets/Styles/App.css'
import FeedNews from './assets/Components/FeedNews'
import Header from './assets/Components/HeadPage/Header'

function App() {
  

const menuButtonSlice = createSlice({
  name: "menuButtonSlice",
  initialState: false,
  reducers: {
  open: (state) => state = true,
  close: (state) => state = false
  }
})




  return (
    <>
   <HeadPage/>
   <Header/>
   <FeedNews/>
    </>
  )
}

export default App
