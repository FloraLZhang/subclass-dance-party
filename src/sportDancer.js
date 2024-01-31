var SportDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="sport" src="griddy.gif" alt="Jamarr Chase griddy"></img>');
  this.setPosition(top, left);
};

SportDancer.prototype = Object.create(Dancer.prototype);
SportDancer.prototype.constructor = SportDancer;

SportDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

SportDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// SportDancer.prototype.lineUp = function() {

// };