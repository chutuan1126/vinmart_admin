/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import AuthActions from 'redux/AuthRedux';

import { LOGIN_FORM } from 'const/Schema';
import { styles } from './styles';

const useStyles = makeStyles(styles);

function LoginForm({ className }) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, LOGIN_FORM);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if(formState.isValid) {
      dispatch(AuthActions.signInWithEmailAndPasswordRequest('user', formState.values));
    }
  };

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          fullWidth
          name="email"
          variant="outlined"
          label="Email address"
          onChange={handleChange}
          error={hasError('email')}
          value={formState.values.email || ''}
          helperText={hasError('email') ? formState.errors.email[0] : null}
        />
        <TextField
          fullWidth
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          error={hasError('password')}
          value={formState.values.password || ''}
          helperText={hasError('password') ? formState.errors.password[0] : null}
        />
      </div>
      <Button
        size="large"
        type="submit"
        color="secondary"
        variant="contained"
        disabled={!formState.isValid}
        className={classes.submitButton}
      >
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
