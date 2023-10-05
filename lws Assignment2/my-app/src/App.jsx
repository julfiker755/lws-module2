import './App.css'
import store from './Redux/store'
import Home from './components/Home/Home'
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>
      <div>
      <Home></Home>
    </div>
    </Provider>
  )
}

export default App
