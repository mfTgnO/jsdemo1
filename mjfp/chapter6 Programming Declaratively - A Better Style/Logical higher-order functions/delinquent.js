var serviceResult = JSON.parse(serviceResult.json);
var serviceResult2 = serviceResult[0];
const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
console.log(delinquent);