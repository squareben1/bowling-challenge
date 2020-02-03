describe('Frame', function() {

  var frame 

  beforeEach(function() {
    frame = new Frame
    
  })

  it('has a strike attribute which is false by default', function() {
    expect(frame.strike).toEqual(false)
  })

  it('has a strike attribute which is TRUE if roll1 = 10', function() {
    frame = new Frame(10, 0)
    expect(frame.strike).toEqual(true)
  })

  it('has a spare attribute which is false by default', function() {
    expect(frame.spare).toEqual(false)
  })

  it('has a spare attribute which is TRUE if roll1+roll2 = 10', function() {
    frame = new Frame(5, 5)
    expect(frame.spare).toEqual(true)
  })
})