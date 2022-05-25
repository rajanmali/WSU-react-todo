import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div className="container">
      <Row>
        <Col>
          <AddItem />
          <ItemList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
