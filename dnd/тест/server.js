const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Получаем URL запроса
    const url = req.url;

    // Определяем путь к запрашиваемому JSON-файлу
    const jsonPath = path.join(__dirname, '..', 'jsonDocument', url + '.json');

    // Проверяем, существует ли файл
    fs.access(jsonPath, fs.constants.F_OK, (err) => {
        if (err) {
            // Если файл не существует, отправляем ошибку 404
            console.error(err); // Выводим ошибку в консоль для отладки
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        // Читаем содержимое файла
        fs.readFile(jsonPath, 'utf8', (err, data) => {
            if (err) {
                // Если возникает ошибка, отправляем ошибку 500
                console.error(err); // Выводим ошибку в консоль для отладки
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            // Устанавливаем заголовок Access-Control-Allow-Origin для разрешения CORS
            res.setHeader('Access-Control-Allow-Origin', '*');

            // Если файл успешно прочитан, отправляем его содержимое
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
