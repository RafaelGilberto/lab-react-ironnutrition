import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(foods);
  return (
    <div className="App">
      <div>
        <AddFoodForm food={menu} />

        <Button> Hide Form / Add New Food </Button>
        {/* Display Search component here */}
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {menu.map((currentElement, index) => {
            return (
              <>
                <FoodBox food={currentElement} index={index} menu={setMenu} />
              </>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;
