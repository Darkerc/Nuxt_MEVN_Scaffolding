//=== Initial config of all routes ===
let InitialDir = "/api/";
//===============================

//=== Getting all routes files ===
var routes = [];
const normalizedPath = require("path").join(__dirname, "Routes");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    routes.push(require("./Routes/" + file));
});
//===============================

//=== Exporting configuration ===
module.exports = { routes , InitialDir };
//===============================
