$(document).ready(function () {
  $("#btnSubmit").click(function () {
    if ($("#text").val() != "") {
      $("#tasks").prepend("<p>" + $("#text").val() + "</div>");
    } else {
      alert("Enter something to validate");
    }
  });
});
