$(document).ready(function () {


  $("#gameImg").mousedown(function () {
    $("#gameImg").attr("src", "/assets/dancing_cat.gif");
    console.log("position: ", $("#gameImg").position());
    // checkImg();
    $("#feedback").attr("display", "none");
  });

  $("#gameImg").draggable({
    // axis: "x",
    containment: "#gameField",
  });

  $("#sizeUp").click(function () {
    $("#gameImg").height(($("#gameImg").height() * 1.15));
  })

  $("#sizeDown").click(function () {
    $("#gameImg").height(($("#gameImg").height() * 0.85));
  })
});
