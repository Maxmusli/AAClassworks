class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = el.getAttribute("data-user-id");
    this.followState= el.getAttribute("data-initial-follow-state");

    this.render();
    
    this.$el.on('click', this.handleClick.bind(this));
  }

render () {
  
  if (this.followState === "unfollowed") {
    this.$el.text("Follow!");
  } else if (this.followState === "followed") {
    this.$el.text("Unfollow!");
  }

}

handleClick() {
  let follow_toggle = this;
  if (this.followState === 'followed') {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${this.userId}/follow`,
      dataType: `json`
    })
    .then(res => {
      this.followState = 'unfollowed';
      follow_toggle.render();
    });
    
  } else {
    return $.ajax({
      method: 'POST',
      url: `/users/${this.userId}/follow`,
      dataType: `json`
    })
    .then(res => {
      this.followState = 'followed';
      follow_toggle.render();
    });
  }
  
}
}



module.exports = FollowToggle;