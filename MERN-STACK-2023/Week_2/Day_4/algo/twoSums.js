
function twoSums (arr,target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (((arr[i]+arr[j])==target)&&(i!=j)) {
                return [i,j]
            }
        }
    }
    return output
}

console.log(twoSums([2,11,7,15],9))
console.log(twoSums([3,2,4],6))
console.log(twoSums([3,3],6))
