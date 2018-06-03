import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Login from './components/Login';

const styles = (theme) => ({
  main: {
    height: '100%',
    marginTop: '64px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '48px',
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main className={classes.main}>
          <Login />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
