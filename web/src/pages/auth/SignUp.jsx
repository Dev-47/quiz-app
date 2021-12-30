import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

export default function SignUp() {
  // page title
  document.title = "Sign Up - Quiz App";
  return (
    <AuthLayout pgtitle="Sign Up" navBtn="Login">
      <InputGroup type="text" contenttitle="Username" />
      <InputGroup type="email" contenttitle="Email" />
      <InputGroup type="password" contenttitle="Password" />
    </AuthLayout>
  );
}
