import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Heading({ children }) {
  return (
    <div className="flex justify-between items-center mt-24">
      <h2 className="py-4 text-3xl font-bold text-color-light-1">{children}</h2>
      <h4 className="text-color-brand-1">
        View All <FontAwesomeIcon icon={faAngleRight} />
      </h4>
    </div>
  );
}

export default Heading;
