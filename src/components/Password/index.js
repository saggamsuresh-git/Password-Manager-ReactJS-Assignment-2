// import {Component} from 'react'

// import './index.css'
// import EachPassword from '../EachPassword'

// class Password extends Component {
//   state = {
//     passwordsList: [],
//     url: '',
//     userName: '',
//     password: '',
//     id: '',
//     showPwd: false,
//   }

//   addId = () => {
//     const {passwordsList} = this.state
//     console.log(passwordsList.length + 1)
//     this.setState({id: passwordsList.length + 1})
//   }

//   showPassword = () => {
//     const {showPwd} = this.state
//     this.setState({
//       showPwd: !showPwd,
//     })
//   }

//   deletePassword = id => {
//     const {passwordsList} = this.state
//     const newList = passwordsList.filter(each => each.id !== id)
//     this.setState({passwordsList: newList})
//   }

//   handleSubmitForm = e => {
//     e.preventDefault()
//     this.addId()

//     const {url, userName, password, id} = this.state

//     const newItem = {url, userName, password, id}
//     this.setState(prevState => ({
//       passwordsList: [...prevState.passwordsList, newItem],
//     }))
//     this.websiteInput.value = ''
//     this.usernameInput.value = ''
//     this.passwordInput.value = ''
//     this.setState({url: '', userName: '', password: ''})
//     this.onHandleChange = this.onHandleChange.bind(this)
//     this.onHandleSubmit = this.onHandleSubmit.bind(this)
//   }

//   render() {
//     // const {userName} = this.state
//     // console.log(userName)
//     // const colours = Math.random(['#0ea5e9', '#64748b', '#14b8a6', '#b91c1c'])
//     const {passwordsList} = this.state
//     const isListEmpty = passwordsList.length < 1
//     console.log(passwordsList)

//     const renderNoPasswords = () => (
//       <div className="no-passwords-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//           alt="no passwords"
//           className="no-passwords-img"
//         />
//         <h1>No Passwords</h1>
//       </div>
//     )

//     const renderPasswords = () => (
//       <ul>
//         {passwordsList.map(each => (
//           <EachPassword
//             each={each}
//             key={each.id}
//             deletePassword={this.deletePassword}
//             isShow={this.showPwd}
//           />
//         ))}
//       </ul>
//     )

//     const mainPage = () => {
//       const imgSrc =
//         'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
//       return (
//         <div className="passwords-bg">
//           <nav>
//             <img className="app-logo" src={imgSrc} alt="app logo" />
//           </nav>
//           <div className="input-password-section">
//             <form
//               id="password-form"
//               className="inputs"
//               onSubmit={this.addPassword}
//             >
//               <h1>Add New Password</h1>
//               <div className="input-website">
//                 <div className="form-input-img-container">
//                   <img
//                     className="input-images"
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                     alt="website"
//                   />
//                 </div>

//                 <input
//                   value={this.url.value}
//                   className="form-input"
//                   type="e-mail"
//                   placeholder="Enter Website"
//                   id="websiteInput"
//                   onChange={e => this.setState({url: e.target.value})}
//                 />
//               </div>

//               <div className="input-username">
//                 <div className="form-input-img-container">
//                   <img
//                     className="input-images"
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                     alt="username"
//                   />
//                 </div>

//                 <input
//                   className="form-input"
//                   type="text"
//                   placeholder="Enter Username"
//                   id="usernameInput"
//                   value={this.userName.value}
//                   onChange={e => this.setState({userName: e.target.value})}
//                 />
//               </div>

//               <div className="input-password">
//                 <div className="form-input-img-container">
//                   <img
//                     className="input-images"
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                     alt="password"
//                   />
//                 </div>
//                 <input
//                   className="form-input"
//                   type="password"
//                   placeholder="Enter Password"
//                   id="passwordInput"
//                   value={this.password.value}
//                   onChange={e => this.setState({password: e.target.value})}
//                 />
//               </div>
//               <div className="add-btn-container">
//                 <button
//                   className="add-btn"
//                   type="submit"
//                   onClick={e => this.handleSubmitForm(e)}
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>
//             <div>
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
//                 alt="password manager"
//                 className="password-manager"
//               />
//             </div>
//           </div>
//           <div className="your-passwords-section">
//             <div className="search-input-container">
//               <h1>
//                 Your Passwords <sup>0</sup>
//               </h1>
//               <div className="search-input-and-search-icon">
//                 <div className="search-icon-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                     alt="search"
//                     className="search-icon"
//                   />
//                 </div>
//                 <input id="searchInput" type="text" className="search-input" />
//               </div>
//             </div>
//             <hr />
//             <div className="show-passwords-container">
//               <div className="show-passwords">
//                 <input
//                   onClick={this.showPassword}
//                   id="checkbox"
//                   type="checkbox"
//                 />
//                 <label htmlFor="checkbox">Show Passwords</label>
//               </div>
//             </div>
//             <div className="pwd-page">
//               {isListEmpty ? renderNoPasswords() : renderPasswords()}
//               {/* <div className="no-passwords-container">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//                   alt="no passwords"
//                   className="no-passwords-img"
//                 />
//                 <h1>No Passwords</h1>
//               </div>
//               {passwordsList.map(each => (
//                 <EachPassword each={each} isShow="false" />
//               ))} */}
//             </div>
//           </div>
//         </div>
//       )
//     }
//     return <div>{mainPage()}</div>
//   }
// }

// export default Password

import {Component} from 'react'
import './index.css'
import EachPassword from '../EachPassword'

class Password extends Component {
  state = {
    // passwordsList: JSON.parse(localStorage.getItem('passwordsList')) || [],
    passwordsList: [],
    url: '',
    userName: '',
    password: '',
    id: '',
    showPwd: false,
    // urlError: false,
    // userNameError: false,
    // passwordError: false,
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     const {passwordsList} = this.state
  //     if (prevState.passwordsList !== passwordsList) {
  //       localStorage.setItem('passwordsList', JSON.stringify(passwordsList))
  //     }
  //   }

  addId = () => {
    const {passwordsList} = this.state
    this.setState({id: passwordsList.length + 1})
  }

  showPassword = () => {
    this.setState(prevState => ({showPwd: !prevState.showPwd}))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const newList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: newList})
  }

  handleSubmitForm = e => {
    e.preventDefault()
    const {url, userName, password, id} = this.state

    // if (url === '' || userName === '' || password === '') {
    //   this.setState({
    //     urlError: url === '',
    //     userNameError: userName === '',
    //     passwordError: password === '',
    //   })
    //   return
    // }

    this.addId()

    const newItem = {url, userName, password, id}
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
      url: '',
      userName: '',
      password: '',
      searchInput: '',
      //   urlError: false,
      //   userNameError: false,
      //   passwordError: false,
    }))
  }

  handleChange = (e, field) => {
    this.setState({[field]: e.target.value})
    console.log([field], this.passwordsList)
  }

  handleSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {
      passwordsList,
      url,
      userName,
      password,
      showPwd,
      searchInput,
      //   urlError,
      //   userNameError,
      //   passwordError,
    } = this.state
    // const isListEmpty = passwordsList.length < 1

    const filteredPasswordsList = passwordsList.filter(
      each =>
        each.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
        each.url.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const renderNoPasswords = () => (
      <div className="no-passwords-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwords-img"
        />
        <p>No Passwords</p>
      </div>
    )

    const renderPasswords = () => (
      <ul>
        {filteredPasswordsList.map(each => (
          <EachPassword
            each={each}
            key={each.id}
            deletePassword={this.deletePassword}
            isShow={showPwd}
          />
        ))}
      </ul>
    )

    const mainPage = () => {
      const imgSrc =
        'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
      return (
        <div className="passwords-bg">
          <nav className="nav">
            <img className="app-logo" src={imgSrc} alt="app logo" />
          </nav>
          <div className="input-password-section">
            <form
              id="password-form"
              className="inputs"
              onSubmit={this.handleSubmitForm}
            >
              <h1>Add New Password</h1>
              <div className="input-website">
                <div className="form-input-img-container">
                  <img
                    className="input-images"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  value={url}
                  className="form-input"
                  type="text"
                  placeholder="Enter Website"
                  onChange={e => this.handleChange(e, 'url')}
                />
                {/* {urlError && (
                  <span className="error-message">*required field</span>
                )} */}
              </div>
              <div className="input-username">
                <div className="form-input-img-container">
                  <img
                    className="input-images"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  value={userName}
                  className="form-input"
                  type="text"
                  placeholder="Enter Username"
                  onChange={e => this.handleChange(e, 'userName')}
                />
                {/* {userNameError && (
                  <span className="error-message">*required field</span>
                )} */}
              </div>
              <div className="input-password">
                <div className="form-input-img-container">
                  <img
                    className="input-images"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  value={password}
                  className="form-input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={e => this.handleChange(e, 'password')}
                />
                {/* {passwordError && (
                  <span className="error-message">*required field</span>
                )} */}
              </div>
              <div className="add-btn-container">
                <button className="add-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="bg-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                alt="password manager"
                className="password-manager"
              />
            </div>
          </div>
          <div className="your-passwords-section">
            <div className="search-input-container">
              <h1 className="passwords-count">
                Your Passwords
                <span>
                  <p className="count">{passwordsList.length}</p>
                </span>
              </h1>
              <div className="search-input-and-search-icon">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  id="searchInput"
                  type="search"
                  className="search-input"
                  onChange={this.handleSearchInput}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />
            <div className="show-passwords-container">
              <div className="show-passwords">
                <input
                  onClick={this.showPassword}
                  id="checkbox"
                  type="checkbox"
                />
                <label className="label" htmlFor="checkbox">
                  Show Passwords
                </label>
              </div>
            </div>
            <div className="pwd-page">
              {filteredPasswordsList.length < 1
                ? renderNoPasswords()
                : renderPasswords()}
            </div>
          </div>
        </div>
      )
    }

    return <div>{mainPage()}</div>
  }
}

export default Password
