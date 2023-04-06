
var color = "Example-var: red";
var count = 5;

if(count >4){
    color = "Var";
}
console.log("Ex-var: "+ color);

let count2 =10;
let color2 = "green";
if(count2<11){
    color2 = "Let";
    // count2 += 1;
    let count2 = 12;
    console.log("Ex-let: "+count2);
    console.log("Ex-let: "+color2);
}
console.log("Ex-let: "+count2);
console.log("Ex-let: "+color2);



/**const */
const color3= "Ex-const";
if(count>3){
    const color3="Const ";
    console.log(color3);

}
console.log(color3);

const color4= "Ex2-const";
// color4= "Const2-change"; Error
if(count>3){
    const color4="Const ";
    console.log(color4);

}
// color4= "Const2-change"; Error
console.log(color4);


/**Example - Arrow function*/
let func1 = "";
func1 = () => {
    return "Arrow function";
}
console.log(func1);

let func2 = (val) => "Arrow function" +val;
console.log(func2(" with parameter"));

/**Destruturing with array*/
var x, y;
[x, y] = [1, 2]
console.log(x, y);


const {a, b, c} = {a: 1, b: 2, c: () => 3}
console.log(a, b, c)// 

const res = {blog: 'abc.com', type: 'javascript'}
const {blog: nameBlog, type: newType} = res;
console.log(nameBlog, newType);//

/**Destructuring - nested object and array destructuring */
const blogs = {
	anonystick: [
  	{
      pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {
  anonystick: [
  	{
  	  pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;

console.log(namePage, numLikes, numDaily );//Tip javascript Viet Nam, 4789, 1323
