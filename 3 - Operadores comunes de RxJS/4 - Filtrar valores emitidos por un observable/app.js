const promesa = new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(data => resolve(data.json()))
        .catch(error => {
            reject(error)
        })
});

const miObservador = Rx.Observable.fromPromise(promesa)

miObservador
    .filter(pokemones => {
        return pokemones.length >= 8;
    })
    .subscribe(
        pokemones => {
            console.log('-->', pokemones);
        },
        error => {
            console.log(error);
        },
        () => {
            console.log('Fin');
        }
    )


const miObservable = Rx.Observable.of('Hola mundo', ['Dato 1', 123], 23, 1994, {
    fav: 'star_selected'
})


miObservable
    .filter(value => isNaN(value))
    .subscribe(val => console.log('Final: ', val))