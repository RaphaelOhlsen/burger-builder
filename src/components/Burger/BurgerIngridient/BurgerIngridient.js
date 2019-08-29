import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import classes from './BurgerIngridient.css';

class BurgerIngridient extends Component {
  render () {
    let ingredient = null;

    switch (this.props.type) {
      
      case ('bread-botton'):
        ingredient = <div classMame={classes.BreadBotton}></div>
        break;
  
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>
        break;
          
      case ('cheese'):
        ingredient = <div className={classes.Chease}></div>
        break;
  
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>
        break;
  
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
        
      default:
        ingredient = null
    }
  
    return ingredient;
  }
 
};

BurgerIngridient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngridient;