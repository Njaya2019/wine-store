// List of actions and we can have as many functions.
// They return an object with a 'type' and 'payload'.
import axios from 'axios';

const URL = 'https://storage.googleapis.com/wineshop-assets/wine-shop.json'


export function getAllWines(){

    const response = axios.get(`${URL}`)
                    .then(response =>{
                        return response.data
                    }).catch(error=>{
                        return error.response.data
                    })
    return{
        type: 'WINES',
        payload: response
    }
}

export function getWinesByType(wineType){

    const response = axios.get(`${URL}`)
                    .then(response =>{
                        const filteredWines = response.data.filter((wine)=>{
                            return wine.tags.includes(wineType)
                        })
                        return filteredWines
                    }).catch(error=>{
                        return error.response.data
                    })

    return{
        type: 'WINES_BY_TYPE',
        payload: response
    }

}
