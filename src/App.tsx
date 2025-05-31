import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkoutForm } from './components/WorkoutForm';
import Header from './components/Header';
import { WorkoutList } from './components/WorkoutList';
import { WorkoutStats } from './components/WorkoutStats';


function App() {
  

  return (
     <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<WorkoutForm />} />
            <Route path="/history" element={<WorkoutList />} />
            <Route path="/stats" element={<WorkoutStats />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
