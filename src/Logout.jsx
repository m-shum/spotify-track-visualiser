const Logout = ({ setToken }) => {
  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <div className="h-full flex justify--center align--center">
      <button className="allcaps" onClick={logout}>
        sign out
      </button>
    </div>
  )
}

export default Logout
