{%extends 'layout.swig' %}
{%set title='search engine' %}
{%block body%}
  <h1> Find all restaurants</h1>
  <p> Welcome to the search engine</p>
  <form method="POST" id="listrestaurant">
      <label>Find all restaurants:</label>
      <input type="text" name="search" id="input"/>
      <input type="submit" value="Find all restaurants" name="submit" class="submit" id="submit" />
  </form>
  <form method="POST" id="createrestaurant">
      <label>Create Restaurant:</label>
      <input type="text" name="RestaurantName" id="input"/>
      <input type="text" name="RestaurantPostCode" id="input"/>
      <input type="submit" value="Submit" name="submit" class="submit" id="submit" />
  </form>
  <form method="POST" id="deleterestaurant">
      <label>Delete Restaurants:</label>
      <input type="text" name="search" id="input"/>
      <input type="submit" value="Submit" name="submit" class="submit" id="submit" />
  </form>
  <form method="POST" id="findonerestaurant">
      <label>Find a Restaurant:</label>
      <input type="text" name="search" id="input"/>
      <input type="submit" value="Submit" name="submit" class="submit" id="submit" />
  </form>
  <script>
  $(function() {
      $('#listrestaurant').on('submit', function(e) { //use on if jQuery 1.7+
          e.preventDefault();  //prevent form from submitting
          var data = $(this).serializeArray();
          $.post( "restaurantfindall",{findall :data[0]["value"]});
      });
  });
  $(function() {
      $('#createrestaurant').on('submit', function(e) { //use on if jQuery 1.7+
          e.preventDefault();  //prevent form from submitting
          var data = $(this).serializeArray();
          $.post( "restaurantcreate",{restaurantname :data[0]["value"],restaurantpostcode:data[1]["value"]});
      });
  });
  $(function() {
      $('#deleterestaurant').on('submit', function(e) { //use on if jQuery 1.7+
          e.preventDefault();  //prevent form from submitting
          var data = $(this).serializeArray();
          $.post( "restaurantdelete",{restaurantname :data[0]["value"]});
      });
  });
  $(function() {
      $('#findonerestaurant').on('submit', function(e) { //use on if jQuery 1.7+
          e.preventDefault();  //prevent form from submitting
          var data = $(this).serializeArray();
          $.post( "restaurantfindone",{restaurantname :data[0]["value"]});
      });
  });
  </script>
{%endblock%}
