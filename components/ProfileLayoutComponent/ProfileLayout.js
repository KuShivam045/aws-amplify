import ProfileInnerPage from "./ProfileInnerPage"


const ProfileLayout = ({ children }) => {
  return (
    <div>
      <ProfileInnerPage/>
      <div>{children}</div>
    </div>
  )
}

export default ProfileLayout