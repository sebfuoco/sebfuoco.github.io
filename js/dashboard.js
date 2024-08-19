let status;
const colours = ['#4e73df', '#1cc88a', '#36b9cc', '#eb4034', '#ffce56', '#9966ff', '#d99b00','#f04dea'];
// Local Storage
if (!localStorage.getItem('SubjectData')) {
  // Store Subject Labels
  let SubjectLabel = [];
  SubjectLabel.push("Art", "Business", "IT", "Music", "Maths");
  localStorage.setItem("SubjectLabel", JSON.stringify(SubjectLabel));
  // Subject Data
  let value = [10, 19, 13, 8, 18];
  localStorage.setItem("SubjectData", JSON.stringify(value));
  // Store Computers 
  value = [230, 20];
  localStorage.setItem("Computers", JSON.stringify(value));
  // Store Subject Labels
  let ItemLabels = [];
  ItemLabels.push("Chairs", "Tables", "Printers", "Notice Boards", "Mice", "Keyboards", "Monitors");
  localStorage.setItem("ItemLabels", JSON.stringify(ItemLabels));
  // Store In-Use Items
  value = [400, 200, 20, 50, 250, 250, 250];
  localStorage.setItem("UseItem", JSON.stringify(value));
  // Store Free Items
  value = [100, 50, 5, 5, 50, 50, 50];
  localStorage.setItem("FreeItem", JSON.stringify(value));
  // Venue Label
  let VenueLabels = [];
  VenueLabels.push("Classrooms", "Labs", "Offices");
  localStorage.setItem("VenueLabels", JSON.stringify(VenueLabels));
  // Store Venue
  value = [100, 20, 60];
  localStorage.setItem("Venue", JSON.stringify(value));
  // Store Teachers
  let Teachers = [];
  Teachers.push(
    'Bob Dillion',
    'Carol Robinson',
    'James Matthews',
    'Karen Smith',
    'Steve Williams'
  );
  localStorage.setItem("Teachers", JSON.stringify(Teachers));
  let TeacherEducation = [];
  TeacherEducation.push(
    'Art',
    'Maths',
    'Business',
    'Music',
    'IT'
  );
  localStorage.setItem("TeacherEducation", JSON.stringify(TeacherEducation));
  processTeachers(Teachers, TeacherEducation);
}

function processTeachers(Teachers, TeacherEducation) {
  let TeachersData = [];
  for (var i = 0; i < TeacherEducation.length; i++){
    TeachersData.push([Teachers[i],TeacherEducation[i]]);
  }
  localStorage.setItem("TeachersData", JSON.stringify(TeachersData));
}
function openModal(number, option){
  $("#firstBox").remove();
  $("#secondBox").remove();
  $("#thirdBox").remove();
  $("#fourthBox").remove();
  $("#boxLabel1").remove();
  $("#boxLabel2").remove();
  $("#boxLabel3").remove();
  $("#boxLabel4").remove();
  switch(true){
    case number == 1 && option == "Add":
      dropdownToText(1);
      break;
    case number == 1 && option == "Edit":
      var dropdownContent = [JSON.parse(localStorage.getItem("SubjectLabel"))];
      dropdownLoop(dropdownContent, 1, "Edit");
      break;
    case number == 1 && option == "Delete":
      var dropdownContent = [JSON.parse(localStorage.getItem("SubjectLabel"))];
      dropdownLoop(dropdownContent, 1, "Delete");
      break;  
    case number == 2 && option == "Edit":
      var dropdownContent = [["Operational", "Faulty"]];
      dropdownLoop(dropdownContent, 2, "Edit");
      break;
    case number == 3 && option == "Add":
      dropdownToText(3);
      break;
    case number == 3 && option == "Edit":
      var dropdownContent = [["In-Use", "Available"],JSON.parse(localStorage.getItem("ItemLabels"))];
      dropdownLoop(dropdownContent, 3, "Edit");
      break;
    case number == 3 && option == "Delete":
      var dropdownContent = [JSON.parse(localStorage.getItem("ItemLabels"))];
      dropdownLoop(dropdownContent, 3, "Delete");
      break;
    case number == 4 && option == "Add":
      dropdownToText(4);
      break;
    case number == 4 && option == "Edit":
      var dropdownContent = [JSON.parse(localStorage.getItem("VenueLabels"))];
      dropdownLoop(dropdownContent, 4, "Edit");
      break;
    case number == 4 && option == "Delete":
      var dropdownContent = [JSON.parse(localStorage.getItem("VenueLabels"))];
      dropdownLoop(dropdownContent, 4, "Delete");
      break;
    case number == 5 && option == "Add":
      dropdownToText(5);
      break;
    case number == 5 && option == "Edit":
      var dropdownContent = [JSON.parse(localStorage.getItem("Teachers"))];
      dropdownLoop(dropdownContent, 5, "Edit");
      break;
    case number == 5 && option == "Delete":
      var dropdownContent = [JSON.parse(localStorage.getItem("Teachers"))];
      dropdownLoop(dropdownContent, 5, "Delete");
      break;
    default:
      alert("Something went wrong");
      break;
  }
}

function dropdownToText(number){ // Add
  status = "Add";
  var firstBox = "<input class='form-control' id='firstBox' type='textbox'/>";
  var secondBox = "<input class='form-control' id='secondBox' type='textbox'/>";
  var thirdBox = "<input class='form-control' id='thirdBox' type='textbox'/>";
  var boxLabel1 = "<label class='col-form-label' id='boxLabel1'></label>";
  var boxLabel2 = "<label class='col-form-label' id='boxLabel2'></label>";
  var boxLabel3 = "<label class='col-form-label' id='boxLabel3'></label>";
  document.getElementById("ModalLabel").innerHTML = "Add data";
  $("#firstTextContainer").append(boxLabel1);
  $("#firstTextContainer").append(firstBox);
  $("#secondTextContainer").append(boxLabel2);
  $("#secondTextContainer").append(secondBox);
  switch(number){
    case 1:
      document.getElementById("boxLabel1").innerHTML = "Add Subject:";
      document.getElementById("boxLabel2").innerHTML = "Quantity:";
      document.getElementById("submitBtn").value = "Students";
      $("#secondText").remove();
      break;
    case 3:
      $("#thirdTextContainer").append(boxLabel3);
      $("#thirdTextContainer").append(thirdBox);
      document.getElementById("boxLabel1").innerHTML = "Add Item:";
      document.getElementById("boxLabel2").innerHTML = "Available Quantity:";
      document.getElementById("boxLabel3").innerHTML = "In-Use Quantity:";
      document.getElementById("submitBtn").value = "Items";
      break;
    case 4:
      document.getElementById("boxLabel1").innerHTML = "Add Venue:";
      document.getElementById("boxLabel2").innerHTML = "Quantity:";
      document.getElementById("submitBtn").value = "Venues";
      $("#secondText").remove();
      break;
    case 5:
      document.getElementById("boxLabel1").innerHTML = "Add Teacher Name:";
      document.getElementById("boxLabel2").innerHTML = "Education Background:";
      document.getElementById("submitBtn").value = "Teachers";
      break;
    default:
      alert("Something went wrong");
      break;
  }
}

function dropdownLoop(dropdownContent, number, status1){ // Edit + Delete
  var k = 1; status = status1;
  var firstBox = "<select class='custom-select' id='firstBox'></select>";
  var secondBox = number != 3 ? "<input class='form-control' id='secondBox' type='textbox'/>" : "<select class='custom-select' id='secondBox'></select>";
  var thirdBox = "<input class='form-control' id='thirdBox' type='textbox'/>";
  var boxLabel1 = "<label class='col-form-label' id='boxLabel1'></label>";
  var boxLabel2 = "<label class='col-form-label' id='boxLabel2'></label>";
  var boxLabel3 = "<label class='col-form-label' id='boxLabel3'></label>";
  $("#firstTextContainer").append(boxLabel1);
  $("#firstTextContainer").append(firstBox);
  if(status == "Edit"){
    $("#secondTextContainer").append(boxLabel2);
    $("#secondTextContainer").append(secondBox);
  }
  if (number != 2 && status == "Edit"){
    $("#thirdTextContainer").append(boxLabel3);
    $("#thirdTextContainer").append(thirdBox);
    document.getElementById("secondBox").value = dropdownContent[0][0];
  }
  status != "Delete" ? document.getElementById("ModalLabel").innerHTML = "Edit data" : document.getElementById("ModalLabel").innerHTML = "Delete data";
  switch(true){
    case number == 1 && status == "Edit":
      document.getElementById("boxLabel1").innerHTML = "Choose Subject:";
      document.getElementById("boxLabel2").innerHTML = "Subject Name:";
      document.getElementById("boxLabel3").innerHTML = "Quantity:";
      document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("SubjectData"))[0];
      document.getElementById("submitBtn").value = "Students";
      break;
    case number == 1 && status == "Delete":
      document.getElementById("boxLabel1").innerHTML = "Choose Subject:";
      document.getElementById("submitBtn").value = "Students";
      break;
    case number == 2 && status == "Edit":
      document.getElementById("boxLabel1").innerHTML = "Choose Computer Status:";
      document.getElementById("boxLabel2").innerHTML = "Quantity:";
      document.getElementById("secondBox").value = JSON.parse(localStorage.getItem("Computers"))[0];
      document.getElementById("submitBtn").value = "Computers";
      break;
    case number == 3 && status == "Edit":
      k = 2;
      var fourthBox = "<input class='form-control' id='fourthBox' type='textbox'/>";
      var boxLabel4 = "<label class='col-form-label' id='boxLabel4'></label>";
      $("#fourthTextContainer").append(boxLabel4);
      $("#fourthTextContainer").append(fourthBox);
      document.getElementById("thirdBox").value = dropdownContent[1][0];
      document.getElementById("boxLabel1").innerHTML = "Choose Availabilty:";
      document.getElementById("boxLabel2").innerHTML = "Choose Item:";
      document.getElementById("boxLabel3").innerHTML = "Item Name:";
      document.getElementById("boxLabel4").innerHTML = "Quantity:";
      document.getElementById("fourthBox").value = JSON.parse(localStorage.getItem("UseItem"))[0];
      document.getElementById("submitBtn").value = "Items";
      break;
    case number == 3 && status == "Delete":
      document.getElementById("boxLabel1").innerHTML = "Choose Item:";
      document.getElementById("submitBtn").value = "Items";
      break;
    case number == 4 && status == "Edit":
      document.getElementById("boxLabel1").innerHTML = "Choose Venue:";
      document.getElementById("boxLabel2").innerHTML = "Venue Name:";
      document.getElementById("boxLabel3").innerHTML = "Quantity:";
      document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("Venue"))[0];
      document.getElementById("submitBtn").value = "Venues";
      break;
    case number == 4 && status == "Delete":
      document.getElementById("boxLabel1").innerHTML = "Choose Venue:";
      document.getElementById("submitBtn").value = "Venues";
      break;
    case number == 5 && status == "Edit":
      document.getElementById("boxLabel1").innerHTML = "Choose Teacher:";
      document.getElementById("boxLabel2").innerHTML = "Teacher Name:";
      document.getElementById("boxLabel3").innerHTML = "Education Background:";
      document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("TeacherEducation"))[0];
      document.getElementById("submitBtn").value = "Teachers";
      break;
    case number == 5 && status == "Delete":
      document.getElementById("boxLabel1").innerHTML = "Choose Teacher:";
      document.getElementById("submitBtn").value = "Teachers";
      break;
    default:
      alert("Something went wrong.");
      break;
  }
  firstBox = document.getElementById('firstBox');
  secondBox = document.getElementById('secondBox');
  for (var j = 0; j < k; j++){
    for (var i = 0; i < dropdownContent[j].length; i++){
      var option = document.createElement("option");
      option.text = dropdownContent[j][i];
      option.value = i;
      j != 1 ? firstBox.appendChild(option) : secondBox.appendChild(option);
    }
  }
}
// Execute on dropdowns change
$(document).on('change',"#firstBox", function(){
  if ($('#firstBox').is('select') == true){
    if(!(document.getElementById("submitBtn").value == "Computers")){
      if ($('#secondBox').is('select') == false){
        document.getElementById("secondBox").value = $("#firstBox option:selected").text();
        switch(document.getElementById("submitBtn").value){
          case "Students":
            document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("SubjectData"))[$("#firstBox option:selected").val()];
            break;
          case "Venues":
            document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("Venue"))[$("#firstBox option:selected").val()];
            break;
          case "Teachers":
            document.getElementById("thirdBox").value = JSON.parse(localStorage.getItem("TeacherEducation"))[$("#firstBox option:selected").val()];
            break;
        }
      } else {
          if(document.getElementById("firstBox").value == 0){
            document.getElementById("fourthBox").value = JSON.parse(localStorage.getItem("UseItem"))[$("#secondBox option:selected").val()];
          } else if (document.getElementById("firstBox").value == 1){
            document.getElementById("fourthBox").value = JSON.parse(localStorage.getItem("FreeItem"))[$("#secondBox option:selected").val()];
          }
        }
    } else if((document.getElementById("submitBtn").value == "Computers")){
        document.getElementById("secondBox").value = JSON.parse(localStorage.getItem("Computers"))[$("#firstBox option:selected").val()];
    }
  }
});  
$(document).on('change',"#secondBox", function(){
  if ($('#fourthBox').length) {
    document.getElementById("thirdBox").value = $("#secondBox option:selected").text();
    if (document.getElementById("firstBox").value == 0){
      document.getElementById("fourthBox").value = JSON.parse(localStorage.getItem("UseItem"))[$("#secondBox option:selected").val()];
    } else if (document.getElementById("firstBox").value == 1) {
      document.getElementById("fourthBox").value = JSON.parse(localStorage.getItem("FreeItem"))[$("#secondBox option:selected").val()];
    }
  }
});  
// Table
var myTable = $('#dataTable').DataTable({
  data: JSON.parse(localStorage.getItem("TeachersData")),
  columns: [
    {"title": "Teachers Name" },
    {"title": "Education Background" } 
  ]
});
// bar graph
var ctx = document.getElementById('Students').getContext('2d');
var Students = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: JSON.parse(localStorage.getItem("SubjectLabel")),
        datasets: [{
            label: 'Number of Students',
            data: JSON.parse(localStorage.getItem("SubjectData")),
            backgroundColor: colours,
        }],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: 10,
          right: 25
        },
      },
      tooltips: {
            mode: 'index',
            intersect: false,
      },
        scales: {
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }]
        }
    }
});
// Pie Chart Example
var ctx = document.getElementById("Computers");
var Computers = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Operational", "Faulty"],
    datasets: [{
      data: JSON.parse(localStorage.getItem("Computers")),
      backgroundColor: colours,
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
      legend: {
      display: false
    }
  },
});
//Stacked bar graph
var ctx = document.getElementById("Items");
var Items = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: JSON.parse(localStorage.getItem("ItemLabels")),
    datasets: [{
      label: 'In-Use',
      backgroundColor: colours,
      data: JSON.parse(localStorage.getItem("UseItem"))
      },
      {
        label: 'Available',
        backgroundColor: colours.slice().reverse(),
        data: JSON.parse(localStorage.getItem("FreeItem"))
    }],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true,
         ticks: {
           beginAtZero: true
          },
      gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
      }
      }]
    }
  },
});
// bar graph
var ctx = document.getElementById('Venues').getContext('2d');
var Venues = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: JSON.parse(localStorage.getItem("VenueLabels")),
        datasets: [{
            label: 'Quantity',
            data: JSON.parse(localStorage.getItem("Venue")),
            backgroundColor: colours,
        }],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: 10,
          right: 25
        },
      },
        tooltips: {
            mode: 'index',
            intersect: false,
            axis: 'y'
        },
        scales: {
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                beginAtZero: true
                },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
                }
            }]
        }
    }
});
// Validation
function checkText(btnValue){
  let firstBox = (document.getElementById("firstBox").value == "") ? (alert("First textbox must not be empty"), false) : document.getElementById("firstBox").value;
  let secondBox; let thirdBox; let fourthBox;
  if (status == "Edit"){
    secondBox = (document.getElementById("secondBox").value == "") ? (alert("Second textbox must not be empty"), false) : document.getElementById("secondBox").value;
    if (btnValue == "Computers") {
      secondBox = isNaN(secondBox) ? (alert("Second Textbox must be a number."), false) : secondBox;
    }
    if (btnValue != "Computers"){
      thirdBox = (document.getElementById("thirdBox").value == "") ? (alert("Third textbox must not be empty"), false) : document.getElementById("thirdBox").value;
    }
  } else if (status == "Add") {
    secondBox = (document.getElementById("secondBox").value == "") ? (alert("Second textbox must not be empty"), false) : document.getElementById("secondBox").value;
    secondBox = isNaN(secondBox) ? (alert("Second Textbox must be a number."), false) : secondBox;
    if (btnValue == "Items") {
      thirdBox = (document.getElementById("thirdBox").value == "") ? (alert("Third textbox must not be empty"), false) : document.getElementById("thirdBox").value;
      thirdBox = isNaN(thirdBox) ? (alert("Third Textbox must be a number."), false) : thirdBox;
    }
  }
  if (btnValue == "Items" && status == "Edit"){
    fourthBox = (document.getElementById("fourthBox").value == "") ? (alert("Fourth textbox must not be empty"), false) : document.getElementById("fourthBox").value;
    fourthBox = isNaN(fourthBox) ? (alert("Fourth Textbox must be a number."), false) : fourthBox;
  }
  return {
    firstBox: firstBox,
    secondBox: secondBox,
    thirdBox: thirdBox,
    fourthBox: fourthBox,
  };
}
// Edit data
function editData(btnValue){
  let {firstBox, secondBox, thirdBox, fourthBox} = checkText(btnValue);
  //$("#firstBox option:selected").text() // Dropdown
  if (firstBox || secondBox !== false){
      switch(true){
        case btnValue == "Students" && status == "Add":
          if (JSON.parse(localStorage.getItem("SubjectLabel")).length < 8){
            var SubjectLabel = JSON.parse(localStorage.getItem("SubjectLabel"));
            var SubjectData = JSON.parse(localStorage.getItem("SubjectData"));
            SubjectLabel.push(document.getElementById("firstBox").value);
            SubjectData.push(document.getElementById("secondBox").value);
            localStorage.setItem("SubjectLabel", JSON.stringify(SubjectLabel));
            localStorage.setItem("SubjectData", JSON.stringify(SubjectData));
            // Chart data needs to reset
            Students.data.labels = JSON.parse(localStorage.getItem("SubjectLabel"));
            Students.data.datasets[0].data = JSON.parse(localStorage.getItem("SubjectData"));
            Students.update();
          } else {
            alert("Cannot have more than 8 items on one chart.");
          }
          break;
        case btnValue == "Students" && status == "Edit":
          var SubjectLabel = JSON.parse(localStorage.getItem("SubjectLabel"));
          var SubjectData = JSON.parse(localStorage.getItem("SubjectData"));
          SubjectLabel[firstBox] = secondBox;
          SubjectData[firstBox] = thirdBox;
          localStorage.setItem("SubjectLabel", JSON.stringify(SubjectLabel));
          localStorage.setItem("SubjectData", JSON.stringify(SubjectData));
          // Chart data needs to reset
          Students.data.labels[firstBox] = SubjectLabel[firstBox];
          Students.data.datasets[0].data[firstBox] = SubjectData[firstBox]; 
          Students.update();
          break;
        case btnValue == "Students" && status == "Delete":
          Students.data.datasets[0].data.splice(firstBox, 1);
          Students.data.labels.splice(firstBox, 1);
          var SubjectData = Students.data.datasets[0].data;
          var SubjectLabel = Students.data.labels;
          localStorage.setItem("SubjectData", JSON.stringify(SubjectData));
          localStorage.setItem("SubjectLabel", JSON.stringify(SubjectLabel));
          Students.update();
          break;
        case btnValue == "Computers" && status == "Edit":
          Computers.data.datasets[0].data[firstBox] = secondBox;
          var ComputersData = JSON.parse(localStorage.getItem("Computers"));
          ComputersData[firstBox] = secondBox;
          localStorage.setItem("Computers", JSON.stringify(ComputersData));
          Computers.update();
          break;
        case btnValue == "Items" && status == "Add":
          if(thirdBox != false){
            if (JSON.parse(localStorage.getItem("ItemLabels")).length < 8){
              var ItemLabels = JSON.parse(localStorage.getItem("ItemLabels"));
              var UseItem = JSON.parse(localStorage.getItem("UseItem"));
              var FreeItem = JSON.parse(localStorage.getItem("FreeItem"));
              ItemLabels.push(document.getElementById("firstBox").value);
              UseItem.push(document.getElementById("secondBox").value);
              FreeItem.push(document.getElementById("thirdBox").value);
              localStorage.setItem("ItemLabels", JSON.stringify(ItemLabels));
              localStorage.setItem("UseItem", JSON.stringify(UseItem));
              localStorage.setItem("FreeItem", JSON.stringify(FreeItem));
              // Chart data needs to reset
              Items.data.labels = JSON.parse(localStorage.getItem("ItemLabels"));
              Items.data.datasets[0].data = JSON.parse(localStorage.getItem("UseItem"));
              Items.data.datasets[1].data = JSON.parse(localStorage.getItem("FreeItem"));
              Items.update();
            } else {
              alert("Cannot have more than 8 items on one chart.");
            }
          }
          break;
        case btnValue == "Items" && status == "Edit":
          var ItemLabels = JSON.parse(localStorage.getItem("ItemLabels"));
          ItemLabels[secondBox] = thirdBox;
          if(firstBox == 0){
            let UseItem = JSON.parse(localStorage.getItem("UseItem"));
            UseItem[secondBox] = fourthBox;
            localStorage.setItem("UseItem", JSON.stringify(UseItem));
          }
          else if (firstBox == 1){
            let FreeItem = JSON.parse(localStorage.getItem("FreeItem"));
            FreeItem[secondBox] = fourthBox;
            localStorage.setItem("FreeItem", JSON.stringify(FreeItem));
          }
          localStorage.setItem("ItemLabels", JSON.stringify(ItemLabels));
          // Chart data needs to reset
          Items.data.labels[firstBox] = thirdBox; 
          Items.data.datasets[firstBox].data[secondBox] = fourthBox;
          Items.update();
          break;
        case btnValue == "Items" && status == "Delete":
          Items.data.labels.splice(firstBox, 1);
          Items.data.datasets[0].data.splice(firstBox, 1);
          Items.data.datasets[1].data.splice(firstBox, 1);
          var ItemLabels = Items.data.labels;
          var FreeItem = Items.data.datasets[0].data;
          var UseItem = Items.data.datasets[0].data;
          localStorage.setItem("ItemLabels", JSON.stringify(ItemLabels));
          localStorage.setItem("FreeItem", JSON.stringify(FreeItem));
          localStorage.setItem("UseItem", JSON.stringify(UseItem));
          Items.update();
          break;
        case btnValue == "Venues" && status == "Add":
          if (JSON.parse(localStorage.getItem("VenueLabels")).length < 8){
            var VenueLabels = JSON.parse(localStorage.getItem("VenueLabels"));
            var Venue = JSON.parse(localStorage.getItem("Venue"));
            VenueLabels.push(firstBox);
            Venue.push(secondBox);
            localStorage.setItem("VenueLabels", JSON.stringify(VenueLabels));
            localStorage.setItem("Venue", JSON.stringify(Venue));
            // Chart data needs to reset
            Venues.data.labels = JSON.parse(localStorage.getItem("VenueLabels"));
            Venues.data.datasets[0].data = JSON.parse(localStorage.getItem("Venue"));
            Venues.update();
          } else {
            alert("Cannot have more than 8 items on one chart.");
          }
          break;
        case btnValue == "Venues" && status == "Edit":
          var VenueLabels = JSON.parse(localStorage.getItem("VenueLabels"));
          var VenueData = JSON.parse(localStorage.getItem("Venue"));
          VenueLabels[firstBox] = secondBox;
          VenueData[firstBox] = thirdBox;
          localStorage.setItem("VenueLabels", JSON.stringify(VenueLabels));
          localStorage.setItem("Venue", JSON.stringify(VenueData));
          // Chart data needs to reset
          Venues.data.labels[firstBox] = secondBox;
          Venues.data.datasets[0].data[firstBox] = thirdBox;
          Venues.update();
          break;
        case btnValue == "Venues" && status == "Delete":
          Venues.data.labels.splice(firstBox, 1);
          Venues.data.datasets[0].data.splice(firstBox, 1);
          var VenueLabels = Venues.data.labels;
          var Venue = Venues.data.datasets[0].data;
          localStorage.setItem("VenueLabels", JSON.stringify(VenueLabels));
          localStorage.setItem("Venue", JSON.stringify(Venue));
          Venues.update();
          break;
        case btnValue == "Teachers" && status == "Add":
          var Teachers = JSON.parse(localStorage.getItem("Teachers"));
          var TeacherEducation = JSON.parse(localStorage.getItem("TeacherEducation"));;
          Teachers.push(document.getElementById("firstBox").value);
          TeacherEducation.push(document.getElementById("secondBox").value);
          localStorage.setItem("Teachers", JSON.stringify(Teachers));
          localStorage.setItem("TeacherEducation", JSON.stringify(TeacherEducation));
          processTeachers(Teachers, TeacherEducation);
          myTable.row.add([document.getElementById("firstBox").value, secondBox]).draw( false );
          break;
        case btnValue == "Teachers" && status == "Edit":
          var Teachers = JSON.parse(localStorage.getItem("Teachers"));
          var TeacherEducation = JSON.parse(localStorage.getItem("TeacherEducation"));
          Teachers[firstBox] = secondBox;
          TeacherEducation[firstBox] = thirdBox;
          localStorage.setItem("Teachers", JSON.stringify(Teachers));
          localStorage.setItem("TeacherEducation", JSON.stringify(TeacherEducation));
          processTeachers(Teachers, TeacherEducation);
          myTable.cell(firstBox, 0).data(secondBox);
          myTable.cell(firstBox, 1).data(thirdBox);
          break;
        case btnValue == "Teachers" && status == "Delete":
          var Teachers = JSON.parse(localStorage.getItem("Teachers"));
          var TeacherEducation = JSON.parse(localStorage.getItem("TeacherEducation"));;
          Teachers.splice(firstBox, 1);
          TeacherEducation.splice(secondBox, 1);
          localStorage.setItem("Teachers", JSON.stringify(Teachers));
          localStorage.setItem("TeacherEducation", JSON.stringify(TeacherEducation));
          processTeachers(Teachers, TeacherEducation);
          myTable.row(firstBox).remove().draw( false );
          break;
        default:
          alert("Something went wrong.");
          break;
      }   
  } 
}