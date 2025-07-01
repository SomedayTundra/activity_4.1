import './App.css'
import Add from './components/Add.jsx'
import Subtract from './components/Subtract.jsx'
import Multiply from './components/Multiply.jsx'
import Divide from './components/Divide.jsx'

function App() {
    return (
        <>
            <h1>Type in values to see some math</h1>
            <Add />
            <Subtract />
            <Multiply />
            <Divide />
        </>
    )
}

export default App
