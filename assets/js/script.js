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

    return window.location.assign("https://rodrigodadam.github.io/PP1/?#contact");

  } else {
    swal({
      title: "Thank you for your e-mail!",
      text: "We'll contact you as soon as possible",
      icon: "success",
      button: "OK!",
    });

    document.getElementById("form-name").value = '';
    document.getElementById("form-email").value = '';
    document.getElementById("form-subject").value = '';
    document.getElementById("form-text").value = '';

  }
  
});
