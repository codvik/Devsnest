console.log(array_Clone([1, 2, 4, 0]));
function array_Clone(tmp) {
    let ans = [...tmp];
    return ans;
}