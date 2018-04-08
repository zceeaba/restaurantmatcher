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
   },
   findone: function (request, response) {
      Restaurant.find(request.params.id).exec(function (error, restaurants) {
        var restaurant = restaurants[0];
        var averagerating = Restaurant.find(1).average('Review');
        console.log(averagerating);
        restaurant.averagerating=averagerating;
        response.json(restaurant);
      });
    },
    createrestaurant:function(request,response){
      restaurantname=request.param("restaurantname");
      restaurantpostcode=request.param("restaurantpostcode");
      Restaurant.create({Name:restaurantname,Postcode:restaurantpostcode}).exec(console.log);
      return response.view('restaurantmenu', {
        currentDate: (new Date()).toString()
      });
    },
    listrestaurants:function(request,response){
      findall=request.param("findall");
      Restaurant.find().exec(console.log);
      return response.view('restaurantmenu', {
        currentDate: (new Date()).toString()
      });
    },
    restaurantview:function(request,response){
      return response.view('restaurantmenu', {
        currentDate: (new Date()).toString()
      });
    },
    deleterestaurant:function(request,response){
      restaurantname=request.param("restaurantname");
      Restaurant.destroy({Name:restaurantname}).exec(console.log);
      return response.view('restaurantmenu', {
        currentDate: (new Date()).toString()
      });
    },
    findonerestaurant:function(request,response){
      restaurantname=request.param("restaurantname");
      Restaurant.findOne({Name:restaurantname}).exec(console.log);
      return response.view('restaurantmenu', {
        currentDate: (new Date()).toString()
      });
    },
    updaterestaurant:function(request,response){

    }
 };
