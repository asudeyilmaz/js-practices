const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (let customer of accounts) {
    let sum = customer.reduce((acc, val) => acc + val, 0);
    maxWealth = Math.max(maxWealth, sum);
  }
  return maxWealth;
};

const maxWealth = (accounts) => {
  let maximum = -Infinity;
  for (let customer of accounts) {
    let sum = 0;
    for (let val of customer) {
      sum += val;
    }
    if (sum > maximum) maximum = sum;
  }
  return maximum;
};

const maximumWealthSoFar = (accounts) => {
  let sum = accounts.map((customer) => customer.reduce((a, b) => a + b, 0));
  return Math.max(...sum);
};
