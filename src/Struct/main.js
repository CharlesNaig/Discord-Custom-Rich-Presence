class RPC {
  constructor(client, timestamps, details, large_image, large_text, small_image, small_text, buttons, interval){
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
      setInterval(function(){
         let details = this.checkArray(this.details);
         let large_image= this.checkArray(this.large_image);
         let large_text= this.checkArray(this.large_text);
         let small_image= this.checkArray(this.small_image);
         let small_text= this.checkArray(this.small_text);
        
         client.request('SET_ACTIVITY', {
           pid: this.pid,
           activity : {
              timestamps: this.timestamps,
              details : datails,
              assets : {
                large_image : large_image,
                large_text : large_text,
                small_image	: small_image,
                small_text: small_text
              },
              buttons : this.buttons
            }
          });
      }, this.interval);
    });
  }
 };

module.exports = RPC;
