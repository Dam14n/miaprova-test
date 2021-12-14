const express = require('express');
const router = express.Router();
const cors = require('cors');

const whiteList = ["http://localhost:4200"]

router.use(cors({ origin: whiteList }));

router.get('/catalogs', (req, res) => {
    res.send([{
        "id": 1,
        "name": "Chrome Extension",
        "img": "assets/chromeExtension.png",
        "link": "https://www.miaprova.com/blog/adobe-target-chrome-extension-brought-to-you-by-miaprova/"



    }, {
        "id": 2,
        "name": "Youtube",
        "img": "assets/followUsOnYoutube.png",
        "link": "https://www.youtube.com/channel/UCdm5r7ZVgyYfaMQvuOvqVlA"

    }, {
        "id": 3,
        "name": "Linkedin",
        "img": "assets/followUsOnLinkedin.png",
        "link": "https://www.linkedin.com/company/miaprova"

    }])
})

module.exports = router;