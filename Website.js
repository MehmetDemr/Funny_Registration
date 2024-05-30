var myMap = new Map();// Map to store username-password pairs

var special = ['!', ',', '*', '+', '-','^','#','/','<','>',';',':','@','€','ß','Æ','æ','_','|'];

var bool1=false;// Boolean flag for username special character check
var bool2=false;// Boolean flag for password special character check

function Sign() 
{
    var a = document.getElementById("username").value;//Get Username Input
    var b = document.getElementById("password").value;//Get Surname Input

    // Function to handle user registration
    if (myMap.has(a)) {
        window.alert("This username already exists. Please choose a different username.");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        return; // Stop further execution
    }
// Check if username contains special characters
    for (var i = 0; i < special.length; i++) 
    {
      if (a.includes(special[i])) 
      {
        bool1=true;
      }


    }

    // Check if password contains special characters

    for (var i = 0; i < special.length; i++) 
    {
      if (b.includes(special[i])) 
      {
        bool2=true;
      }

      
    }

    // Validation checks for empty inputs and minimum length
    if(a==""||b=="")
    {
        window.alert("You need to input username and password to register!")
        document.getElementById("username").value="";
        document.getElementById("password").value="";

    }
    else if (a.length < 8 && b.length < 8) 
    {
        window.alert("Your username and password must contain 8 characters!");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }
    else if (a.length < 8 ) 
    {
        window.alert("Your username must contain 8 characters!");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }
    else if (b.length < 8 ) 
    {
        window.alert("Your password must contain 8 characters!");
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

    // Check for special character conditions
    else if((bool1) &&(bool2))
    {
      window.alert("Your username and password cannot contain special characters!");
      document.getElementById("username").value="";
      document.getElementById("password").value="";
      bool1=false
      bool2=false

    }

    else if(bool1)
    {
      window.alert("Your username cannot contain special characters!");
      document.getElementById("username").value="";
      document.getElementById("password").value="";
      bool1=false
      bool2=false

    }

    else if(bool2)
    {
      window.alert("Your password cannot contain special characters!");
      document.getElementById("username").value="";
      document.getElementById("password").value="";
      bool1=false
      bool2=false

    }
        // If all checks pass, add username-password pair to map

    else
    {

        myMap.set(a, b);

        window.alert("Registration Successful!");

        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

}

// Function to handle user login

function Log() 
{
    var n = document.getElementById("username").value;
    var m = document.getElementById("password").value;
   
    
            // Check if entered password matches saved password

    if (myMap.has(n)) 
    {
        var savedPassword = myMap.get(n);
        

        
        if (savedPassword === m) 
        {
            window.alert("Login Successfull!");
    
        } 
        else 
        {
            window.alert("Wrong Password!");
        }
    } 
    else 
    {
        window.alert("There is no such an user!");
    }
}

// Function to handle form submission

function handleSubmit() {
    Sign();
    Log();
    seePassword();
    return false; // Prevent default form submission
}






const pupils = document.querySelectorAll(".eye .pupil");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const eyeLids = document.querySelectorAll(".shut span");
const seeButton = document.getElementById('see');




function seePassword()
{
if(passwordInput.type=='password')
{
passwordInput.type='text';

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.remove('active');
  });
});

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.remove('active');
  });
});


}

else if(passwordInput.type!='password')
{
passwordInput.type='password';
passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.add('active');
  });
});

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.add('active');
  });
});

  
}
}



window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
   
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 65 + "px";
    var y = (e.pageY - rect.top) / 80 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});

passwordInput.addEventListener('click', () => {
  eyeLids.forEach(eyeLid => {
    eyeLid.classList.add('active');
  });
});

document.addEventListener('click', (e) => {
  if (!passwordInput.contains(e.target)) {
    eyeLids.forEach(eyeLid => {
      eyeLid.classList.remove('active');
    });
  }
});
usernameInput.addEventListener('keydown', (e) => {
  eyeLids.forEach(eyeLid => {
    if (e.keyCode === 9) { 
      eyeLid.classList.add('active');
    }
  });
}, false);

passwordInput.addEventListener('keydown', (e) => {
  eyeLids.forEach(eyeLid => {
    if (e.keyCode === 9) { 
      eyeLid.classList.remove('active');
    }
  });
}, false);