  $("#pop").on("click", function(e) {
    // e.preventDefault() this is stopping the redirect to the image its self
    e.preventDefault();
    // #the-modal is the img tag that I use as the modal.
    $('#the-modal').modal('toggle');
  });

