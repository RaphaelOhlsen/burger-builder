import React from 'react';
import classes from './BuildControl.css';

import PropTypes from 'prop-types'; 

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button 
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled} >Less 
    </button>
    <button 
      className={classes.More}
      onClick={props.added} >More
    </button>
  </div>
);

buildControl.propTypes = {
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export default buildControl;