import AuthLayout from "../../layouts/AuthLayout";
import InputGroup from "../../components/auth/InputGroup";

export default function ResetPassword() {
  const reset_password = (e) => {
    e.preventDefault()
  }

  return (
      <AuthLayout pgtitle="Reset Password">
        <form onSubmit={reset_password}>
          <InputGroup type="email" contenttitle="Email" />
          <button type="submit">Reset</button>
        </form>
      </AuthLayout>
  );
}
