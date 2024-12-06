import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isBool: false,
    errorMessage: '',
    isShowPassword: false,
  }

  usernameSubmit = event => {
    this.setState({username: event.target.value})
  }

  passwordSubmit = event => {
    this.setState({password: event.target.value})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({isBool: true, errorMessage: errorMsg})
  }

  submitTheForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccess(data.jwt_token)
      this.setState({username: '', password: ''})
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  showPassword = () => {
    const {isShowPassword} = this.state
    if (isShowPassword) {
      this.setState({isShowPassword: false})
    } else {
      this.setState({isShowPassword: true})
    }
  }

  render() {
    const {username, password, isBool, errorMessage, isShowPassword} =
      this.state
    const showing = isShowPassword ? 'text' : 'password'
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginDiv">
        <div className="loginSubDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="webiste logo"
            className="img1"
          />
          <form onSubmit={this.submitTheForm}>
            <div className="inputDiv">
              <label htmlFor="input1">USERNAME</label>
              <br />
              <input
                id="input1"
                type="text"
                onChange={this.usernameSubmit}
                placeholder="Username"
                value={username}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="input2">PASSWORD</label>
              <br />
              <input
                id="input2"
                type={showing}
                onChange={this.passwordSubmit}
                placeholder="Password"
                value={password}
              />
            </div>

            <div className="inputDiv2">
              <input
                type="checkbox"
                id="checkbox"
                className="label"
                onChange={this.showPassword}
              />
              <br />
              <label htmlFor="checkbox" className="label">
                Show Password
              </label>
            </div>
            <button type="submit" className="button112">
              Login
            </button>
            {isBool && <p className="error">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
