const url = 'https://restcountries.com/v3.1/name';
export function fetchCountries(name) {
   return fetch(`${url}/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) { throw new Error('Fail!') }
            return response.json()
        }).catch(error => console.error());
};