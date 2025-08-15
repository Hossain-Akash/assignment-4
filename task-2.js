function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("");
  let capital = result.toUpperCase();
  return capital;
}
console.log(onlyCharacter(true));
