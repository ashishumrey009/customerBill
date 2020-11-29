var request = require('request');
class Customer{
    
    constructor(){
       
    }
   
    async getItmes() {
            const requestUrl = `https://getItem.com`;
            return new Promise((resolve, reject) => {
                request.get(requestUrl, (err, res, body) => {
                    if(err) {
                        return reject(err);
                    }
                    //console.log(JSON.parse(body))
                    resolve(JSON.parse(body));
                });
            });
        }
        getSum(){
           var res = this.getItmes()
           console.log(res)
           return 2+3
        }
}
module.exports = Customer