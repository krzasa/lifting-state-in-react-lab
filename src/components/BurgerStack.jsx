const BurgerStack = (props) => {
    const removeIngredient = (ingredient) => {
      props.removeIngredient(ingredient);
    };
  
    return (
      <ul>
        {props.burger.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeIngredient(ingredient)}>-</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;