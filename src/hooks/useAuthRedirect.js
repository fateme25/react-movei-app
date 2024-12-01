import { getAuthResult } from "../features/Authentication/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sinInUser, SinInWithGoogle } from "../features/Authentication/auth";

export default function useAuthRedirect(
  isSignedIn,
  setIsSignedIn,
  signInUser,
  email,
  password
) {
  const navigate = useNavigate();

  useEffect(() => {
    getAuthResult()
      .then((result) => {
        if (result) {
          console.log(result.user);
          navigate("/");
        }
      })
      .catch((error) => console.error(error.message));
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (isSignedIn) return;

    setIsSignedIn(true);
    try {
      await sinInUser(email, password);
      navigate("/"); // Navigate after successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setIsSignedIn(false);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      setIsSignedIn(true);
      SinInWithGoogle();
      navigate("/")
    }
  };
  return { handleSubmit, onGoogleSignIn };
}
