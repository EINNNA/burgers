//submit burger
$(".submit").on("click", function(e){
  e.preventDefault();

//order burger
  var newBurger = {
    burger_name: $("#userInput").val().trim(),
  };

  $.ajax("api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    alert("burger added to order");
    location.reload();
  });
});

//eat burger
$(".eaten").on("click", function (e) {
  var id = $(this).data("id");
  console.log(id);
  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(function () {
    location.reload();
  });
});





