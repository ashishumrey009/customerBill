const expect = require('chai').expect;
const request = require('request');
const sinon = require('sinon');
var MyClass = require('../src/customer')
var myObj = new MyClass()

describe('with Stub: getPhotosByAlbumId', () => {
    before(() => {
        sinon.stub(request, 'get')
        .yields(null, null, JSON.stringify([
            {
              "ItemId": 1,
              "price":200
            },
            {
                "ItemId": 2,
                "price":500
            },
            
           
          ]));
    });

    after(() => {
        request.get.restore();
    });
    it('should getItems', (done) => {
        myObj.getItmes().then((item) =>{
          //  console.log(item)
            done();
        });
    });
    it('should add Bills',()=>{
       var res
        res =myObj.getItmes().then((item) =>{
        var res=0;
        console.log('-----',item)
        item.map((i)=>{
            // console.log(i.price)
            res=res+i.price
        })
        console.log('bill is',res)
        
    });
    
      expect(myObj.getSum(1,3)).to.equal(5)
    })
})