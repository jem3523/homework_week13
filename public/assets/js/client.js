// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() 
{
  $(".eaten").on("click", function(event) 
  {
    var id = $(this).data("id");

    $.ajax("/" + id, 
    {
      type: "put",
      data: id
    }).then
    (
      function() 
      {
        console.log("devoured", id);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) 
  {
    event.preventDefault();

    var newBurger = {name: $("#input").val().trim()};
    console.log (newBurger)

    $.ajax("/", 
    {
      type: "post",
      data: newBurger
    }).then
    (
      function() 
      {
        console.log("created new burger: " + newBurger);
        location.reload();
      }
    );
  });
});