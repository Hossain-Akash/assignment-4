function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const result = fare + fare * (20 / 100) + 30;
  return result;
}

console.log(totalFine("Gorib tai ticket katinai"));
