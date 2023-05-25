$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the form inputs
      var name = $('#name').val();
      var dob = $('#dob').val();
      var gender = $('input[name="gender"]:checked').val();
      var email = $('#email').val();
      var address = $('#address').val();
      var school = $('#school').val();
      var department = $('#department').val();
      var course = $('#course').val();
      var mobile = $('#mobile').val();

      // Validate each field
      if (name === "") {
        alert("Please enter your name.");
        return false;
      }

      if (dob === "") {
        alert("Please enter your date of birth.");
        return false;
      }

      if (!gender) {
        alert("Please select your gender.");
        return false;
      }

      if (email === "") {
        alert("Please enter your email.");
        return false;
      }

      if (address === "") {
        alert("Please enter your address.");
        return false;
      }

      if (school === "") {
        alert("Please select your school.");
        return false;
      }

      if (department === "") {
        alert("Please select your department.");
        return false;
      }

      if (course === "") {
        alert("Please select your course.");
        return false;
      }

      if (mobile === "") {
        alert("Please enter your mobile number.");
        return false;
      }

      // Validation passed, submit the form
      this.submit();
    });
  });

  $(document).ready(function() {
    $("#login-form").submit(function(event) {
      event.preventDefault(); // Prevent form submission

      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();

      if (name === "") {
        alert("Please enter your name.");
        return;
      }

      if (email === "") {
        alert("Please enter your email.");
        return;
      }

      if (password === "") {
        alert("Please enter your password.");
        return;
      }
    });
    });