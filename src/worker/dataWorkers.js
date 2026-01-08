onmessage=(e)=>{
    const {number}=e.data;
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
}