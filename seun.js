const loan = 1000000;
let balance;
const tenure = 12
const paymentPerMonth = loan / tenure;
const rate = 5
// console.log(paymentPerMonth)
for (let i = 0; i < tenure; i++) {
    if (i == 0) {
    let currentInterest = (rate / 100) * loan;
        let paymentForthemonth = ((rate / 100) * loan) + paymentPerMonth;
        // console.log(paymentForthemonth)
    balance = loan - paymentPerMonth;

    }
    balance = loan - paymentPerMonth * i;
    let currentInterest = (rate / 100) * balance

    let paymentForthemonth = ((rate / 100) * balance) + paymentPerMonth;
    console.log(`current balance ${balance} \n\n`, `paymentforthemonth: ${paymentForthemonth} \n\n`, `current interest: ${currentInterest}\n\n` )
}