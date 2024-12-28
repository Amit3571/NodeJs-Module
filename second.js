const studentsDetails= {
    name:"Amit",
    Age: 36,
    color:"blue n red"
}
function hardwork(){
    console.log("hardwork")

}
function smartwork () {
    console.log("smart work")
    return 9
}
// module.exports={studentsDetails,hardwork,smartwork};
// module.exports=[studentsDetails,hardwork,smartwork];
module.exports=studentsDetails,hardwork,smartwork;