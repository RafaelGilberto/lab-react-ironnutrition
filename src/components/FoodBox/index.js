import { Card, Col, Button } from 'antd';
import foods from '../../foods.json';
import { useState } from 'react';
// Iteration 2
function FoodBox(props) {
  function handleDelete() {
    /* const clone = [...props.food];
    clone.splice(index, 1);*/
    const clone = [...props.menu];
    clone.splice(props.index, 1);
    props.setMenu(clone);
    console.log(clone);
  }
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={handleDelete}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
