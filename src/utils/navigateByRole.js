export function navigateByRole(role, navigate) {
  switch (role) {
    case "FREELANCER":
      navigate("/freelancer");
      break;
    case "OWNER":
      navigate("/owner");
      break;
    case "ADMIN":
      navigate("/admin");
      break;
    default:
      navigate("/");
  }
}
