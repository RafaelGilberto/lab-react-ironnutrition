import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });
  const [users, setUsers] = useState(props.food);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUsers([...users, form]);
  }

  function addFood() {
    const clone = [...users];
    clone.unshift({
      name: form.name,
      calories: Number(form.calories),
      image: form.image,
      servings: Number(form.servings),
    });
    setUsers(clone);
    console.log(props.food);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input
        id="name"
        value={form.name}
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="image">Image</label>
      <Input
        id="image"
        value={form.image}
        name="image"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        id="calories"
        value={form.calories}
        name="calories"
        type="number"
        onChange={handleChange}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        id="servings"
        value={form.servings}
        name="servings"
        type="number"
        onChange={handleChange}
      />

      <button type="submit" onClick={addFood}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
