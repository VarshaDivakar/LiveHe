export const alphaStringValidation = (inputtxt)=>{
    var letters = /^[A-Za-z]+$/;
   if(inputtxt != '' && inputtxt.match(letters))
      return true;
   else 
     return false;
     
}
export const emailValidation = (inputtxt)=>{
   var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputtxt != '' && inputtxt.match(letters))
      return true;
   else 
     return false; 
}
export const contactNumVadation = (inputtxt)=>{
    var letters = /^\d{10}$/;
   if(inputtxt != '' && inputtxt.match(letters))
      return true;
   else 
     return false; 
}
export const passwordValidation = (inputtxt) =>{
    if(inputtxt != '')
    return true
    else 
    return false
}
// const Validation = {emailValidation,alphaStringValidation};

// export default Validation;