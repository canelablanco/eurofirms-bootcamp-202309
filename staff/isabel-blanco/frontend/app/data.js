var users = []
var posts = []

function createId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

users[0] = {
    name: 'Elena de Troya',
    email: 'elena@troya.com',
    password: '123'
};

users[1] = {
    name: 'Ash Kepchum',
    email: 'ash@kepchum.com',
    password: '123'
};
users[2] = {
    name: 'Marge Simpson',
    email: 'marge@simpson.com',
    password: '123'
};

posts[0] = {
    id: createId(),
    author: 'elena@troya.com',
    image: 'https://static.fnac-static.com/multimedia/Images/ES/NR/46/2d/76/7744838/1540-1.jpg',
    imageDescription: "Magdalenas de chocobo",
    text: 'Están de oferta en el Carrefour de Juan carlos primero',
    likes: []
}

posts[1] = {
    id: createId(),
    author: 'ash@kepchum.com',
    image: 'https://imgs.search.brave.com/_7ggOy3Wp0q46FGgCRnNyWZtNcFUftXjhkUUAIetHFg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzFk/L2JjLzI3MWRiYzQx/N2IyMTBmZjJlNDBm/ZjhjOWJhNWYyNWQ0/LmpwZw',
    imageDescription: "Moguri",
    text: 'No solo va de chocobos esta página',
    likes: []
}

posts[2] = {
    id: createId(),
    author: 'marge@simpson.com',
    image: 'https://imgs.search.brave.com/5JILsnN9j6QZxZSz7ueNr8ohFKxY5c3h2dmyGmroYc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3LzE4/L2MyL2E3MThjMjY5/ZWJmNzFmZmJjNjgz/ZDY3Y2IzZmNlNWU5/LmpwZw',
    imageDescription: 'Chocobo pixel',
    text: 'Mi primer chocobo hecho a mano',
    likes: []
}

posts[3] = {
    id: createId(),
    author: 'ash@kepchum.com',
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/chocobo-gp-2484521.jpg',
    imageDescription: 'chocobogp',
    text: 'Hoy me vicie muy a este juego',
    likes: []
}