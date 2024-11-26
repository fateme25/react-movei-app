export const convertMinsToTime = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  return `${hours}h ${minutes}m`;
};

export const formattedDate = (date) => {
  const convertedDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  return convertedDate;
};
