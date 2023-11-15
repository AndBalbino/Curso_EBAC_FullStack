$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const tarefaAdd = $("#task").val();
    const newTask = $("<li></li>");

    $(`<p>${tarefaAdd}</p>`).appendTo(newTask);

    $(newTask).appendTo("ul");

    $("#task").val("");

    $("li").click(function() {
        $("p").css( "text-decoration", "line-through")

      });
  });

  
});
