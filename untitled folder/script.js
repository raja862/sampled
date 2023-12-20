// const isPrime=(n)=>{
//     for (let i=2; i<n ; i++){
//         if(n%2==0){
//             return ("this is not pirme number")
//         }



    
//     }
//     return("this is prime number")
// }

// let prime=isPrime(6)
// console.log(prime)


// const isPrime=(n)=>{
//     for(let i=2; i<n ; i++){
//         if(n%i===0){
//             return("this not prime number")
//         }
//     }
//     return("this is prime number")
// }
// const num= isPrime(9)
// console.log(num)

// const primed=(rows)=>{
//     for (let i=1 ; i<=rows ; i++){
//         let speace=' '.repeat(rows - i);
//         let pattern ="#".repeat(2*i -1);
//         console.log(speace + pattern)
//     }
// }
// primed(5)

// const letters = ["a", "b", "c", "a", "b", "c", "a", "b"];
// const count = {};
// letters.forEach(e => count[e] ? count[e]++ : count[e] = 1 );

// console.log(count)


// let arr = [1, 2, 3, 2, 3, 4, 5, 
//     5, 6, 1, 1, 4, 5, 7, 8, 8];

// function count(arr, element) {
// return arr.filter(
//  (ele) => ele == element).length;
// };

// console.log(count(arr))

// const url="https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
 fetch("https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json")
.then((data)=>data.json()).then((data)=>console.log(data))


// function foo (res){
//     for(let i=0; i<res.length ; i++){
//         console.log(res[i])
//     }
// }
