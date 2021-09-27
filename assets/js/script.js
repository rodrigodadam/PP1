$("#submitBtn").click(function() {

  let name = $("#form-name").val();
  let email = $("#form-email").val();
  let subject = $("#form-subject").val();
  let message = $("#form-text").val();

  if(name == '' || email == '' || subject == '' || message == '') {
    swal({
      title: "Empty Fields!",
      text: "Please check the missing field!",
      icon: "warning",
      button: "OK!",
    });
  } else {
    swal({
      title: "Thank you for your e-mail!",
      text: "We'll contact you as soon as possible",
      icon: "success",
      button: "OK!",
    });
  }
  
});
