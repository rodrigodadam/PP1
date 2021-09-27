$("#submitBtn").click(function() {

  let name = $("#formName").val();
  let email = $("#formEmail").val();
  let subject = $("#formSubject").val();
  let message = $("#formText").val();

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
  
})
