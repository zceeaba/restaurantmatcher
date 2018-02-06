/**
 * RestaurantsController
 *
 * @description :: Server-side logic for managing restaurants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   main: function (request, response) {
     return response.view('restaurants', {
       currentDate: (new Date()).toString()
     });
   }
 };
