const net = require('net');

const port = 5000;
const client = net.connect(port, ()=> {
    console.log(`伺服器連結成功!連線port為${port}`);
});

client.on('data', (message) =>{
    console.log(message.toString());
    console.log('斷開與伺服器的連接');
    client.end();
});