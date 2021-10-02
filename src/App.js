
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
    "id": 1,
    "text": "Eat",
    "day": "7:00 PM",
    "reminder": false,
    },
    {
      "id": 2,
      "text": "Eat",
      "day": "7:00 PM",
      "reminder": false,
      },
  ])


  // Add Task
  const addTask = async (task) => {


  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = async (id) => {

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Remiinder 
  const toggleReminder = async (id) => {
    
    setTasks(tasks.map((task) => 
      task.id === id 
      ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <Router>
    <div className='container'>
      <Header 
        title="Task App" 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      
      <Route path='/' exact render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> 
        : 'Tasks Empty'
        }
        </>
      )} 
      />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
