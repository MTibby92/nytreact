var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
// var models = require('./app/models')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// })

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/dist'))

// Sets up Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// var routes = require('./controllers/todo_controller.js')
// app.use('/', routes)

app.get('/', function(req, res) {
	res.send(index.html)
})

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
})