const students = [
    {id: 12, name: 'Forhad'},
    {id: 22, name: 'Sneha akter'},
    {id: 43, name: 'Salman'},
    {id: 45, name: 'Tomtom'},
];
let nameArray = [];
for(let i =0; i < students.length; i++){
    const studentName = students[i];
    const justName = studentName.name;
    nameArray.push(justName);    

}
console.log(nameArray);

const sId = students.map(x => x.id);
console.log(sId);

const sIdBigger = students.find(x => x.id > 22);
console.log(sIdBigger);

const sIdBiggerOne = students.filter(x => x.id > 22);
console.log(sIdBiggerOne);