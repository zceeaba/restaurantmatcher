/**
 * RestaurantController
 *
 * @description :: Server-side logic for managing Restaurants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne: function (request, response) {
    Restaurant.find(request.params.id).exec(function (error, restaurants) {
      var restaurant = restaurants[0];
      var averagerating = Restaurant.find(1).average('Review').done(console.log);
			restaurant.averagerating=averagerating;
      response.json(restaurant);
    });
  }
};
