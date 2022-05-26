import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ItemList = ({ taskList, handleTaskComplete, handleClearAllTask }) => {
  return (
    <section className="item-list--wrapper">
      <div className="item-list--header">
        <h2>To Do List</h2>
        <Button
          className="item-list--clear_button"
          onClick={handleClearAllTask}
        >
          Clear
        </Button>
      </div>
      <ul>
        {taskList.map((task) => (
          <Form.Check
            type="checkbox"
            key={task.key}
            id={`default-checkbox--${task.key}`}
          >
            <Form.Check.Input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskComplete(task.key)}
            />
            <Form.Check.Label
              className={task.completed ? 'item-list__complete' : ''}
            >
              {task.value}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
