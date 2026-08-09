/* syntax    for(intialisation; condition; updation)
{
// code
}
*/
// shortcut for Duplicate and Multicurser => cmd+d (for selected area)

const  arr_student= ["Ayushi", "Rudra", "Vaibhav", "Nitesh","Shivansh"]
const bca=["Ayushi", "Rudra","Prachi", "Jaya" ]
// for (i=0; i<arr_student.length; i++){
//   let element= arr_student[i];
// console.log(`Students of class are...`);
// console.log(`${element}`);
// }

// // Nesting of loops
// for (let ind= 0; ind<arr_student.length ; ind++){
//     let cadets=arr_student[ind];
//     console.log( cadets);
//     if(cadets==="Rudra"){
//         for(let ind= 0; ind<bca.length ; ind++){
//         console.log(`students from BCA are...`);
//         let bcaCadet= bca[ind];
//         console.log( bcaCadet);
//         }
//     }
// }

// // if you are out of array index then you'll get undefined

// // breking loop in-between somewhere 
//  for (let ind= 0; ind<arr_student.length ; ind++){
//     let cadets=arr_student[ind];
//     console.log( cadets);
//     if(cadets==="Rudra")
//     {
//         break;
//     }
// }
// continue  and ignore that specific condition 
for (let ind= 0; ind<arr_student.length ; ind++){
     let cadets=arr_student[ind];
     if(cadets==="Ayushi")
        {
        continue;
        console.log( cadets);
    }
     console.log( ` Male besties  are ${cadets}.`);
    //console.log("Radhe Radhe");
}