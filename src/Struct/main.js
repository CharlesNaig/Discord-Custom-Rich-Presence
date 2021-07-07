class RPC {
  constructor(client, timestamps, details, large_image, large_text, small_image, small_text, buttons, interval)
  {
  this.pid= process.pid;
  this.client= client;
  this.timestamps= timestamps || {start: 0, end: 0};
  this.details= details || "Details Text";
  this.large_image= large_image || "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png";
  this.large_text= large_text || "Large Text";
  this.small_image= small_image || "";
  this.small_text= small_text || "";
  this.buttons= buttons || [];
  this.interval = interval || 10000;
  }
  async checkArray(item){
    let data = item;
    if(!Array.isArray(data)) return data;
    return data[Math.floor(Math.random()*data.length)];
  }
  async start(){
    this.client.on('ready', () => {
      console.log(`[ACTIVITY] - Succesfully started Discord Rich Presence Client`);
      const rpc = this;
      setInterval(function(){
         let details = rpc.checkArray(rpc.details);
         let large_image= rpc.checkArray(rpc.large_image);
         let large_text= rpc.checkArray(rpc.large_text);
         let small_image= rpc.checkArray(rpc.small_image);
         let small_text= rpc.checkArray(rpc.small_text);
        
         rpc.client.request('SET_ACTIVITY', {
           pid:  rpc.pid,
           activity : {
              timestamps: rpc.timestamps,
              details : details,
              assets : {
                large_image : large_image,
                large_text : large_text,
                small_image	: small_image,
                small_text: small_text
              },
              buttons : rpc.buttons
            }
          });
      }, rpc.interval);
    });
  }
 };

module.exports = RPC;
