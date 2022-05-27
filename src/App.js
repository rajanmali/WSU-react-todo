import { useState, useEffect } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  const [currentTask, setCurrentTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Fetch all task list fron json-server
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!currentTask) {
      alert('Please enter the name for the new To Do item');
    } else {
      // Call add task function to update db.json
      addTasks({
        id: taskList.length + 1,
        value: currentTask,
        completed: false,
      });
      setCurrentTask('');
    }
  };

  const handleTaskComplete = (taskId) => {
    const patchTask = taskList.find((task) => task.id === taskId);
    updateTask(taskId, { ...patchTask, completed: !patchTask.completed });
  };

  const handleClearAllTask = (e) => {
    e.preventDefault();
    if (taskList.length > 0) {
      deleteAllTasks();
    } else {
      alert('Cannot clear list with no tasks. Try entering a task first.');
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3004/tasks');
      res.data?.[0] ? setTaskList(res.data) : setTaskList([]);
      setLoading(false);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const addTasks = async (task) => {
    try {
      await axios.post('http://localhost:3004/tasks', task);
      fetchTasks();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await axios.put(`http://localhost:3004/tasks/${id}`, task);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAllTasks = async () => {
    try {
      const res = await axios.delete('http://localhost:3004/tasks');
      console.log(res);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Row className="d-flex justify-content-center">
        <Col lg={4}>
          <AddItem
            currentTask={currentTask}
            handleChange={handleChange}
            handleAddTask={handleAddTask}
          />
          <ItemList
            loading={loading}
            taskList={taskList}
            handleTaskComplete={handleTaskComplete}
            handleClearAllTask={handleClearAllTask}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
