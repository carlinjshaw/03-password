// Assignment code here
// Get references to the #generate element


var lowercases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specials = ['~','!','@','#','$','%','^','&','*','(',')','_','+',':',';','<','>','?','.'];
var numerics = ['1','2','3','4','5','6','7','8','9','0'];
var generateBtn = document.querySelector("#generate");


function passwordgen() {
  
  
  generateBtn.onclick = function(){
    
    var password = ""
                var howmany = window.prompt ("How many characters do you want in your password?");
                console.log (howmany);
                
                         if (8 > howmany) {
                           window.alert("Invalid number. Please choose a character length from 8 to 132 characters.")
                           return;
                         }
                         if (howmany > 132) {
                          window.alert("Invalid number. Please choose a character length from 8 to 132 characters.")
                          return;
                        }

                var lowercase = window.confirm ("Would you like lowercase letters in your password?");
                console.log (lowercase);
                
                var uppercase = window.confirm ("Would you like uppercase letters in your password?");
                console.log (uppercase);
                
                var special = window.confirm ("Would you like special characters in your password?");
                console.log (special);
                
                var numeric = window.confirm ("Would you like numbers in your password?");
                console.log (numeric);
              
                 
                // function randomgen() {
                for (var i = 0; i < howmany ; i++) {

                            var chartype = ['lowercase','uppercase','special','numeric'];

                                  // var ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                  // console.log (ctchoice);

                                  var ctchoice
ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
console.log  (ctchoice);
var choice

                                        if (lowercase === true && ctchoice === 'lowercase') {
                                          choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                          console.log (choice);
                                        }
                                        else if (uppercase === true && ctchoice === 'uppercase') {
                                          choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                                          console.log (choice); 
                                        }
                                        else if (special === true && ctchoice === 'special') {
                                          choice = specials[Math.floor(Math.random() * specials.length)];
                                          console.log (choice);
                                        }
                                        else if (numeric === true && ctchoice === 'numeric') {
                                          choice = numerics[Math.floor(Math.random() * numerics.length)];
                                          console.log (choice);
                                        }
                                        // console.log (lwchoice + upchoice + spchoice + nmchoice); 
password = password + choice 
console.log (password);
}


//                         }
// randomgen ()

              }
  
return password;
}
passwordgen ()
                         
              

                                   
                                   
                                  
                                  
                               




// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);