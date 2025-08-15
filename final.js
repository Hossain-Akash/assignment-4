function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const result = fare + fare * (20 / 100) + 30;
  return result;
}

console.log(totalFine("Gorib tai ticket katinai"));

//2
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("");
  let capital = result.toUpperCase();
  return capital;
}
console.log(onlyCharacter(true));
//3
function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let team1 = player1.foul + player1.cardY + player1.cardR;
  let team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 === team2) {
    return "Tie";
  } else if (team1 < team2) {
    const result = player1.name;
    return result;
  } else {
    return player2.name;
  }
}

const result = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  "France"
);
console.log(result);
//4
function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  //   for (const el of arr1) {
  //     // console.log(el);
  //     if (arr1[el] !== arr2[el]) {
  //       return false;
  //     }
  //   }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSame([2, 5, 6], 256));
