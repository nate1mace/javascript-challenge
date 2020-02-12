function dateMatcher(){
  var body = document.getElementById("ufo-body");
  $("#ufo-body").empty();

  var tableData = data;
  var dates = tableData.map(date => date.datetime);
  var cities = tableData.map(city => city.city);
  var states = tableData.map(state => state.states);
  var countries = tableData.map(country => country.country);
  var shapes = tableData.map(shape => shape.shape);
  var durs = tableData.map(dur => dur.durationMinutes);
  var comments = tableData.map(comment => comment.comments);

  var inputDate = document.getElementById("datetime").value;
  


  for (var i = 0; i < tableData.length; i++) {

    if (dates[i] == inputDate) {
      
      var row = body.insertRow(-1);
      var dte = row.insertCell(0);
      var city = row.insertCell(1);
      var state = row.insertCell(2);
      var country = row.insertCell(3);
      var shape = row.insertCell(4);
      var dur = row.insertCell(5);
      var comm = row.insertCell(6);

      dte.innerHTML = dates[i];
      city.innerHTML = cities[i];
      state.innerHTML = states[i];
      country.innerHTML = countries[i];
      shape.innerHTML = shapes[i];
      dur.innerHTML = durs[i];
      comm.innerHTML = comments[i];
      
      }
    }
};

//  }  
// YOUR CODE HERE!
        