const fs = require('fs');

let path = './Test';

fs.rmdir(path, (err) => {
    if(!err) console.log("刪除資料夾成功");
    else throw new Error(err);
});
