let express = require("express");

let app = express();

app.use(express.static(__dirname+'/dist/game-changer'));

app.get('/*', (req, resp)=>{
        resp.sendFile(__dirname+'/dist/game-changer/index.html');
});


app.listen(process.env.PORT || 8080);
