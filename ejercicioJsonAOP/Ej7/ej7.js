
let url = 'https://jsonplaceholder.typicode.com/albums';


fetch(url)
    .then(response => response.json()) 
    .then(albums => {
        
        let albumsArtist3 = albums.filter(album => album.userId === 3);

        
        albumsArtist3.forEach(album => console.log(album.title));
    })
    .catch(error => console.log('Error al leer los datos:', error));
