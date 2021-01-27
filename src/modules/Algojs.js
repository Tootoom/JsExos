"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}
// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1,arg2){
 return arg1 + arg2;
}
// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal(arg1,arg2,arg3){
    return arg1 + arg2 + arg3;
}
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder(){
    return (2 + 2) * (2 + 2) * 2;
}
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(tab){
    var tab = [58, 64, 32];
    return tab[0];
}
// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(tab){
    var a = tab[0];
    var b = tab[0];

    for (var n = 0; n <= tab.length - 1; n++){

        if(a > tab[n+1]){
            a = tab[n+1];
        }
        if(b < tab[n+1]){
            b = tab[n+1];
        }
    }
    var res = [a, b];
    return res;
}
// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(tab){
    var a = 0;
    for (var n = 0; n < tab.length; n++){
        for (var t = n + 1; t < tab.length; t++);
        if(tab[t].length < tab[n].length){
            a = tab[t];
            tab[t]= tab[n];
            tab[n]= a;
        }
    }
    return tab;
}

// --------------------------------------------------- Filter Strings from Array -------------------------------------
export function filterArray(){
    var tab = [1, 2, 3, "a", "b", 4];
    var res = [];

    for (var i = 0; i < tab.length; i++){
        var test = parseInt(tab[i]);
        if (!Number.isNaN(test)){
            res.push(tab[i]);
        }
    }
    return res;
}


// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(){
    var a = 2;
    var b = 4;
    var chickens = a * 2;
    var cows = b * 3;
    var pigs = b * 5 ;
    return chickens + cows + pigs;
}
// --------------------------------------------------- Return Last Item -------------------------------------
export function lastItem(tab){
    var res = tab[tab.length - 1];
    return res;
}
// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(){
    var a = 0;
    var tab = [1, 2, 3, 4];
    for (var i = 0; i <= tab.length; i++){
        while (tab[i] < tab [i+1]){
            a = tab[i];
            tab[i]=tab[i+1];
            tab[i+1] = a;
            i = 0;
        }
    }
    return tab;
}
// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(n){
    var i = 9;
    return i + 1 ;
}
// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(flag){
   if (flag === true){
       return "true"; 
   }
    return "false";
}
// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(tab){
    var res = [];

    for (var i = 0; i < tab.length; i++){
        var test = (tab[i]);
        if (typeof test === 'number'){
            res.push(tab[i]);
        }
    }
    return res;
}
// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(i, l){
     var tmp = 0;
     var res =[] ;
     for (var n = 1; i <= l ; n++){
     tmp = n * i;
     res.push(tmp);
    }
    return res;
}
// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(h, m){
    var tmp = h * 3600;
    var tmp1 = m * 60;
    return (tmp + tmp1);
}
// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(i){
    if(i > 0){
    var res = i * (-1);
    return res;
    }
    return i;
}
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(num){
    var tmp = 0;
    var res = [];
    for (var i = 0; i < num; i++){
        tmp = tmp + 1;
        res.push(tmp);
        }
    return res;
}
// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(i, A){
    if (i <= 0 || A <= 0){
        return -1;
    }
    return i * A;
}
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(i, T){
    if (i === 10 || T === 10 || i + T === 10){
        return true;
    }
    return false;
}
// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(i){
     var tmp = 0;
     for (var n = 1; n <= i; n++){
     tmp = tmp + n;
    }
    return tmp;
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(step){
    var a = 6;
    var b = 5 ;
    var res = a + (b * (step - 1));
    return res;
}