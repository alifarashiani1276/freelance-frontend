import useUser from "../features/authentication/useUser";
import UserProfile from "../features/authentication/UserProfile";
import Loading from "../ui/Loading";

function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Loading />;

  return <UserProfile user={user} />;
}

export default Profile;