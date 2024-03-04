import { useState } from 'react'
import './App.css'
import Meniu from '../components/Meniu.tsx';
import Card from '../components/Cards.tsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Meniu />
      <Card />
      </div>
      <h1>САЛАМ АЛЕКСУС</h1>
      <h1>ЭТО МОЁ ТОЛСТОЖОПОЕ ПРИЛОЖЕНИЕ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          у кары {count} сантиметров
        </button>
        <p>
          Ставь класс если Кирюха толстый
        </p>
      </div>
      <p className="read-the-docs">
        Я пздц как устал с этим реактом
      </p>
    </>
  )
}

export default App
