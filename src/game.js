"use strict"

function Game(){
  this.totalScore = 0
  this.frames = []
  this.turn = 0
}

Game.prototype.roll = function(roll1, roll2){
  var frame = new Frame(roll1, roll2)
  this.frames.push(frame)
  this.turn += 1
}

Game.prototype.score = function(frames, turn) {
  for (var i = 0; i < this.frames.length; i++){
    if (frames[i].strike == true && frames[i+1].strike == false) {
      this.totalScore += frames[i].rollOne + (frames[i+1].rollOne + frames[i+1].rollTwo)
    } else if (frames[i].strike == true && frames[i+1].strike == true) {
      this.totalScore += frames[i].rollOne + (frames[i+1].rollOne + frames[i+2].rollOne)
    } else {
      this.totalScore += frames[i].rollOne + frames[i].rollTwo
    }
    
  }
  
}

// Game.prototype.strikeScore(frames) {
//   for (var i = 0; i < this.frames.length; i++){
//     if (frames[i].strike == true && frames[i+1].strike == false) {
//       this.totalScore += frames[i].rollOne + (frames[i+1].rollOne + frames[i+1].rollTwo)
//     } else if (frames[i].strike == true && frames[i+1].strike == true) {
//       this.totalScore += frames[i].rollOne + (frames[i+1].rollOne + frames[i+2].rollOne)
//     } else {
//       this.totalScore += frames[i].rollOne + frames[i].rollTwo
//     }
    
//   }
// }

