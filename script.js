/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((a)=>{
    if(a.profession=="developer"){
      console.log(a)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((a)=>{
    if(a.profession=="developer"){
      console.log(a)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"} )
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((a)=>{
      if(a.profession=="admin"){
        arr.splice(arr.indexOf(a),1)
      }
    
  })
  
}

let arr2 = [
  { id: 5, name: "poll", age: "21", profession: "intern" },
  { id: 6, name: "wing", age: "23", profession: "manager" },
  { id: 7, name: "tony", age: "18", profession: "ceo" },
];
function concatenateArray() {
  //Write your code here, just console.log
  arr.push(...arr2)
  console.log(arr)

}
