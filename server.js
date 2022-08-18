var express = require("express"); //using the express web framework
const port = 3000;
var userController = require('./controllers/UserController');
var progressController = require('./controllers/ProgressController');
var prController = require('./controllers/PrController');


const app = express(); // set variable app to be an instance of express framework. From now on, app is the express


app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/users').get(userController.getAllUsers);
app.route('/userProfile').get(userController.getUserProfile);
app.route('/users').post(userController.addUser);
app.route('/name').put(userController.updateName);
app.route('/number').put(userController.updateNumber);
app.route('/password').put(userController.updatePassword);
app.route('/email').put(userController.updateEmail);
app.route('/users').delete(userController.deleteUser);
app.route('/login').post(userController.login);


app.route('/progress').get(progressController.getUserProgress);
app.route('/addProgress').post(progressController.addProgress);

app.route('/pr').get(prController.getUserPr);
app.route('/addPr').post(prController.addPr);

//app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

