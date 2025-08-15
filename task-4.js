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
