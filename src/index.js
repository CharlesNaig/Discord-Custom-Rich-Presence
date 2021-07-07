const rpc = require("discord-rpc");
const rpc_framework = require("./Struct/main.js");
const client = new rpc.Client({ transport: 'ipc' });
/**
 * Data for the RPC Client.
 * @param {client} client 
 * @param {Object} timestamps
 * @param {string} [string[]] details
 * @param {string} [string[]] large_text
 * @param {string} [string[]] large_image
 * @param {string} [string[]] large_text
 * @param {string} [string[]] small_image
 * @param {string} [string[]] small_text 
 * @param {Object[]} buttons
 * @param {number} interval
 */
new rpc_framework(
  // Leave the client as it is.
  client,           
  {start: 0, end: 0},
  // Details and Text are strings but can also be changed to an Array so they will be randomized each interval.
  "Test RPC Details",
  "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png",
  "Test RPC Large Text",
  "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png",
  "Test RPC Small Text",
  // Buttons.
  [],
  // Interval will update the Presence this amount os Miliseconds.
  20000
).start();

client.login({ clientId : process.env.clientID })
.catch(console.error);
