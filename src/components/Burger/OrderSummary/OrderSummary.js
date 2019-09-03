import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button 
        btnType="Danger" 
        clicked={props.purchaseCancelled}>Cancel</Button>
      <Button 
        btnType="Success" 
        clicked={props.purchaseContinued}>Continued</Button>
    </Aux>
  )
}

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
}


export default orderSummary;