// var city = prompt("Enter Your City Name");
// citys = city.toLowerCase()
// if(citys == "karachi"){
//     alert("Welcome To the City Of Lights")
// }else{
//     alert("You Do not Belong To Karachi")
// }

// var gender = prompt("Enter Your Gender");
// genders = gender.toLowerCase()
// if(genders == "male"){
//     alert("Good Morning Sir!")
// }else{
//     alert("Good Morning Ma'am!")
// }

// var signal = prompt("Enter Signal!")
// signals = signal.toLowerCase(); 
// if(signals == "red"){
//     alert("Must Stop!!!")
// }else if(signals == "yellow"){
//     alert("Ready To Move!")
// }else{
//     alert("Go go go...")
// }

// var fuel = prompt("Enter The fuel Left(In LITRES)")
// if(fuel < 0.25){
//     alert("Refuel Your Car.")
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("Not True")
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// var Maths = prompt("Enter Marks in Maths");
// var Physics = prompt("Enter Marks in Physics");
// var Computers = prompt("Enter Marks in Computer");
// var math = parseInt(Maths);
// var physic = parseInt(Physics);
// var computer = parseInt(Computers);
// var total = 300;
// var sum = math + physic + computer
// var percentage = sum*100/total
// var para = document.getElementById("pera")

// if(percentage > 80 || percentage == 80 && percentage < 100){
    
//     para.innerHTML = "Total Marks = " + total + "<br />";
//     para.innerHTML += "Marks Obtained = " + sum + "<br />";
//     para.innerHTML += "Total Percentage = " + percentage + "%" +"<br />";
//     para.innerHTML += "Grade = A+"+ "<br />";
//     para.innerHTML += "Remarks = Excellent"+ "<br />";
// }else if(percentage > 70 || percentage == 70 && percentage < 80){
//     para.innerHTML = "Total Marks = " + total + "<br />";
//     para.innerHTML += "Marks Obtained = " + sum + "<br />";
//     para.innerHTML += "Total Percentage = " + percentage+ "%"  + "<br />";
//     para.innerHTML += "Grade = A"+ "<br />";
//     para.innerHTML += "Remarks = Good"+ "<br />";
// }else if(percentage > 60 || percentage == 60 && percentage < 70){
//     para.innerHTML = "Total Marks = " + total + "<br />";
//     para.innerHTML += "Marks Obtained = " + sum + "<br />";
//     para.innerHTML += "Total Percentage = " + percentage + "%" + "<br />";
//     para.innerHTML += "Grade = B"+ "<br />";
//     para.innerHTML += "Remarks = You Need To Improve!"+ "<br />";
// }else{
//     para.innerHTML = "Total Marks = " + total + "<br />";
//     para.innerHTML += "Marks Obtained = " + sum + "<br />";
//     para.innerHTML += "Total Percentage = " + percentage+ "%"  + "<br />";
//     para.innerHTML += "Grade = FAIL"+ "<br />";
//     para.innerHTML += "Remarks = SORRY!"+ "<br />";
// }

var game = 3;
var ans = prompt("Guess A Number Less than 10 and greater than 0")
if(ans == game){
    alert("!----B--I--N--G--O----!")
}else if(ans == game-1){
    alert("Close enough to the correct answer")
}else if(ans == game+1){
    alert("Greater to the correct answer")
}else{
    alert("Wrong Number")
}
