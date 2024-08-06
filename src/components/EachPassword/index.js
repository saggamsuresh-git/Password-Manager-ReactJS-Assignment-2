import './index.css'

const EachPassword = props => {
  const {each, isShow, deletePassword} = props
  const {url, userName, password, id} = each
  const noPassword = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars"
      />
    </>
  )

  const deleteItem = () => {
    deletePassword(id)
  }

  return (
    <li className="password-container">
      <div className="profile-container">
        <div className="picture-container">{url[0].toUpperCase()}</div>
        <div className="url-username-password-container">
          <p className="url">{url}</p>
          <p>{userName}</p>
          <p>{isShow ? `${password}` : noPassword()}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-icon-container"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default EachPassword
