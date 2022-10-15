// Basic Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// User defined imports
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quotes from './pages/Quotes'
import Error404 from './pages/Error404'

import ThemeProvider from './context/ThemeContext'

// App Component
function App() {
  return (
    <ThemeProvider>
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<Quotes/>}/>
            
            {/* Error 404 Route */}
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
