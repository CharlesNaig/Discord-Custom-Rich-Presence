var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });


client.login({ clientId : process.env.clientID })
.catch(console.error);
