import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormHelperText, TextField, Typography, Link } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import AuthActions from 'redux/AuthRedux';

import { REGISTER_FORM } from 'const/Schema';
import { styles } from './styles';

const useStyles = makeStyles(styles);

function RegisterForm({ className }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, REGISTER_FORM);
    const checked = formState.values?.policy;

    setFormState(formState => ({
      ...formState,
      isValid: checked && !errors ? true : false,
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
    if (formState.isValid) {
      dispatch(AuthActions.createAccountWithEmailAndPasswordRequest('user', formState.values));
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
          label="First name"
          name="firstName"
          variant="outlined"
          onChange={handleChange}
          error={hasError('firstName')}
          value={formState.values.firstName || ''}
          helperText={hasError('firstName') ? formState.errors.firstName[0] : null}
        />
        <TextField
          name="lastName"
          label="Last name"
          variant="outlined"
          onChange={handleChange}
          error={hasError('lastName')}
          value={formState.values.lastName || ''}
          helperText={hasError('lastName') ? formState.errors.lastName[0] : null}
        />
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
        <div>
          <div className={classes.policy}>
            <Checkbox
              name="policy"
              color="primary"
              className={classes.policyCheckbox}
              checked={formState.values.policy || false}
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1" >
              I have read the{' '}
              <Link
                to="#"
                variant="h6"
                color="secondary"
                underline="always"
                component={RouterLink}
              >
                Terms and Conditions
              </Link>
            </Typography>
          </div>
          {hasError('policy') && (
            <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>
          )}
        </div>
      </div>
      <Button
        size="large"
        type="submit"
        color="secondary"
        variant="contained"
        disabled={!formState.isValid}
        className={classes.submitButton}
      >
        Create account
      </Button>
    </form>
  );
};

export default RegisterForm;