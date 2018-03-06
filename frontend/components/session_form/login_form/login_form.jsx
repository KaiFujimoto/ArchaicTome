import React from 'react';
import { withRouter } from 'react-router-dom';

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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul>
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
        <h4>{this.props.errors ? this.renderErrors() : ''}</h4>
        <form onSubmit={this.handleSubmit}>
          <label> Email
            <input
              onChange={this.updateInput('email')}
              type="text"
              value={this.state.email}
              ></input>
          </label>
          <label> Password
            <input
              onChange={this.updateInput('password')}
              type="password"
              value={this.state.password}
              ></input>
          </label>
          <button onClick={() => this.props.login(this.state)}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
