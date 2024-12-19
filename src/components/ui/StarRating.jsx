import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function StarRating({onClose}) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function handleRating() {
    if (!currentUser.isAnonymous) {
      onClose();
    } else {
      toast.error("Pleas sign in first");
      navigate("/register");
    }
  }
  return (
    <>
      <div className="rating rating-lg py-6">
        {Array.from({ length: 10 }, (_, index) => (
          <input
            key={index}
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            defaultChecked={index === 0} // Set the first radio button as checked
          />
        ))}
      </div>
      <div>
        <button
          className="text-xl font-bold bg-color-dark-blue w-full rounded-full py-2"
          disabled={!currentUser?.isAnonymous}
          onClick={handleRating}
        >
          Rate
        </button>
      </div>
    </>
  );
}

export default StarRating;
