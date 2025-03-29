const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('請輸入想下載的圖片: ', (img) => {
    fs.mkdir(`./img`, (err) => {
        if(!err) console.log('資料夾img創建成功!!!');
        else if(fs.existsSync(`./img`));
        else throw new Error(err);
    });
    const url = `https://unsplash.com/s/photos/${img}`;
    request(url, function(error, response, body){
        if (!error){
            let $ = cheerio.load(body);
            let data = $(".CwMIr.DQBsa.p1cWU.jpBZ0.EzsBC.KHq0c.Olora.I0aPD.dEcXu.bKqh2.jpBZ0.vRKJ4.untracked");
            let filename = 1;
            data.each(function(index, value){
                console.log(`${$(value).attr('href')}`); //顯示URL
                let stream = fs.createWriteStream(`./img/${filename.toString()}.jpg`);
                request($(value).attr('href')).pipe(stream);
                stream.on('finish', ()=>{ console.log('圖片下載成功'); });
                filename++;
                
            });
        } 
        else throw new Error(error);
    });
    readline.close();
})
