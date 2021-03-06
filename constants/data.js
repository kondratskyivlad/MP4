import React from 'react';

export function data1 () {
    let res1 = []
    let res2 = []
    for(let i = 0; i < 1; i++) {
        res1.push(i)
    }
    for(let i = 1; i < 0; i--) {
        res2.push(i)
    }
    let fnc = res1.concat(res2)
    return fnc.concat(fnc)
};

export const data = [50, 32, 16, 8, 4, 2, 0.5, 0, 0.5, 2, 4, 8, 16, 32, 50];
export const labels = [-5, "", "", "", "", "", "", "", "", "", 0, "", "", "", "", "", "", "", "", "", 5];
