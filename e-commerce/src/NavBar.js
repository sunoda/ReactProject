function NavBar() {
  return (
    <div className="nav_bar">
      <div className="help">
        <i className="far fa-file-alt"></i>
        <span>AYUDA</span>
      </div>
      <div className="sign_in">
        <i className="far fa-user"></i>
        <span>SIGN IN</span>
      </div>
      <div className="langs">
        <div className="lang">ES</div>
        {/* <div className="lang">CH</div> */}
        <i className="fas fa-sort-down"></i>
      </div>
    </div>
  )
}

export default NavBar