import Button from 'react-bootstrap/Button';

const ItemList = () => {
  return (
    <section>
      <div>
        <h2>To Do List</h2>
        <Button>Clear</Button>
      </div>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </section>
  );
};

export default ItemList;
