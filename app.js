import{
    app,
    auth,
     signInWithEmailAndPassword
}from"firase.mjs"
// var login_fill_condition = true;

var email = document.getElementById("login_email");
var password =document.getElementById("login_password");
var btn = document.getElementById("btn2")

btn.addEventListener("click",function () {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("hellow");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email.value, password.value)
//   .then(async(userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// var sing_fill_condition = true;



            


    


  // var name1 = localStorage.getItem("email");
    // var name2 = localStorage.getItem("password");
    
    // 
    // };
    // setTimeout(() => {
    //                window.location.href = `https://atif851.github.io/Tic-Tac-Toe-Game/`;
    //              }, 2000);
    // //  else{
    //  alert("sorry sir")
    //  }