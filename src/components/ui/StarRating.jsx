function StarRating() {
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
        <button className="text-xl font-bold bg-color-dark-blue w-full rounded-full py-2">Rate</button>
      </div>
    </>
  );
}

export default StarRating;
