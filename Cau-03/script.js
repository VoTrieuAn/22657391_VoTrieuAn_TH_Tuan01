function average(...score) {
  return [...arguments].reduce((a, b) => a + b, 0) / arguments.length;
}

function determineWinner(dolphinsScores, koalasScores) {
  const avgDolphins = average(...dolphinsScores);
  const avgKoalas = average(...koalasScores);

  console.log(`Dolphins average score: ${avgDolphins}`);
  console.log(`Koalas average score: ${avgKoalas}`);
  
  // Bonus 1:
  if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
    console.log("Dolphins win the trophy!");
  } else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log("Koalas win the trophy!");
  }
  // Bonus 2
  else if (avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas) {
    console.log("It's a draw!");
  } else {
    console.log("No team wins the trophy.");
  }
}

// Test data
console.log("Test Data 1:");
determineWinner([96, 108, 89], [88, 91, 110]);

console.log("Test Data Bonus 1:");
determineWinner([97, 112, 101], [109, 95, 123]);

console.log("Test Data Bonus 2:");
determineWinner([97, 112, 101], [109, 95, 106]);
