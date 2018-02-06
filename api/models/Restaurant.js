/**
 * Restaurant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Name:{
      type:'string',
      size:128,
      required:true
    },
    Postcode:{
      type:'string',
      size:128,
      required:true
    },
    Review:{
      collection:'Review',
      via:'restaurant'
    }
  }
};
