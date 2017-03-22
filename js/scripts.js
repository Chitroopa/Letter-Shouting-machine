$(document).ready(function(){
  $("#letter").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $(".shouting").text(nameInput.toUpperCase());
    $("p").show();
    $("h2").show();
    event.preventDefault();
  });
});
