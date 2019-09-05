import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop'
import PropTypes from 'prop-types';


// This could be a functional component, doesn't be a class
class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show || 
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Modal;
