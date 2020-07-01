  function validate()
{
    var fname=document.form.fname.value;
    var lname=document.form.lname.value;
    var phone=document.form.phone.value;
    var email=document.form.email.value;
    var password=document.form.password.value;
    var pos=email.search('.com');
    var pos1=email.search('@');
    if(fname==null || fname==="")
    {
       document.getElementById('fn').innerHTML="!First name can't be empty";
        return false;
    }
    else if(lname==null || lname==="")
    {
        document.getElementById('ln').innerHTML="!Last name can't be empty";
        return false;
    }
    else if(phone.length!=10)
    {
        document.getElementById('pn').innerHTML="!Phone number should be exactly 10 digits";
        return false;
    }
    else if(email==null || email==="")
    {
        document.getElementById('em').innerHTML="!Email can't be empty";
        return false;
    }
    else if(pos==-1)
    {
        document.getElementById('em').innerHTML='!Email should end with .com';
        return false;
    }
    else if(pos1==-1)
    {
        document.getElementById('em').innerHTML="!Email should contain @ symbol";
        return false;
    }
    else if(password.length<6)
    {
        document.getElementById('ps').innerHTML="!Password should contain atleast 6 characters";
        return false;
    }
    else{
        alert("Registration succesful");
        return true;
    }
}
    
