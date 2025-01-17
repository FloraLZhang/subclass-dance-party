describe('sportDancer', function() {

  var sport, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sport = new SportDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sport.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(sport.$node, 'toggle');
    sport.step();
    expect(sport.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(sport, 'step');
      expect(sport.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sport.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(sport.step.callCount).to.be.equal(2);
    });
  });
});