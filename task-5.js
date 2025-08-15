function resultReport(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let pass = 0;
  let fail = 0;
  for (const mark of marks) {
    total = total + mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  return {
    finalScore: Math.round(total / marks.length),
    pass: pass,
    fail: fail,
  };
}
console.log(resultReport([99, 87, 67, 12, 87]));
