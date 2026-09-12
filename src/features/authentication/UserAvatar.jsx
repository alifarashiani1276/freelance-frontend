import useUser from "./useUser";

function UserAvatar() {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="user-avatar__skeleton user-avatar__skeleton--image rounded-full animate-pulse" />
        <div className="user-avatar__skeleton user-avatar__skeleton--name rounded animate-pulse" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <img
        src="/user.jpg"
        alt={user.name}
        className="user-avatar__image rounded-full object-cover"
      />

      <span className="user-avatar__name text-sm font-medium">
        {user.name}
      </span>
    </div>
  );
}

export default UserAvatar;