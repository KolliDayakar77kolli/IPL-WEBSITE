$(document).ready(function () {
  var playerData = localStorage.getItem("activePlayer")
    ? JSON.parse(localStorage.getItem("activePlayer"))
    : [];
  var teamsData = JSON.parse(localStorage.getItem("totalTeamData"));
  $("#searchIco").click(function () {
    var searchKey = $("#search-box")[0].value;
    for (var j = 0; j < teamsData.length; j++) {
      if (teamsData[j].key == searchKey.toUpperCase()) {
        $("#search-box")[0].value = "";
        $(location).attr("href", "./team.html#playersList");
        localStorage.setItem("teamData", JSON.stringify(teamsData[j]));
        break;
      } else if (j == teamsData.length - 1) {
        alert("Team Not Found!");
      }
    }
  });
  $(".player-name").html(playerData.playerName);
  $(".team-name").html(playerData.from);
  $(".debt").html("Price: " + playerData.price);
  $(".style").html(playerData.isPlaying ? "Playing Status : Playing" : "Playing Status : On-Bench");
  $(".role").html("Role: " + playerData.description);
  $(".player-info-image").attr("src", playerData.imgUrl);
});
