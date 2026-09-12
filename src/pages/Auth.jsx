import AuthContainer from "../features/authentication/AuthContainer";
import HexBackground from "../features/authentication/HexBackground";

function Auth() {
  return (
    <div
      className="auth-page-dark relative flex items-center justify-center px-4 overflow-hidden"
      style={{ background: "#0d0d0f" }}
    >
      <HexBackground />
      <div style={{ position: "relative", zIndex: 10 }}>
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
