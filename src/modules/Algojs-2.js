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

    var min = tab[0];
    var max = tab[tab. tab.length -1];
    var tmp = 0;

    for (var i = 0; i <= tab.length; i++){

    while(tab[i] > tab[i+1]){
      tmp = tab[i]
      tab[i] = tab[i+1]
      tab[i+1] = tmp
    }

    }
    return [min, max]

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
export function filterArray(tab){
    var result = [];
    var i = 0;
    
    
        for(var n = 0; n < tab.length; n++){
            if(tab[n] <= 0 || tab[n] >= 0){ 
            result[i] = tab[n];
            i++
            } 
        }
        return result
    }

// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(v1, v2, v3){
    return v1*2 + v2*4 + v3*4
}
// --------------------------------------------------- Return Last Item -------------------------------------

// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(tab){

    var tmp = 0;
    
    for(var i = 0; i < tab.length; i++){
    
          while(tab[i] < tab[i+1]){
            tmp = tab[i]
            tab[i] = tab[i+1]
            tab[i+1] = tmp
            i = 0
          }
        }
        return tab
    }    
// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(v1){
    return v1 = v1 + 1
}

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(flag){
    if(flag === true){
        return 'true'
    }else return 'false'
}
// --------------------------------------------------- Filter out Strings from an Array -------------------------------------

// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(num, length){
    var result = [];
    var j = 0;
        
        for(var i = 1; i <= length; i++){
            result[j] = num * i;
            j++
        }
    return result
    }
// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(hours, minutes){
    return hours*3600 + minutes*60
    }
// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(value){
    if(value > 0){
     return -value   
    }   else{
        return value
        } 
}
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(value){
    var result = [];
    var j = 0;
    for(var i = 0; i < value; i++){
        result[j] = i + 1;
        j++;
    }
return result
}
// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(value1, value2){
    var area = value1 * value2;
    if(area > 0){
        return area
    }else{return -1}
    
    }
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(value1, value2){
    if( value1 === 10 || value2 === 10 || value1 + value2 === 10){
    return true
    }   else{
        return false
        }
}
// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(value){
    var sum = 0
    for(var i = 0; i <= value; i ++){
        sum = sum + i
    }
    return sum
 }
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(value){
    return value*5 + 1
}   