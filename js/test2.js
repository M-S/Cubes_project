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
  //check if Vb < Vc
  for(var i = 0; i<boxVolumeArray.length; i++){
    var cubesVolume=0;
    for(var j=0;j<cubeVolumeArray[i].length;j++){ //To find total volume of all cubes in each cubeVolume Array elements
    cubesVolume= Number(cubeVolumeArray[i][j])+cubesVolume;
    }
    var boxVolume = Number(boxVolumeArray[i]);
    if(boxVolume>cubesVolume){
      var result = -1;
      resultArray.push(result);
    }else{
      var result=0;
      var powersArray = powersOfTwo(cubeArray[i][0].length);
      for (n=cubeArray[i][0].length-1; n>=0; n--){
        var cubeNumber = Number(cubeArray[i][0][n]);
        var boxVolume1 = boxVolume - cubeNumber*Math.pow(Number(powersArray[n]),3);
        if(boxVolume1<0){
          result =Math.floor(result+boxVolume/(Math.pow(Number(powersArray[n]),3)));
          resultArray.push(result);
          break;
        }else if(boxVolume1>0){
          result = result + cubeNumber;
          boxVolume = boxVolume1;
        }
      }
    }
  }
    return resultArray;
 }
  document.getElementById('result').innerHTML=findCubes().join(" <br> ");// to display result on html element .
}
