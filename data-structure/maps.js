let revenuePerMonth = new Map();
revenuePerMonth.set("january", 1000);
revenuePerMonth.set("february", 7000);
revenuePerMonth.set("march", 87000);
revenuePerMonth.set("april", 100000);
revenuePerMonth.set("may", 120000);
revenuePerMonth.set("june", 150000);
revenuePerMonth.set("july", 180000);
revenuePerMonth.set("august", 200000);
revenuePerMonth.set("september", 220000);
revenuePerMonth.set("october", 250000);
revenuePerMonth.set("november", 280000);
revenuePerMonth.set("december", 300000);
// console.log(revenuePerMonth.get("september"))
// console.log(revenuePerMonth.has("january"))
// console.log(revenuePerMonth.size)
// console.log(revenuePerMonth)
// revenuePerMonth.delete("may")
// console.log(revenuePerMonth)
// revenuePerMonth.clear()
// console.log(revenuePerMonth)

for (let month of revenuePerMonth.entries()) {
  console.log(month);
}
