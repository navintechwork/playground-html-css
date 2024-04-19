console.log('Javascript Loaded....');

// var arr1 = [{name:"a1",value:'1'}]
// var arr2 = [{name:"a1",value:'1'},{name:"a2",value:'2'},{name:"a3",value:'3'},{name:"a4",value:'4'}]

// var intersections1 = arr2.filter(e => arr1.indexOf(e.name) !== -1);
// var intersections2 = arr2.filter(e => arr1.indexOf(e.name) === -1);

let array1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
let array2 = [{ id: 1 }, { id: 3 }];
let array3 = array1.filter(entry1 => !array2.some(entry2 => entry1.id === entry2.id));
let array4 = array1.filter(entry1 => array2.some(entry2 => entry1.id === entry2.id));

console.log('Data 1--->',array3);
console.log('Data 2--->',array4);