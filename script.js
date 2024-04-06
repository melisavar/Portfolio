document.getElementById("dark").addEventListener("click", function(){
	document.body.style.backgroundColor = "#000000";
	document.body.style.color = "#000000";
});	

document.getElementById("light").addEventListener("click", function(){
	document.body.style.backgroundColor = "#FFFFFF";
	document.body.style.color = "#FFFFFF";
});

document.getElementById("renk").addEventListener("click", function(){
	document.body.style.backgroundColor = "pink";
	document.body.style.color = "pink";
});

const validateForm = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("number").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (age < 18) {
    alert("You must be at least 18 years old to submit this form.");
    return false;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return false;
  }

  if (message.trim() === "") {
    alert("Please enter a message.");
    return false;
  }

  return true;
};
