import useUser from "../features/authentication/useUser";
import UserActivity from "../features/authentication/UserActivity";
import Loading from "../ui/Loading";

function Activity() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Loading />;

  return <UserActivity user={user} />;
}

export default Activity;
