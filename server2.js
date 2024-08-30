import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method == 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            // Obtener el id de la request
            const id = req.url.split('/')[3];
            // Retornamos el usuario completo que retorna el find para el id anterior
            const user = users.find((user) => user.id === parseInt(id));
            // Si encontramos el usuario lo escribimos sino 404
            if (user) {
                res.write(JSON.stringify(user));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({ message: 'User not found'}));
            }
            res.end();
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'Route not found' }));
            res.end();
        }
    });

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});