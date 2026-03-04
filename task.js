// let hr = 'Dharmendar R hee yaa'; 
// // console.log(hr.split(''));

// let me =hr.split(' ').reverse().join(' ');
// console.log(me);


// // console.error('failed');

// // function multiply() { let a=4;
// //      let b=3;
// //     // let c = a*b
// //   return a*b;
// // }

// // let qwe = multiply(4, 3);
// // console.log(qwe); 


// let me1=hr.split(' ').reverse()
// console.log(me1);


// let me2=hr.split(' ').reverse().join( )
// console.log(me2);

//     for (let i =10; i>=0;i--){console.log(i);
//     }
// console.error('failed');


//     // for (let i =0; i<=10;i++){console.log(i);
//     // }


    // for (let a =1;a<=5;a++){
    //     for (let b=1; b<=5;b++)
    //        console.log(a);  }
            
    
        
//     for (let a =1;a<=5;a++){ let rest= "";
//         for (let b=1; b<=5;b++){
//         //    console.log(a);
//         rest +=b;  } console.log(rest);
//     }

//     let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i]+','}
// console.log(text);


// let me5='dharm endar';
// let ans='';
// for (let d=me5.length-1;d>=0;d--){
//     ans+=me5[d]
// } console.log(ans);

// let text3 = "";
// for (let i = 0; i < cars.length; i--) {
//   text3 += cars[i]+','}
// console.log(text);

// let restu = '';

// for (let d = 1; d <= 5; d++) 
//  for (let e=5;e <=5;e--){
//   restu +=d;
//   console.log(restu);
// }

// for (let a = 1; a<=5;a++) 
//   { for (let b=1;b<=5;b++) {console.log(b)
  

// }
//   };

// for (let a = 1; a<=5;a++) 
//   {  let str =''; 
//     for (let b=1;b<=5;b++) 
//    {str+=b;
// } 

// console.log(str);}
  

// for (let a = 1; a<=5;a++) 
//   {  let str =''; 
//     for (let b=1;b<=a;b++) 
//    {str+=b;
// } 

// console.log(str);}
// let ar=[1,2,3,4,]
// let r=ar.reduce((acc,vaue)=>acc+vaue,2)   
// console.log(r);


function step1(callback) {
  setTimeout(() => {
    console.log('func 1')
}, 5000); callback ;     }

function step3 (callback){
  setTimeout(() => {
    console.log('func 2')}
    ,3000) ; callback}

// function step4(callback)
//   setTimeout(() => {
//     console.log('func 3')
//   }, timeout); callback()

// function step5 (callback){
//   setTimeout(() => {
//     console.log('func 4')
//   }, timeout); callback()

// }

step1(()=>{
  step3()
})
