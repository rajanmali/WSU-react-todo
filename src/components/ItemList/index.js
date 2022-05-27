import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ItemList = ({
  loading,
  taskList,
  handleTaskComplete,
  handleClearAllTask,
}) => {
  return (
    <section className="item-list--wrapper">
      <div className="item-list--header">
        <h1>To Do List</h1>
        <Button
          className="item-list--clear_button"
          onClick={handleClearAllTask}
        >
          Clear
        </Button>
      </div>
      {loading ? (
        <h3>Loading To-Do List</h3>
      ) : (
        <ul>
          {taskList?.[0] &&
            taskList.map((task) => (
              <Form.Check
                type="checkbox"
                key={task.id}
                id={`default-checkbox--${task.id}`}
              >
                <Form.Check.Input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskComplete(task.id)}
                />
                <Form.Check.Label
                  className={task.completed ? 'item-list__complete' : ''}
                >
                  {task.value}
                </Form.Check.Label>
              </Form.Check>
            ))}
        </ul>
      )}
    </section>
  );
};

export default ItemList;
