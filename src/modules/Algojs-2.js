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

// --------------------------------------------------- Return Last Item -------------------------------------

// --------------------------------------------------- Reverse an Array -------------------------------------

// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------

// --------------------------------------------------- Boolean to String Conversion -------------------------------------

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------

// --------------------------------------------------- Array of Multiples -------------------------------------

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------

// --------------------------------------------------- Return Negative -------------------------------------

// --------------------------------------------------- Simple Loop -------------------------------------

// --------------------------------------------------- Area of a Rectangle -------------------------------------

// --------------------------------------------------- Two Makes Ten -------------------------------------

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------

// --------------------------------------------------- Matchstick Houses -------------------------------------
