/**
 * Review.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pub_date:{
      type:'date',
    },
    user_name:{
      type:'string',
      size:128,
      required:true
    },
    comment:{
      type:'longtext',
      required:true
    },
    rating:{
      type: 'integer',
      enum:[1,2,3,4,5]
    },
    restaurant:{
      model:'Restaurant',
      required:true
    }
  }
};
