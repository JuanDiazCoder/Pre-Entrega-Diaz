import Nav from './components/Nav/Nav'
import ListProduct from './components/ListProduct/ListProduct';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';

function App() {  
  const [cardCount,setCardCount] = useState(1);

  return (
    <>
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Nav cardCount={cardCount} setCardCount={setCardCount} title="🚀 Agencia Quilmeña 🚀" />
      <ListProduct greetings="Productos destacados del mes:"/>
      <Footer  />
    </div>
    </>
  )
}



export default App