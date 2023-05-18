import React from 'react'
import TaskListComponent from '../../components/container/TaskListComponent';
import Navbar from '../../components/pure/Navbar';


function TasksPage() {
  return (
    <div>
    <Navbar></Navbar>
    <div>
        <TaskListComponent></TaskListComponent>
    </div>
    </div>
  )
}

export default TasksPage;