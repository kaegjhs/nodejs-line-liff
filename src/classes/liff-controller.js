/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-06 10:01:39
 * @modify date 2018-06-06 10:01:39
 * @desc A liff controller using for try liff api.
*/
const liffService = require('../services/liff-service');

class LiffController {
    constructor() {}

    getLiffURLScheme() {
        return new Promise(function (resolve, reject) {
            try {
                return liffService.getLiffID().then(function (rs) {
                    return resolve(rs);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LiffController();