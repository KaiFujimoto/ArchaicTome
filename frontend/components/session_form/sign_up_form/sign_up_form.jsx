import React from 'react';
import { withRouter } from 'react-router-dom';
import { days, months, years } from '../../../util/date_util';
import { merge } from 'lodash';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     first: false,
    //     last: false,
    //     email: false,
    //     password: false
    // };
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
    e.preventDefault();
    const user = this.userAttributes();
    this.props.signup(user);
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.errors.errors.length > 0) {
  //     debugger
  //     this.toggleErrorClass(newProps);
  //   }
  // }

  // mouseOver(gender) {
  //   this.setState({gender: gender});
  // }

  // toggleErrorClass(newProps) {
  //   const errorTypes = ["Email", "Password", "First", "Last"];
  //   debugger
  //     if (newProps.errors.errors.join(' ').includes(errorTypes[0])) {
  //       this.setState({email: true });
  //     }
  //     debugger
  //     if (newProps.errors.errors.join(' ').includes(errorTypes[1])) {
  //       this.setState({password: true });
  //     }
  //     if (newProps.errors.errors.join(' ').includes(errorTypes[2])) {
  //       this.setState({first: true });
  //     }
  //     if (newProps.errors.errors.join(' ').includes(errorTypes[3])) {
  //       this.setState({last: true });
  //     }
  //     // const that = this;
  //     // errorTypes.forEach(type => {
  //     //   if (newProps.errors.errors.join(' ').includes(type)) {
  //     //     const newState = merge({}, this.state.errors, {`${type}`: true});
  //     //     debugger
  //     //     that.setState({errors: newState});
  //     //   }
  //     // });
  // }

  validate() {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    };
  }
  // {this.props.errors.errors.map((error, i) => (
  //   <li key={`error-${i}`}>
  //     {error}
  //   </li>
// ))}

  renderErrors() {
    return(
      <ul className='sign-up-errors'>
        {this.props.errors.errors.map( (error, idx) => {
          return (
            <ul>
              <li key={idx}>
                {error}
              </li>
              <br />
            </ul>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="sign-up-form">
        <h1>Create a New Account</h1>
        <h3>It’s free and always will be.</h3>
        <form className="sign-up-form-form" onSubmit={this.handleSubmit}>
          <ul className="sign-up-form-names">
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
          <ul className="sign-up-form-emails">
            <input
              ref={(input) => this.email = input }
              placeholder="Email"
              type="text"
              ></input>
            <br />
            <input
              ref={(input) => this.password = input }
              placeholder="New password"
              type="password"
              ></input>
          </ul>
          <ul className="other-half-of-form">
            <li>
              <h5>Birthday</h5>
              <ul className="sign-up-form-birthdays">
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
              <h6>Gender</h6>
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
              <button className='sign-up-button' onClick={this.handleSubmit}>Create Account</button>
            </li>
            <ul>
              {this.props.errors.errors ? this.renderErrors() : ''}
            </ul>
          </ul>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
