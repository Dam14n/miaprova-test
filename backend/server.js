const express = require('express');
const bodyParser = require('body-parser');
const multiPart = require('connect-multiparty');
const PORT = 3000;
const app = express();
const routes = require('./routes/index');
const cors = require('cors');

const multiPartMiddleware = multiPart({
    uploadDir: './uploads'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(routes);
app.use(cors());

app.post('/api/upload', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'file uploaded successfully!'
    });
});


app.listen(PORT, () => console.log('app is running on port ' + PORT))