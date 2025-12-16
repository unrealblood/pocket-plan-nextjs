import SignupForm from "@/components/auth/signup/SignupForm";

export default async function Signup() {
  return (
    <div className="flex-1 overflow-auto p-2">
      <section className="mt-2">
        {/* Page Title */}
        <div className="text-2xl font-bold text-center">
            Signup
        </div>
      </section>

      <section>
        {/* Signup Form */}
        <SignupForm />
      </section>
    </div>
  );
}