var CartoonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="cartoon" src="pikachu-dance.gif" alt="Pikachu"></img>');
  this.setPosition(top, left);
};

CartoonDancer.prototype = Object.create(Dancer.prototype);
CartoonDancer.prototype.constructor = CartoonDancer;

CartoonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

CartoonDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// CartoonDancer.prototype.lineUp = function() {
//   var leftPosition = 10;

//   $('.cartoon').each(function(index) {
//     $(this).animate({ top: '50%', left: leftPosition }, 500);
//     leftPosition += 150;
//   });
// };

CartoonDancer.prototype.lineUp = function() {
  var topPosition = 100 + 50 * window.dancers.indexOf(this);
  this.setPosition(topPosition, 0);
};