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

  var database = firebase.database();

$("#submitBnt").on("click", function(event) { 

    event.preventDefault();
   
    var employeeName = $('#name').val().trim();
    var role = $('#role').val().trim();
    var startDate = $('#startDate').val().trim();
    var monthlyRate = $('#monthlyRate').val().trim();

    database.ref("/Employee").push({
        name: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });
    
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
        monthsWorked.text('a bunch');

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

database.ref().orderByChild("Employee").on("child_added", function(snapshot) {
// database.ref("/Employee").on("value", function(snapshot) {

    // highBidder = snapshot.val().highBidder;
    // highPrice = parseInt(snapshot.val().highPrice);
    // debugger;

    console.log('firebase.database', firebase.database)
    console.log(snapshot.val())
 

    var sv = snapshot.val();

     // Console.loging the last user's data
     console.log(sv.name);
     console.log(sv.role);
     console.log(sv.startDate);
     console.log(sv.monthlyRate);

    for (i = 0; i< snapshot.val().length; i++) {
        console.log(snapshot.val()[i])
    }

});