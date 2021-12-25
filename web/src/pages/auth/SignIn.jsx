import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

export default function SignIn() {
  return (
    <AuthLayout pgtitle="Login">
      <InputGroup type="text" contenttitle="Username" />
      <InputGroup type="password" contenttitle="Password" />
    </AuthLayout>
  );
}
