const students = [
    {id: 12, name: 'Forhad'},
    {id: 22, name: 'Sneha akter'},
    {id: 43, name: 'Salman'},
    {id: 45, name: 'Tomtom'},
];
var nameArray = [];
for(var i =0; i < students.length; i++){
    var studentName = students[i];
    var justName = studentName.name;
    nameArray.push(justName);    

}
console.log(nameArray);

const sId = students.map(x => x.id);
console.log(sId);

const sIdBigger = students.find(x => x.id > 22);
console.log(sIdBigger);

const sIdBiggerOne = students.filter(x => x.id > 22);
console.log(sIdBiggerOne);