describe('Game', function(){
  var scorecard 
  var frame

  beforeEach(function() {
    game = new Game
    
  })

  function rollMany(n, pin1, pin2) {
    for (var i = 0; i < n; i++) {
      game.roll(pin1,pin2);
    }
  }

  it('starts with a score of zero', function() {
    expect(game.totalScore).toEqual(0)
  })

  it('starts with turn counter at zero', function() {
    expect(game.turn).toEqual(0)
    // zero or 1?
  })
  
  it('starts with empty array to hold frames', function() {
    expect(game.frames).toEqual([])
  })

  describe('roll', function() {
    it('adds 3 frames of gutter balls to frames array', function() {
      rollMany(3, 0, 0)
      expect(game.frames.length).toEqual(3)
    })
    it('adds 1 frame of  1 and 1', function() {
      game.roll(1,1)
      expect(game.frames[0].rollOne).toEqual(1)
      expect(game.frames[0].rollTwo).toEqual(1)
    })
    it('increments turn by 1', function() {
      game.roll(1,1)
      expect(game.turn).toEqual(1)
    })
  })

  describe('score', function() {
    it('sums score in 1st frame of total score 4 & adds to totalScore', function() {
      game.roll(1,3)
      game.score(game.frames)
      expect(game.totalScore).toEqual(4)
    })
    it('can score a game of all 1s', function() {
      rollMany(10, 1, 1)
      game.score(game.frames)
      expect(game.totalScore).toEqual(20)
    })
    it('STRIKE: will add the next frame to a frame with a strike', function() {
      game.roll(10, 0)
      game.roll(1, 1)
      game.score(game.frames)
      expect(game.totalScore).toEqual(14)
    })
    it('can score a game of 5 strikes & 2 normal frames', function() {
      rollMany(5, 10, 0)
      rollMany(2, 1, 1)
      game.score(game.frames)
      expect(game.totalScore).toEqual(127)
    })
    // cant score a perfect game at the moment as it just keeps trying to add the next balls when there are none 

  })

  describe('spare',function() {
    it('SPARE scores 1 spare and adds next ball', function() {
      game.roll(5, 5);
      rollMany(2, 1, 1)
      game.score(frames);
      expect(game.totalScore).toEqual(13)
    })
  })
})