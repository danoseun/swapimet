import axios from 'axios';

const baseURL = 'https://swapi.dev/api'

export const fetchMovies = async() => {
    try {
        const result = await axios.get(`${baseURL}/films`)
        return result.data.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } catch(error){
        return error
    }
}

export const fetchCharacters = async(value) => {
    try {
        const result = await axios.get(`${baseURL}/people`);
        const data = result.data.results.sort((a,b) => a[value] > b[value] ? 1 : -1)
        const total_height = data.map(o => Number(o.height)).reduce((a, c) => { return a + c });
        const total_height_in_ft = cmToFeet(total_height);
        const count = data.length;
        return {data, count, total_height, total_height_in_ft}
    } catch(error){
        return error
    }
}

export const filterCharacters = async(value) => {
    try {
        const result  = await axios.get(`${baseURL}/people`);
        const data = result.data.results.filter(result => result.gender === value.toLowerCase());
        const total_height = data.map(o => Number(o.height)).reduce((a, c) => { return a + c });
        const total_height_in_ft = cmToFeet(total_height);
        const count = data.length;
        return {data, count, total_height, total_height_in_ft}
    } catch(error){
        return error
    }
}

function cmToFeet(n) {
    let realFeet = ((n*0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return `${feet}ft and ${inches}inches`;
}