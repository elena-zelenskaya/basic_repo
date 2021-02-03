var x = null;  //object (!)
var y = undefined;  //undefined
var z = NaN;  //number (!!)
var a; //undefined

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);
function helperFunction(str, sets) {
    sets[str] = str;
    if (str.length <= 0)
        return sets;
    for (let i = 0; i < str.length; i++) {
        let substring = str.slice(0, i) + str.slice(i+1, str.length);
        sets = helperFunction(substring, sets);
    }    
    return sets;
}
function inOrderSubset(str) {  
    sets = {};
    sets = helperFunction(str, sets);
    return Object.keys(sets); //makes an array from object
}

var arr=[""];
function inOrderSubsetMyVersion(str) {    
    if (str.length > 0) 
        {
            if (!arr.includes(str)) {
                arr.push(str);
            }
            for (var i = 0; i < str.length; i++) {
            var newStr = str.replace(str.charAt(i), '');
            inOrderSubset(newStr);
            }
        }
        
    return arr;
}


//("abc") -> ["", "a", "b", "c", "ab", "bc", "ac", "abc"]
var result = inOrderSubset("abcdf");
var myResult = inOrderSubsetMyVersion("abcdf");
console.log(result);
console.log(myResult);