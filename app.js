// ##############################
//  >>>>>>>>>| app.js |<<<<<<<<<<
// ##############################

// Dependencies =================
const express = require("express")
// ==============================

// Initialize express
const app = express();

// Point to public directory
app.use(express.static("public"));

app.get("/", function(request, response) {
    response.render("index.ejs");
});

// Listen on port 8080
app.listen(8080, function(request, response) {
    console.log("Started Clement S Hill on port 8080");
});