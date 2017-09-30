console.log("Hello world");
let a = 'sdf';
console.log("value a=%f some %f other",5,6);
if (a==5)
    console.log("value a=%f some other",5);
    console.log("a="+6);

switch (a){
    case 'sdf':{
        console.log("Nope");
        break;
    }
    case 'a':{
        console.log("Nope1");
        break;
    }
}
while(true){
    let b = prompt();
    console.log(b);
    if (b==='q'){
        break;
    }

}
// var arr=[5,6,7,8,9];
// for (var i in arr){
// //     console.log(i)
//     console.log(arr[i]);

// }
// let j=0;
// while( j <10){
//  console.log(j);
// j++;
// }
