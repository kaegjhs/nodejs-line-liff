/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-06 10:02:15
 * @modify date 2018-06-06 10:02:15
 * @desc A liff service using for get liff ID
*/
const request = require('request');
const apiToken = 'YSBwEd4ftfY9CUMyMqXzs9AbVNqbV5eWBX3uUwVvL74iD0ksGcOo5Cii1UcRo0IK2Rglp9Spqr4ZUB7t5QtGo0S+XwPiMXwl3jEHkfC4NAk4EhYuyDzESDjfU7IdFQW6EPSsOEzggvTQd2gK26K3sQdB04t89/1O/w1cDnyilFU=';
const apiRoute = 'https://api.line.me/liff/v1/apps';
const herokuRoute = 'https://nodejs-line-api.herokuapp.com/';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

class LiffService {
    constructor() {}

    getLiffID() {
        return new Promise(function (resolve, reject) {
            try {
                let body = JSON.stringify({
                    view : {
                      type : "tall",
                      url : herokuRoute
                    }
                })
                return request.post({
                    url: apiRoute,
                    headers: headers,
                    body: body
                }, (err, res, body) => {
                    let liffId = null;
                    let result = false;
                    if (typeof JSON.parse(res.body).liffId != 'undefined') {
                        result = true;
                        liffId = JSON.parse(res.body).liffId;
                    }
                    console.log(`res ${ JSON.stringify(res) }`);
                    console.log(`liffId ${ JSON.parse(res.body).liffId }`);
                    return resolve({ result: result, liffId: liffId});
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LiffService();