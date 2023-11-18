import { SignoutButton } from './styled-components/header'

const Logout = ({ setToken }) => {
  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <SignoutButton
      className="h-full w-full flex justify--center align--center allcaps"
      type="button"
      onClick={logout}
    >
      <span>sign out</span>
    </SignoutButton>
  )
}

export default Logout
