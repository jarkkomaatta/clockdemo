import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [Time, setTime] = useState(new Date())
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  
  
  return (
    <div style={{margin: '30px',fontSize: '60px'}}>
      {Time.toLocaleTimeString()}
    </div>
  );
}

export default App;
