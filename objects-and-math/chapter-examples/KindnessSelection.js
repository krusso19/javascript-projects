function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 3; i++){
   console.log(randomSelection(happiness))
   console.log(randomSelection(words));
 }
  //prints 3 from each alternating^
 

 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //KT - when I didn't store the picked array in chosenArray, the entire array of happiness or words printed in the console.log
 //KT - and during the loop, since it ran twice, it printed two full arrays
 console.log("b)")
arrayOptions = [happiness, words];
chosenArray = randomSelection(arrayOptions);

  for (i=0; i < 2; i++){
  console.log(randomSelection(chosenArray));
}

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 console.log("c)");

 ranWord = randomSelection(happiness);
 ranHappiness = randomSelection(words);
 newArray = [ranWord, ranHappiness];

 console.log(newArray)