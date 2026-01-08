// /* eslint-env worker */
// onmessage = (e) => {
//     const startTime = performance.now();
//     const { number } = e.data;
//     let prime = [];

//     for (let i = 2; i <= number; i++) {
//         let isPrime = true;
//         // Optimization: only check up to square root of i
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log("yes");
//             prime.push(i);
//         }
//     } // <--- You were missing this brace!
//     const endTime = performance.now();
//     console.log(`Calculation took ${endTime - startTime} milliseconds`);
//     postMessage(prime);
// };  


/* eslint-env worker */
onmessage = (e) => {
    console.log("yes");
    const { number } = e.data;
 // Sieve of Eratosthenes Algorithm
 const startTime = performance.now();
 let isPrime = new Uint8Array(number + 1).fill(1);
 isPrime[0] = isPrime[1] = 0;

 for (let p = 2; p * p <= number; p++) {
     if (isPrime[p] === 1) {
         for (let i = p * p; i <= number; i += p)
             isPrime[i] = 0;
     }
 }

 let primes = [];
 for (let p = 2; p <= number; p++) {
     if (isPrime[p] === 1) primes.push(p);
 }


    const endTime = performance.now();
    console.log(`Calculation took ${endTime - startTime} milliseconds`);
    postMessage(primes);
};  