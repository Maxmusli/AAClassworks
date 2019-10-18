const FollowToggle = require('./follow_toggle');

// ready style callback
$( () => {
  const $els = $('.follow-toggle');
  $els.each( (index) =>{
    new FollowToggle($els[index]);
  });
  
});

