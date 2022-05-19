// // code your solution here
// const superbowlWin = (record) =>{
//  const result = record.find(item => {
//      if (item.result === 'W'){
//          return item.year
//     }
//     }
//     )


//     if(result){
//         return result.year
//     } else{
//         return undefined
//     }

// } 


// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined



function superbowlWin(record){
    const win = record.find(item => item.result === 'W')
    return win ? win.year : undefined
    
    // for(const item of record){
    //     if (item.result === 'W'){
    //         return item.year
    //     }
    // }
}