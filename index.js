function calculateAge() {
    var dobInput = document.getElementById("dob");
    var dob = new Date(dobInput.value);
    var today = new Date();
  
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your age is: " + age;
  }
  