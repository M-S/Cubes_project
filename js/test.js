/*******Script file for finding the smallest Number of Cubes that can fit in a given Box********/
/***By Mariam Reba Alexander,  14/6/17***/

/****This function is called on clicking 'Submit' button*******/
function onSubmit(){
  //Store value received from text area
  var input = document.getElementById('txtArea').value;
  //Store the input in arrays seperated by new lines
  var lineFeed = input.split('\n');
  console.log(lineFeed);
  var boxArray =[];
  var cubeArray =[];
  //Box constructor
  var Box = function(length,breadth, height){
    this.length = length;
    this.breadth = breadth;
    this.height = height;
  }
  //split each array elements into 2 arrays , 'boxArray' with box dimension, and 'cubeArray' with no. of cubes
  for (var i=0; i<lineFeed.length; i++){
    var elements  = lineFeed[i].split(" ");
    cubeArray.push(new Array(elements.splice(3)));
    boxArray.push(new Box(elements[0],elements[1],elements[2]));
    }
 //volume function
 var volume = function(l,w,h){
   return l*w*h;
 }
 //to find powers of 2 and store in array
 var powersOfTwo = function(arrayLength) {
   var x = arrayLength;
   var powers = [];
   for (var i=0;i<x;i++){
     var pow = Math.pow(2,i);
     powers.push(pow);
   }
   return powers;
 }

/************Function to find the smallest no.of cubes that fit in the boxes.*********/

 var findCubes = function(){
   //find volume of boxes and store in 'boxVolumeArray'
   var boxVolumeArray=[];
   for(var i = 0; i < boxArray.length; i++){
     var boxVol = volume(boxArray[i].length,boxArray[i].breadth,boxArray[i].height);
     boxVolumeArray.push(boxVol);
   }
  console.log("boxVolumeArray: "+ boxVolumeArray);

  //find volume of cubes ans store in 'cubeVolumeArray'
  var cubeVolumeArray=[];
  for (var i=0;i<cubeArray.length;i++){
    console.log("length of cubeArray"+"["+i+"]: "+cubeArray[i][0].length);
    var length = cubeArray[i][0].length;
    var powersArray = powersOfTwo(length);// to find the array with powers of 2 eg: powersArray= [1,2,4,8,...]
    console.log("Powers array is "+powersArray);
    console.log("Calculating vol of cubes ",cubeArray[i][0]);
    var cubeVol=[];
    for(var z=0;z<cubeArray[i][0].length;z++){
      var eachCubeVol = Math.pow(powersArray[z],3);// calculate the volume of each cube eg: powersArray[0]=1, eachCubeVol = 1*1*1
      cubeVol[z] = cubeArray[i][0][z]*eachCubeVol ;
    }
    cubeVolumeArray.push(cubeVol);
  }

  /***Check for conditions*****/

  var resultArray =[];//to store result
  for (var i=0;i<cubeVolumeArray.length;i++){
    var cubeArrayLength = cubeArray[i][0].length;
    var powersArray = powersOfTwo(cubeArray[i][0].length);
    var sumVol=0;
    for(var j=0;j<cubeVolumeArray[i].length;j++){ //To find total volume of all cubes in each cubeVolume Array elements
      sumVol= cubeVolumeArray[i][j]+sumVol;
    }
    if(boxVolumeArray[i]>sumVol){ //check if volume of box is greater than tot volume of cubes, result = -1
      resultArray.push(-1);
      console.log("Array Number:"+i);
    } else if(Number(boxVolumeArray[i])<sumVol){
        if(cubeArrayLength==1){
          console.log("Array Number:"+i);
            var count = Number(boxVolumeArray[i]);//if there is only 1*1*1 sized cube , then smaller number is box Volume /(1*1*1).
            resultArray.push(count);
          } else if(cubeArrayLength>1){ //if there are more than one size of cubes .
            console.log("Array Number:"+i);
            var vol = boxVolumeArray[i];
            var diffVol=0;
            var count=0; //to take count of the number of cubes for result
            var j=cubeArrayLength;
              // Example cubeArray[0]=[10,10,1], j = 3
              var cubePower = Math.pow(powersArray[j-1],3);// eg cubePower = 4*4*4 = 64
              var cubeCount = Number(cubeArray[i][0][j-1]);//Number of largest sized cube eg: cubeCount =1 = cubeArray[3][0][3]

              count = cubeCount; // count = 1
              //console.log("Cube Count:"+ cubeCount);

              if(vol>cubeCount*cubePower){ // if volume of box(4*4*8=128)> volume of largest sized cube(1*4*4*4=64)

                diffVol = vol-cubeCount*cubePower;//diffVol = 128-64=64
                console.log("diffVol for array element[ "+ i +" ] "+diffVol);

                cubePower = Math.pow(powersArray[j-2],3);//cubePower = 2*2*2=8
                //console.log("New Cube Power:"+cubePower);

                cubeCount = Number(cubeArray[i][0][j-2]);//next sized cube number, cubeCount = 10 = cubeArray[3][0][2]
                //console.log("New Cube Count:"+ cubeCount);

                if(diffVol/cubePower> cubeCount){ // 64/(2*2*2)=8, 8 is not greater than cubeCount 10
                  count = count + cubeCount;
                  console.log("New count:"+count);
                } else if(diffVol/cubePower< cubeCount){ // 8<10,i.e, only 8more is required to fill the box, therefore total no. of cubes = 1+8=9, the result is 9
                  count = count + diffVol/cubePower;
                  console.log("New count:"+count);
                }
              }
            resultArray.push(count);// push the result to array
          }
        }
    }
    return resultArray;
 }
  document.getElementById('result').innerHTML=findCubes().join(" <br> ");// to display result on html element .
}
