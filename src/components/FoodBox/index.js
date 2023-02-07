import { Card, Col, Button } from 'antd';
import foods from '../../foods.json';
import { useState } from 'react';
// Iteration 2
function FoodBox(props) {
  function handleDelete(index) {
    /* const clone = [...props.food];
    clone.splice(index, 1);*/
    const clone = [...foods];
    clone.splice(index, 1);
    props.menu(1);
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
        <Button
          type="primary"
          onClick={() => {
            return handleDelete(props.index);
          }}
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
