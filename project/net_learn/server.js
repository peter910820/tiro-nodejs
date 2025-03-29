const net = require('net');

const server = net.createServer((c) => {
    console.log('連線建立成功');
    c.write('我是伺服端!已經成功發出訊息');
    c.on('end', ()=> {
      console.log('客戶端已斷開連結');
    });
});

const port = 5000;
server.listen(port, ()=> {
  console.log(`伺服器運作中...，開啟port為${port}`);
});