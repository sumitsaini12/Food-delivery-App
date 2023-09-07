import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { initialState } from './context/initialState'
// import reducer from './context/reducer'
// import { StateProvider } from './context/StateProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)




{/* <StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider> */}