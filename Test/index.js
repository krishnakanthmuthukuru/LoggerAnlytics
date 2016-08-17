var should = require("chai").should(),
supertest = require('supertest'),
app = require('../expressServer.js');

var url = supertest("http://localhost:7770");

describe("Testing the routes", function(err){
  it("should pass and response will be hello express", function(done){
      //console.log(jsonData);
      url
           .get("/")
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
             console.log(res.text);
             res.text.should.be.equal('Hello Express!');
             done();
           });
  });
  it("should pass and status code will be 304", function(done){
      url
           .get("/logs")
           .expect(200)
           .expect('Content-Type', /json/)
           .end(function(err,res){
             should.not.exist(err);
             //console.log(res.text);

            //  var jsonData =JSON.parse(res.text);
            var jsonData =res.body;
            //  console.log(jsonData);
             //console.log(jsonData.length);
             if(jsonData.length <= 0){
                console.log('json data does not exist');
             }else{
               console.log('json data found');
               var code = jsonData[1]['status-code'];
               console.log(jsonData[1]);
              //  console.log(code);
              code.should.be.within(150, 600);
             }
             done();
           });
  });
  it("should pass and status code will be 304", function(done){
      url
           .get("/logs")
           .expect(200)
           .expect('Content-Type', /json/)
           .end(function(err,res){
             should.not.exist(err);
             var jsonData =res.body;
             if(jsonData.length <= 0){
                console.log('json data does not exist');
             }else{
               console.log('json data found');
               var code = jsonData[1];
               console.log(jsonData[1]);
               code.should.have.property("time");
             }
             done();
           });
  });
});
