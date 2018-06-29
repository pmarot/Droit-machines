// server.js
// load the things we need
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var urlmongo = 'mongodb://localhost:27017/parc';
var MongoClient = require('mongodb').MongoClient;
// variable pour ajouter utilisateurs 
var tab = [];
app.use(express.static("static"));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});


// route vers page utilisateurs
app.get('/liste_utilisateurs', function (req, res) {
    res.render("pages/liste-utilisateurs")
});

//récupérer informations base de donnée utilisateurs
app.get('/users', function (req, res) {
    MongoClient.connect(urlmongo, function (err, database) {
      if (err) throw err;
      database.db("parc").collection("utilisateurs").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        tab = result;
        database.close();
        return result;
      });
    });
    res.json(tab);
});


// // ajouter utilsateurs
// app.post('/add', function (req, res) {
//     const nom = req.body.nom;
//     const prenom = req.body.prenom;
//     MongoClient.connect(urlmongo, function (err, database) {
//       var mydoc = {
//         nom: nom,
//         prenom: prenom
//       };
//       database.db("parc").collection("utilisateurs").insertOne(mydoc, function (err, res) {
//         if (err) throw err;
//         console.log("1 document ajouté");
//         database.close();
//       });
//       res.end("Doc inséré");
//     });
// });


// // affichage apres entré du formulaire
// app.get('/users',  function(req, res) {
//     var MongoClient = require('mongodb').MongoClient;
//     var dbo = db.db("parc");
//     MongoClient.then(urlmongo,function(err, db) {
//         dbo.collection('utilisateurs').find({}).toArray().then(function(forms) {
//             res.status(200).json(forms);
//         });
//     });
// });

// route vers page machines
app.get('/liste_machines', function (req, res) {
    res.render("pages/liste-machines")
});



app.listen(3002);
console.log('Tout est ok');
