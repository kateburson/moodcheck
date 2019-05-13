import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "",
    currency: "",
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="email"
          label="Email"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="password"
          label="Password"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="password2"
          label="Confirm Password"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);