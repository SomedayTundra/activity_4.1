
import './App.css'
import SimpleMath from './components/SimpleMath.jsx'
import Add from './components/Add.jsx'
import Subtract from './components/Subtract.jsx'
import Multiply from './components/Multiply.jsx'
import Divide from './components/Divide.jsx'

function App() {
    return (
        <>
            <h1>Type in values to do some math!</h1>
            <SimpleMath />
            <Add />
            <Subtract />
            <Multiply />
            <Divide />

        </>
    )
}

export default App
