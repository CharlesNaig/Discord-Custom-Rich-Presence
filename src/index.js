const rpc = require("discord-rpc");
const rpc_framework = require("./Struct/main.js");
const client = new rpc.Client({ transport: 'ipc' });
new rpc_framework(
  client,
  "",
  "",
  "",
  "",
  "",
  [],
  20000
).start();

client.login({ clientId : process.env.clientID })
.catch(console.error);
