function collapse() {
  document.getElementById("parent").style.display = "none";
}
currchart1;
currchart2; //the current chart variables
function makepie(x, y, can, title) {
  var ctx = document.getElementById(can).getContext("2d");
  var chart = new Chart(ctx, {
    type: "pie",

    data: {
      labels: x,
      datasets: [
        {
          data: y,
          backgroundColor: ["green", "orange", "red"],
          borderColor: ["green", "orange", "red"],
        },
      ],
    },
    options: {
      responsive: true,
      cutoutPercentage: 50,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: title,
      },
    },
  });
  return chart;
}
