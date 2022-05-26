import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  const [currentTask, setCurrentTask] = useState('');
  const [taskList, setTaskList] = useState([
    { key: 0, value: 'task1', completed: false },
    { key: 1, value: 'task2', completed: true },
    { key: 2, value: 'task3', completed: false },
  ]);

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!currentTask) {
      alert('Please enter the name for the new To Do item');
    } else {
      setTaskList((prevTaskList) => [
        ...prevTaskList,
        { key: prevTaskList.length + 1, value: currentTask, completed: false },
      ]);
      setCurrentTask('');
    }
  };

  const handleTaskComplete = (taskKey) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.key === taskKey ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearAllTask = (e) => {
    e.preventDefault();
    if (taskList.length > 0) {
      setTaskList([]);
    } else {
      alert('Cannot clear list with no tasks. Try entering a task first.');
    }
  };

  return (
    <div className="container">
      <Row>
        <Col>
          <AddItem
            currentTask={currentTask}
            handleChange={handleChange}
            handleAddTask={handleAddTask}
          />
          <ItemList
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
