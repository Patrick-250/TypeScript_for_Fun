// 2 types to declare a variable
//1.var and let ... ooowww just like js....crazy i am  watching a 2017 video from @mosh , one of my favorite teachers and  then, let was just being introduced in js.... its 2025, a lot have changed tbh.

let count = 6; //same as  let count:number=6;
//count="5" // this is not allowed in ts, because we have declared(ts auto declared as number when we set it to 6) count as a number, so it can only be a number.
//count. //ts will show you all the methods and properties of a number, so you can use them on count.how powerful is that?!!!!

let country: string = "";
country = "USA";
let logS = function (message: string) {
  console.log(message);
};

let logS2 = () => {
  console.log("arrow f(x)");
};
