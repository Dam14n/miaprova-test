const express = require('express');
const bodyParser = require('body-parser');
const multiPart = require('connect-multiparty');
const PORT = 3000;
const app = express();

const multiPartMiddleware = multiPart({
    uploadDir: './uploads'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/upload', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'file uploaded successfully!'
    });
});


app.get('/', (req, res) => {
    res.send('hola mundo');
});

app.listen(PORT, () => console.log('app is running in port ' + PORT))