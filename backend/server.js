const { urlencoded } = require('express');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors'); // Provides a Connect/Express middleware 
const morgan = require('morgan'); // HTTP request logger middleware 
const app = express();
const port = process.env.PORT || 3001

app.use(fileUpload({ createParentPath: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/user', (req, res) => {
    res.redirect('https://randomuser.me/api/');
})

app.post('/picture', async (req, res) => {
    try {
        if (!req.files) {
            res.send('No file')
        } else {
            const { picture } = req.files
            picture.mv('backend/public/uploads' + picture.name)
            res.send('File is uploaded')
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}.`))
