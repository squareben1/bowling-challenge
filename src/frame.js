"use strict"

function Frame(roll1, roll2){
  // add roll1, roll2
  // if roll1 === 10 
  //   this.score = 10
  //   this. strike = true
  //   break 
  //   else if 
  //   roll1 + roll2 === 10 
  //   this.score = 10
  //   this.split = truebreak 
  //   else 
  // this.score = roll1 + roll2
  this.rollOne = roll1
  this.rollTwo = roll2
    
    if (this.rollOne == 10) {
      this.strike = true; 
    } else {
      this.strike = false
    }
    if (this.rollOne + this.rollTwo == 10) {
      this.spare = true
    } else {
      this.spare = false
    }
      
  

}

// Frame.prototype.score = function(roll1, roll2) {
//   this.frameScore = roll1 + roll2
//   return this.frameScore
// }