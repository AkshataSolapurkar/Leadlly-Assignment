export async function fetchCars(){
    const headers ={
        'X-RapidAPI-Key':"ab7878702cmsh5c67b0b827a9b1fp1fb2a7jsn827c079cdc0e",
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=a4&make=audi',
    { headers:headers}) ;
    const result = await response.json()
    return result
}

