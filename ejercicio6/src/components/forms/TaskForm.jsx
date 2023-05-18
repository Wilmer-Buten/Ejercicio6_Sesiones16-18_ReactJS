import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import LEVELS from '../../models/levels.enum';
import { Task } from '../../models/task.class';

function TaskForm({add, length}) {
  
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef('');

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    fontWeight: 'bold',
    color: 'blue' 
  }

  
  const urgentStyle = {
    fontWeight: 'bold',
    color: 'yellow' 
  }


  const blockingStyle = {
    fontWeight: 'bold',
    color: 'red' 
  }
  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input placeholder='Name of the task' ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus/>
        <input placeholder='Description of the task' ref={descriptionRef} id='inputDescriptioon' type='text' className='form-control form-control-lg' required/>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} className='form-control form-control-lg' id='selectLevel'>
          <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>    
          <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>BLocking</option>
        </select>
      <button type='submit' className='btn btn-success btn-lg ms-2'>
      { length > 0
        ? 'Add Task'
        : 'Add Your First Task!'  
      }
      </button>
      </div>
    </form>
    )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;