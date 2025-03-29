const request = require('request');
const cheerio = require('cheerio');

const url = 'https://ithelp.ithome.com.tw/questions';

request(url, function(error, response, body){

    if (!error){
        let $ = cheerio.load(body);

        let data = $(".qa-list");
        data.each(function(index, value){
            let $ = cheerio.load(value);
            let browse = $(".qa-condition.qa-condition--change .qa-condition__count");
            let title = $(".qa-list__title-link");
            let time = $(".qa-list__info-time");
        console.log(`瀏覽人數:${browse.text()} ${title.text().trim()} 上傳時間: ${time.attr("title")}`);
        });
    } 
    else throw new Error(error);
});