import './App.css';
// import TextInputFOrmContainer from './components/TextInpputForm/TextInputFormContainer';
import {Route, Routes} from 'react-router-dom';
import StartGame from './pages/StarGame'
import PlayGame from './pages/PlayGame'

function App() {
    return (

            <Routes>
                <Route path='/start' element={<StartGame />}/>
                <Route path='/play' element={<PlayGame />}/>
                <Route path='/' element={<div>Home</div>} />
            </Routes>
    );
}

export default App;
