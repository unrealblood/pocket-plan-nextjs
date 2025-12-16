import SignInForm from "@/components/auth/signin/SignInForm";

export default async function SignIn() {
  return (
    <div className="flex-1 overflow-auto p-2">
      <section className="mt-2">
        {/* Page Title */}
        <div className="text-2xl font-bold text-center">
            SignIn
        </div>
      </section>

      <section>
        {/* SignIn Form */}
        <SignInForm />
      </section>
    </div>
  );
}