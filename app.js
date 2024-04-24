var eidDate = new Date('16,june,2024')
setInterval(function() {
  var now = new Date();
  var diff = eidDate - now;
  var seconds = Math.floor((diff / 1000) % 60);
  var minutes = Math.floor((diff / 1000 / 60) % 60);
  var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML = "Eid Remaining days" + "<br>" +
    "<span>" + days + "</span> days, " +
    "<span>" + hours + "</span> hours, " +
    "<span>" + minutes + "</span> minutes, and " +
    "<span>" + seconds + "</span> seconds";
}, 1000);




