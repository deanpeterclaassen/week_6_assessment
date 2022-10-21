function shuffleArray(array) {
    let arrCopy = [...array]
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}

const path = require('path')
module.exports = {
    shuffleArray,

    getCSS:(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/index.css'))},

    getJS: (req,res)=>{
     res.sendFile(path.join(__dirname,'./public/index.js'))
        }

}