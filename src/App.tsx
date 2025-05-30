import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkoutForm } from './components/WorkoutForm';
import Header from './components/Header';
import '../src/style/app.css'
import { WorkoutList } from './components/WorkoutList';

function App() {
  

  return (
     <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<WorkoutForm />} />
            <Route path="/history" element={<WorkoutList />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
