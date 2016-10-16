var express = require('express');
var router = express.Router();

var rawPokedex = require('../data/pokedex.json');
var rawTypes = require('../data/types.json');

// variable to store processed pokedex.json data
var processedData = processData();

// home page
router.get('/', function(req, res, next) {
    res.render('index');
});

// get list of pokemons (minified version)
router.get('/pokemons', function(req, res, next) {
    res.status(200).json(processedData);
});

// get details of a pokemon by id
router.get('/pokemon/:id', function(req, res, next) {
    var id = req.params.id;
    res.status(200).json(rawPokedex[parseInt(id)-1]);
});

// process json files to get minifed version for left side cards
// and compile types to get its english name
function processData(){
    var data = [];
    var typesAssoc = arrayToAssoc(rawTypes,"cname");

    // go through all enteries
    for(var i=0; i<rawPokedex.length; i++){

        // to get the type ename
        var typesDetailed = [];
        for(var j=0; j<rawPokedex[i]["type"].length; j++){
            var typesArr = [{
                cname:rawPokedex[i]["type"][j],
                ename:typesAssoc[rawPokedex[i]["type"][j]]["ename"],
                jname:typesAssoc[rawPokedex[i]["type"][j]]["jname"]
            }];
            typesDetailed.push(typesArr);
        }

        // create aa minified version of pokemon list
        data.push({
            id: rawPokedex[i]["id"],
            ename: rawPokedex[i]["ename"],
            thm: rawPokedex[i]["id"]+(rawPokedex[i]["flatName"]?rawPokedex[i]["flatName"]:rawPokedex[i]["ename"]),
            types : typesDetailed
        });

        // construct the image name and types with ename
        rawPokedex[i]["img"] = rawPokedex[i]["id"]+(rawPokedex[i]["flatName"]?rawPokedex[i]["flatName"]:rawPokedex[i]["ename"]);
        rawPokedex[i]["spr"] = rawPokedex[i]["id"]+"MS";
        rawPokedex[i]["types"] = typesDetailed;
    }

    return data;
}

// convert array to assoc array
function arrayToAssoc(array, key){
    var result = [];
    for(var i=0; i<array.length;i++){
        result[array[i][key]]=array[i];
    }
    return result;
}

module.exports = router;
