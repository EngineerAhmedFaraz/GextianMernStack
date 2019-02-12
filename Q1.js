let name = ["ahmed","waheed","danish","faizan","iff","mbux","aakash"];
let department = ["software","civil","electrical","electronics","industrial","mechanical","architecture"];
let salary = [100000,200000,300000,400000,500000,600000,700000];
let username = prompt("Enter the Name of  Employee / Department ");
let min=100000;
let max =700000;
let range = prompt("Enter the range ");
for(let i in name){
    if(username==name[i]){
        document.getElementById("container").innerHTML += 
        "<li style='list-style:none'>"  +"Name"+ ": " +name[i] +"<br>"+"Department"+ ": " +department[i]+"<br>"+"Salary" + ": "+salary[i]+"<br>"+ "</li>"
    }
    if(username==department[i]){
        document.getElementById("container").innerHTML+= "<li style='list-style:none'>"   +"Name:"+name[i]+"</li>"

    }
}
if(range==(salary>=min && salary<=max)){
    document.getElementById("container").innerHTML+= "<li style='list-style:none'>"   +"Name:"+name+"</li>"


}

// let user = prompt("Enter the Department");
// for(let x in department){
//     if(user==department[x]){
//     document.getElementById("container").innerHTML+= "<li style='list-style:none'>"   +"Name:"+name[x]+"</li>"
//     } 
// }

// function min_salary(){
    
//    for(let a in salary){
//     if(Math.min(salary)){
//         document.getElementById("container").innerHTML+="<li style='list-style:non'>"+
//         "Name : "+name[a]+"Salary : "+salary[a]+"</li>"; 
               
//         }
//     }
        
// }

