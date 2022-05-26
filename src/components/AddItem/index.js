import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const AddItem = ({ currentTask, handleChange, handleAddTask }) => {
  return (
    <div className="add-item--wrapper">
      <Form>
        <InputGroup>
          <FormControl
            placeholder="Add Item"
            aria-label="Add Item"
            aria-describedby="basic-addItem"
            className="add-item--input"
            value={currentTask}
            onChange={handleChange}
          />
          <Button className="add-item--button" onClick={handleAddTask}>
            +
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default AddItem;
