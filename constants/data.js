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
}

export const getImage = (item) => {
    switch (item) {
        case 'Poster_01.jpg':
            return require('../assets/posters/Poster_01.jpg');
        case 'Poster_02.jpg':
            return require('../assets/posters/Poster_02.jpg');
        case 'Poster_03.jpg':
            return require('../assets/posters/Poster_03.jpg');
        case 'Poster_05.jpg':
            return require('../assets/posters/Poster_05.jpg');
        case 'Poster_06.jpg':
            return require('../assets/posters/Poster_06.jpg');
        case 'Poster_07.jpg':
            return require('../assets/posters/Poster_07.jpg');
        case 'Poster_08.jpg':
            return require('../assets/posters/Poster_08.jpg');
        case 'Poster_10.jpg':
            return require('../assets/posters/Poster_10.jpg');
        default:
            return require('../assets/Coming-Soon.png');
    }
};

export const data = [50, 32, 16, 8, 4, 2, 0.5, 0, 0.5, 2, 4, 8, 16, 32, 50];
export const labels = [-5, "", "", "", "", "", "", "", "", "", 0, "", "", "", "", "", "", "", "", "", 5];
