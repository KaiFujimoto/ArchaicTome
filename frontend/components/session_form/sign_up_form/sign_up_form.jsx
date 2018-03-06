import React from 'react';
import { withRouter } from 'react-router-dom';
import { days, months, years } from '../../../util/date_util';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userAttributes() {
    const first_name = this.first_name.value;
    const last_name = this.last_name.value;
    const email = this.email.value;
    const password = this.password.value;
    const birth_date = this.year.value + "-" +
                this.month.value + "-" +
                this.day.value;
    const gender = this.gender.value;
    return { first_name, last_name, email, password, birth_date, gender };
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = this.userAttributes();
    this.props.signup(user);
  }

  // mouseOver(gender) {
  //   this.setState({gender: gender});
  // }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div>
        <h1>Create a New Account</h1>
        <h3>It’s free and always will be.</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
              <input
                ref={(input) => this.first_name = input }
                placeholder="First name"
                type="text"
                ></input>
              <input
                ref={(input) => this.last_name = input }
                placeholder="Last name"
                type="text"
                ></input>
          </ul>
          <ul>
            <input
              ref={(input) => this.email = input }
              placeholder="Email"
              type="text"
              ></input>
            <br />
            <input
              ref={(input) => this.password = input }
              placeholder="New Password"
              type="password"
              ></input>
          </ul>
          <ul>
            <select
              defaultValue='month'
              ref={input => this.month = input}>
              {months}
            </select>
            <select
              defaultValue='day'
              ref={input => this.day = input}>
              {days}
            </select>
            <select
              defaultValue='year'
              ref={input => this.year = input}>
              {years}
            </select>
          </ul>
          <ul>
            <select
              defaultValue='gender'
              ref={input => this.gender = input}
              >
              <option disabled value='gender'>Gender</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
          </ul>
          <button onClick={this.handleSubmit}>Create Account</button>
          <ul>
            {this.props.errors.errors ? this.renderErrors() : ''}
          </ul>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
