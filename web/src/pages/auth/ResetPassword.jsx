import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

export default function ResetPassword() {
  return (
    <AuthLayout pgtitle="Reset Password" navBtn="Login">
      <InputGroup type="email" contenttitle="Email" />
    </AuthLayout>
  );
}
