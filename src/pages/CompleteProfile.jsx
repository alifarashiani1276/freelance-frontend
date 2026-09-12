import CompleteProfileForm from "../features/authentication/CompleteProfileForm";
import HexBackground from "../features/authentication/HexBackground";

function CompleteProfile() {
  return (
    <div className="complete-profile auth-page-dark" style={{ background: "#0d0d0f" }}>
      <HexBackground />
      <div className="auth-card" style={{ position: "relative", zIndex: 10 }}>
        <CompleteProfileForm />
      </div>
    </div>
  );
}

export default CompleteProfile;