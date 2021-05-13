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
              
                 
               
                
                
                if (lowercase === true && uppercase === true && special ===true && numeric === true){
  var chartype = ['lowercase','uppercase','special','numeric'];
  for (var i = 0; i < howmany ; i++) {
    var ctchoice
    ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
    console.log  (ctchoice);
    var choice
    if (ctchoice === 'lowercase') {
      choice = lowercases[Math.floor(Math.random() * lowercases.length)];
      console.log (choice);
    }
    else if (ctchoice === 'uppercase') {
      choice = uppercases[Math.floor(Math.random() * uppercases.length)];
      console.log (choice); 
    }
    else if (ctchoice === 'special') {
      choice = specials[Math.floor(Math.random() * specials.length)];
      console.log (choice);
    }
    else if (ctchoice === 'numeric') {
      choice = numerics[Math.floor(Math.random() * numerics.length)];
      console.log (choice);
    }
    password = password + choice 
  }
}

        if (lowercase === false && uppercase === true && special ===true && numeric === true){
          var chartype = ['uppercase','special','numeric'];

          for (var i = 0; i < howmany ; i++) {
            var ctchoice
            ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
            console.log  (ctchoice);
            var choice
            if (ctchoice === 'uppercase') {
              choice = uppercases[Math.floor(Math.random() * uppercases.length)];
              console.log (choice); 
            }
            else if (ctchoice === 'special') {
              choice = specials[Math.floor(Math.random() * specials.length)];
              console.log (choice);
            }
            else if (ctchoice === 'numeric') {
              choice = numerics[Math.floor(Math.random() * numerics.length)];
              console.log (choice);
            }
            password = password + choice 
          }
        }
        

                if (lowercase === true && uppercase === false && special ===true && numeric === true){
                  var chartype = ['lowercase','special','numeric'];

                  for (var i = 0; i < howmany ; i++) {
                    var ctchoice
                    ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                    console.log  (ctchoice);
                    var choice
                    if (ctchoice === 'lowercase') {
                      choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                      console.log (choice);
                    }
                    else if (ctchoice === 'special') {
                      choice = specials[Math.floor(Math.random() * specials.length)];
                      console.log (choice);
                    }
                    else if (ctchoice === 'numeric') {
                      choice = numerics[Math.floor(Math.random() * numerics.length)];
                      console.log (choice);
                    }
                    password = password + choice 
                  }
                }

                        if (lowercase === true && uppercase === true && special === false && numeric === true){
                          var chartype = ['lowercase','uppercase','numeric'];

                          for (var i = 0; i < howmany ; i++) {
                            var ctchoice
                            ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                            console.log  (ctchoice);
                            var choice
                            if (ctchoice === 'lowercase') {
                              choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                              console.log (choice);
                            }
                            else if (ctchoice === 'uppercase') {
                              choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                              console.log (choice); 
                            }
                            else if (ctchoice === 'numeric') {
                              choice = numerics[Math.floor(Math.random() * numerics.length)];
                              console.log (choice);
                            }
                            password = password + choice 
                          }
                        }

                                if (lowercase === true && uppercase === true && special ===true && numeric === false){
                                  var chartype = ['lowercase','uppercase','special'];

                                  for (var i = 0; i < howmany ; i++) {
                                    var ctchoice
                                    ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                    console.log  (ctchoice);
                                    var choice
                                    if (ctchoice === 'lowercase') {
                                      choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                      console.log (choice);
                                    }
                                    else if (ctchoice === 'uppercase') {
                                      choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                                      console.log (choice); 
                                    }
                                    else if (ctchoice === 'special') {
                                      choice = specials[Math.floor(Math.random() * specials.length)];
                                      console.log (choice);
                                    }
                                    password = password + choice 
                                  }
                                }

                                        if (lowercase === false && uppercase === false && special ===true && numeric === true){
                                          var chartype = ['special','numeric'];

                                          for (var i = 0; i < howmany ; i++) {
                                            var ctchoice
                                            ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                            console.log (ctchoice);
                                            var choice
                                            if (ctchoice === 'special') {
                                              choice = specials[Math.floor(Math.random() * specials.length)];
                                              console.log (choice);
                                            }
                                            else if (ctchoice === 'numeric') {
                                              choice = numerics[Math.floor(Math.random() * numerics.length)];
                                              console.log (choice);
                                            }
                                            password = password + choice 
                                          }
                                        }

                                                  if (lowercase === false && uppercase === true && special ===false && numeric === true){
                                                    var chartype = ['uppercase','numeric'];
                                                    for (var i = 0; i < howmany ; i++) {
                                                      var ctchoice
                                                      ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                                      console.log  (ctchoice);
                                                      var choice
                                                      if (ctchoice === 'uppercase') {
                                                        choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                                                        console.log (choice); 
                                                      }
                                                    
                                                      else if (ctchoice === 'numeric') {
                                                        choice = numerics[Math.floor(Math.random() * numerics.length)];
                                                        console.log (choice);
                                                      }
                                                      password = password + choice 
                                                    }
                                                  }

                                                          if (lowercase === false && uppercase === true && special ===true && numeric === false){
                                                            var chartype = ['uppercase','special'];
                                                            for (var i = 0; i < howmany ; i++) {
                                                              var ctchoice
                                                              ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                                              console.log  (ctchoice);
                                                              var choice
                                                              if (ctchoice === 'uppercase') {
                                                                choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                                                                console.log (choice); 
                                                              }
                                                              else if (ctchoice === 'special') {
                                                                choice = specials[Math.floor(Math.random() * specials.length)];
                                                                console.log (choice);
                                                              }                                                     
                                                              password = password + choice 
                                                            }
                                                          }

                                                if (lowercase === true && uppercase === false && special === false && numeric === true){
                                                  var chartype = ['lowercase','numeric'];
                                                  for (var i = 0; i < howmany ; i++) {
                                                    var ctchoice
                                                    ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                                    console.log  (ctchoice);
                                                    var choice
                                                    if (ctchoice === 'lowercase') {
                                                      choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                                      console.log (choice);
                                                    }                                                  
                                                    else if (ctchoice === 'numeric') {
                                                      choice = numerics[Math.floor(Math.random() * numerics.length)];
                                                      console.log (choice);
                                                    }
                                                    password = password + choice 
                                                  }
                                                }

                                        if (lowercase === true && uppercase === false && special === true && numeric === false){
                                          var chartype = ['lowercase','special'];
                                          for (var i = 0; i < howmany ; i++) {
                                            var ctchoice
                                            ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                            console.log  (ctchoice);
                                            var choice
                                            if (ctchoice === 'lowercase') {
                                              choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                              console.log (choice);
                                            }                                           
                                            else if (ctchoice === 'special') {
                                              choice = specials[Math.floor(Math.random() * specials.length)];
                                              console.log (choice);
                                            }                                         
                                            password = password + choice 
                                          }
                                        }

                                  if (lowercase === true && uppercase === true && special === false && numeric === false){
                                    var chartype = ['lowercase','uppercase'];
                                    for (var i = 0; i < howmany ; i++) {
                                      var ctchoice
                                      ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                      console.log  (ctchoice);
                                      var choice
                                      if (ctchoice === 'lowercase') {
                                        choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                        console.log (choice);
                                      }
                                      else if (ctchoice === 'uppercase') {
                                        choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                                        console.log (choice); 
                                      }
                                      password = password + choice 
                                    }
                                  }

                            if (lowercase === true && uppercase === false && special === false && numeric === false){
                              var chartype = ['lowercase'];
                              for (var i = 0; i < howmany ; i++) {
                                var ctchoice
                                ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                                console.log  (ctchoice);
                                var choice
                                if (ctchoice === 'lowercase') {
                                  choice = lowercases[Math.floor(Math.random() * lowercases.length)];
                                  console.log (choice);
                                }
                                password = password + choice 
                              }
                            }

                      if (lowercase === false && uppercase === true && special ===false && numeric === false){
                        var chartype = ['uppercase'];
                        for (var i = 0; i < howmany ; i++) {
                          var ctchoice
                          ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                          console.log  (ctchoice);
                          var choice
                          if (ctchoice === 'uppercase') {
                            choice = uppercases[Math.floor(Math.random() * uppercases.length)];
                            console.log (choice); 
                          }
                          password = password + choice 
                        }
                      }

                if (lowercase === false && uppercase === false && special ===true && numeric === false){
                  var chartype = ['special'];
                  for (var i = 0; i < howmany ; i++) {
                    var ctchoice
                    ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
                    console.log  (ctchoice);
                    var choice
                    if (ctchoice === 'special') {
                      choice = specials[Math.floor(Math.random() * specials.length)];
                      console.log (choice);
                    }
                    password = password + choice 
                  }
                }

          if (lowercase === false && uppercase === false && special ===false && numeric === true){
            var chartype = ['numeric'];
            for (var i = 0; i < howmany ; i++) {
              var ctchoice
              ctchoice = chartype[Math.floor(Math.random() * chartype.length)];
              console.log  (ctchoice);
              var choice
              if (ctchoice === 'numeric') {
                choice = numerics[Math.floor(Math.random() * numerics.length)];
                console.log (choice);
              }
              password = password + choice 
            }
          }


 
var mypass =document.getElementById('password')
mypass.textContent = (password)
                        
console.log (password);
  return password;
                    
}
}
passwordgen ()
             