#!/usr/bin/env node

var sieve = new Array();
var maxsieve = 1000;
var maxcount = 100;
var primes = [];

// Initialise a Sieve of Eratosthenes
for (var i = 2; i <= maxsieve; i++)
{
    sieve[i] = 1; // mark all prime by default
}

// Use the Sieve to find primes and count them as they are found.
for (var prime = 2; prime <= maxsieve && primes.length < maxcount; prime++)
{
    // start from the next prime
    if (sieve[prime] == 1) 
    {
	primes.push(prime);
	// start from prime^2 as smaller multiples will be marked
        for (i = Math.pow(prime,2); i <= maxsieve; i += prime)
        {
            sieve[i] = 0; // composite
        }
    }
}

// Write primes to csv file
// write to clear file with first prime, then append formatted with commas 
var fs = require('fs');
var outfile = "primes.txt";
fs.writeFileSync(outfile, 2); 
for (i=1; i < primes.length; i++) {
	var out = "," + primes[i];		
	fs.appendFileSync(outfile, out);
}

console.log(primes.length + " primes generated and written to " + outfile);
