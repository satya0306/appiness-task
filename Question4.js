function beautifulDays(startDay, endDay, luckyDay) {
    let count = 0;
    for (let i = startDay; i <= endDay; i++) {
        
        let reverseDay = parseInt(i.toString().split('').reverse().join(''))
        const differenceOfReverse = Math.abs(i - reverseDay);

        if(differenceOfReverse % luckyDay === 0){
          count++;
        }
    }
    return count;
}
console.log(beautifulDays(12,15,3))