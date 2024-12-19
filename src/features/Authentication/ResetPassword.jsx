import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/navbars/topBar";
import Footer from "../../components/ui/Footer";
import { PasswordReset } from "../Authentication/auth";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await PasswordReset(email);
      setEmailMessage(`
      The reset instructions have been sent to this email address.`);
      navigate("/login");
    } catch (error) {
        console.log(error)
      if (error.code === "auth/user-not-found") {
        setEmailMessage("User not found, try again!");
      } else {
        setEmailMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  }
  return (
    <>
      <TopBar />
      <form onSubmit={handleSubmit} className="py-32 px-8">
        {emailMessage && (
          <p className="m-8 container mx-auto mb-20 py-10 text-color-light-1 font-bold text-3xl text-center shadow-lg shadow-gray-300/15">
            Password Reset
            <br />
            <small>{emailMessage}</small>
          </p>
        )}
        <div className="form-control">
          <h2 className="font-bold text-2xl text-color-light-1 pb-3">
            Reset password{" "}
          </h2>
          <p className="mb-4">
            {" "}
            Enter the email you used to sign up for a TMDB account and we'll
            send you the steps required to reset your password.
          </p>

          <label className="label">
            <p className="label-text">Email</p>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              className="grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your email?"
              required
            />
          </label>
        </div>
        <div className="mt-6 font-bold">
          <button
            type="submit"
            className="bg-color-grey-2 text-gray-700 rounded p-2 mr-5"
          >
            Continue
          </button>
          <Link to="/login" className="text-neutral-200 hover:link">
            Cancel
          </Link>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default ResetPassword;
