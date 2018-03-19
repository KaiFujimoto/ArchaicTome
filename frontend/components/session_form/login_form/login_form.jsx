import React from 'react';
import { withRouter } from 'react-router-dom';
// import Typed from 'typed.js';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(input) {
    return e => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  demo(e) {
    this.setState({email: 'chopper@strawhats.com', password: 'starwars'});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      this.props.clearErrors();
    });
  }

  renderErrors() {
    return(
      <ul className='login-form-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='login-form'>
        <form onSubmit={this.handleSubmit}>
          <span>{this.props.errors.length > 0 ? this.renderErrors() : ''}</span>
          <ul>
            <label className='login-form-label'> Email <br />
              <input
                onChange={this.updateInput('email')}
                type="text"
                value={this.state.email}
                ></input>
            </label>
         </ul>
         <ul>
            <label className='login-form-label'> Password <br />
              <input
                onChange={this.updateInput('password')}
                type="password"
                value={this.state.password}
                ></input>
            </label>
        </ul>
        <button className='login-form-button'>Log In</button>
        <button onClick={this.demo.bind(this)} className='login-form-button'>Demo</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
