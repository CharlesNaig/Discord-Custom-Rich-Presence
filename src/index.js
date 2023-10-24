const rpc = require("discord-rpc");
const rpc_framework = require("./Struct/main.js");
const client = new rpc.Client({ transport: 'ipc' });
require('dotenv').config({ path: '../.env' });

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
  
  client,                 // RPC Client.
  
  {start: 1, end: 1},     // TimeStamp is the Time when you started playing the game and when it ended.
  
  // Details and Text are strings but can also be changed to an Array so they will be randomized each interval.
  
  "Test RPC Details",     // Main Text.
      
  "default",              // Large image you must upload to the assets of your application.
  
  "Test RPC Large Text",  // Text of the Large Image.
  
  "default",              // Little image you must upload to the assets of your application.
  
  "Test RPC Small Text",  // Text of the Small Image.
  
  // Buttons.
  
  [
    {
    label : "Test Buttons" ,         // Title of the Button.
    url : "https://saya.gg/invite"  // Place where button will take you.
    }
  ],
  
  // Interval will update the Presence this amount os Miliseconds.
  
  10000
).start();

client.login({ clientId : "YourAppID" })
.catch(console.error);
