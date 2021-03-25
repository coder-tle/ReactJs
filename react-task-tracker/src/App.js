import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map(
        // (task) => {
        //   if (task.id === id) {
        //     console.log(`task ${task.id} have been toggled`);
        //     return { ...task, reminder: !task.reminder };
        //   } else {
        //     return task;
        //   }
        // }
        (task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
