const getDateDifference = (givenDate) => {
  let dateDifference = new Date().getTime() - new Date(givenDate).getTime();

  const secondsDifference = Math.floor(dateDifference / 1000);
  const differenceInMinutes = Math.floor(secondsDifference / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);

  let message;

  if (differenceInHours > 0) {
    const remainingMinutes = differenceInMinutes % 60;
    if (remainingMinutes) {
      message = `${differenceInHours} hours ${remainingMinutes} minutes`;
    }
    else{
      message= `${differenceInHours} hours`;
    }
  } else if (differenceInMinutes > 0) {
    message = `${differenceInMinutes} minutes`;
  } else {
    message = `${secondsDifference} seconds`;
  }

  return message;
};

export default getDateDifference;
