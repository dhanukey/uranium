const express = require('express');
// const a = require('../logger')
const router = express.Router();

router.get('/movies',function(req,res){

    let a = ['rand de basnasti', 'the shining', 'lord of the rings', 'rango' ,'batman begins'];
    res.send(a);

}); 

router.get('/movies/:index',function(req,res){
     index= req.params.index;
    let a = ['rand de basnasti', 'the shining', 'lord of the rings', 'jumanji', 'rango', 'batman begins'];
   if( index > a.length){

    res.send('no is beyond the limit range')
   }
   
   else{
    res.send(a[index]);}



}); 





router.get('/films',function(req,res){

    let a = [ {
        'id': 1,
       'name': 'Raid'
       }, {
        'id': 2,
        'name': 'rango'
       }, {
        'id': 3,
        'name': 'Run'
       }, {
        'id': 4,
        'name': 'finding nemo'
       }];
       
    
    
    
    res.send(a);

}); 







router.get('/films/:filmId', function (req, res) {
    index= req.params.filmId;


    let a = [ {
        'id': 1,
       'name': 'Raid'
       }, {
        'id': 2,
        'name': 'rango'
       }, {
        'id': 3,
        'name': 'Run'
       }, {
        'id': 4,
        'name': 'finding nemo'
       }];

       if (index>=a.length) {

        res.send('list ran out cannot find such elemnt');
       }
       
      else{ 

        ind = index.toString();
       const r = a.find( a =>{
         a.id == ind;})
       res.send(r);
      }



});





router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(a.u)

});

module.exports = router;
// adding this comment for no reason