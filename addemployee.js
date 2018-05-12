  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBw3EguJU9fzkmTsIPhjC1Q60XhEZ8LKsY",
    authDomain: "addemployee-311cd.firebaseapp.com",
    databaseURL: "https://addemployee-311cd.firebaseio.com",
    projectId: "addemployee-311cd",
    storageBucket: "",
    messagingSenderId: "113985503548"
  };
  firebase.initializeApp(config);

$("#submit").on("click", function(event) { 

    var employeeName = $('#employeeNameValue').val().trim();
    var role = $('#roleValue').val().trim();
    var startDate = $('#startDateValue').val().trim();
    var monthlyRate = $('#rateValue').val().trim();
    
    var employeeRow = $("<tr>");

    var name = $('<td>');
        name.text(employeeName);

    var tableRole = $('<td>');
        tableRole.text(role);

    var date = $('<td>');
        date.text(startDate);

    var monthly = $('<td>');
        monthly.text(monthlyRate);

    // var currentDate =     
    var monthsWorked = $('td');
        monthsworked.text('a bunch');

    var totalBilled = $('td');
        totalBilled.text('a lot');

    employeeRow.append(name)
    employeeRow.append(tableRole)
    employeeRow.append(date)
    employeeRow.append(monthly)
    employeeRow.append(monthsWorked)
    employeeRow.append(totalBilled)

    $('#tableBody').append(employeeRow)
    
});


