import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

export default function ResetPassword() {
  // page title
  document.title = "Reset Password - Quiz App";
  return (
    <AuthLayout pgtitle="Reset Password" navBtn="Login">
      <InputGroup type="email" contenttitle="Email" />
    </AuthLayout>
  );
}
