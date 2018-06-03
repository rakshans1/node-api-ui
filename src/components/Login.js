import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: '48px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    height: '400px',
    minWidth: '480px',
    padding: '32px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '304px',
      padding: '24px 8px',
    }
  },
  textField: {
    width: '448px',
    // paddingBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '288px',
    }
  },
  textWrap: {
    marginBottom: '16px'
  }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      username: null,
      password: null,
    }
  }

  handleChange = name => event =>  {
    this.setState({
      [name]: event.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(this.state);

    const res = await fetch('https://raxx-api.herokuapp.com/api/users/signup', {
      body: JSON.stringify(this.state),
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const j = await res.json();
    console.log(j);
  }

  render() {
    const {classes} = this.props;
      return (
        <div className={classes.wrap}>
        <Card className={classes.card}>
          <form className={classes.form} autoComplete="off" onSubmit={(e) => this.onSubmit(e)}>
            <div className={classes.textWrap}>
            <TextField
              required
              label="Fullname"
              onChange={this.handleChange('name')}
              className={classes.textField}
            />
            </div>
            <div className={classes.textWrap}>
            <TextField
              required
              label="Username"
              onChange={this.handleChange('username')}
              className={classes.textField}
            />
            </div>
            <div className={classes.textWrap}>
            <TextField
              required
              type="email"
              label="Email"
              onChange={this.handleChange('email')}
              className={classes.textField}
            />
            </div>
            <div className={classes.textWrap}>
            <TextField
              required
              type="password"
              label="Password"
              onChange={this.handleChange('password')}
              className={classes.textField}
            />
            </div>
            <Button color="primary" size="medium" variant="raised"
            type="submit">Login</Button>
          </form>
        </Card>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);