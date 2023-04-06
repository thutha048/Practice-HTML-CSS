
/* const modal = document.querySelector('.js-modal');
const openBtn= document.querySelector('.js-open');
const modalClose = document.querySelector('.js-close');
const modalContainer = document.querySelector('.js-modal-container');
//clicks anywhere outside of modal, close it
const loginBtn= document.querySelector('.js-login-form-btn');

function showLoginForm(){
    modal.classList.add('open');
}
function hideLoginForm(){
    modal.classList.remove('open');
}

openBtn.addEventListener('click', showLoginForm);
modalClose.addEventListener('click',hideLoginForm);

loginBtn.addEventListener('click',function showLoading(){
    loginBtn.classList.add('loading');
})*/

/* modal.addEventListener('click',hideLoginForm);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})*/

//user: admin; pw: admin
function openForm(){
    document.getElementById('modalForm').style.display = "block";
    
}

function hideForm(){
    document.getElementById('modalForm').style.display = "none";
}

var oldPassword= 'admin';
function validate(){
    const user= document.getElementById('user').value;
    const pass= document.getElementById('pass').value;
 
    if(user.trim().length !==0 || (user === "admin" || user===null))
        document.getElementById('errorUser').innerHTML="";

    if(user.trim().length === 0 ){
        document.getElementById('errorUser').innerHTML = "Hãy nhập tên tài khoản";
        return false;
    }
    
    if(user!== "admin" && user!==null ){
        document.getElementById('errorUser').innerHTML = "Tên tài khoản không đúng";
        return false;
    }

     
    if(pass.trim().length !==0 || (pass === oldPassword || pass===null))
        document.getElementById('errorPass').innerHTML="";

    if(pass.trim().length === 0 ){
        document.getElementById('errorPass').innerHTML = "Hãy nhập mật khẩu";
        return false;
    }

    if(pass !== oldPassword && pass!==null ){
        document.getElementById('errorPass').innerHTML = "Mật khẩu không đúng";
        return false;
    }
    document.getElementById('openForm').innerText="Đăng nhập thành công!";
    document.getElementById('openForm').style.background='violet';
    document.getElementById('close').click();
}

function loading(){
    document.getElementById('showLoading').innerHTML= 'Loading...';
    setTimeout(function(){
        validate();
        document.getElementById('showLoading').innerHTML='Login';
    },1000);
}

function forgot(){
    renew();
    document.getElementById('loginForm').style.display ='none';
    document.getElementById('save').style.display ='block'; 
    document.getElementById('nameForm').innerHTML ="Change your password"; 
}

function renew(){
    document.getElementById('user').value="";
    document.getElementById('pass').value="";
    document.getElementById('errorUser').innerHTML="";
    document.getElementById('errorPass').innerHTML="";
    document.getElementById('oldPass').value="";
    document.getElementById('newPass').value="";
    document.getElementById('errorOldPass').innerHTML="";
    document.getElementById('errorNewPass').innerHTML="";
    document.getElementById('success').innerHTML="";
}

function back(){
    renew();
    document.getElementById('save').style.display ='none';
    document.getElementById('loginForm').style.display ='block'; 
    document.getElementById('nameForm').innerHTML ="Member Login"; 
}

function validateNew(){
    const oldPass = document.getElementById('oldPass').value;
    const newPass = document.getElementById('newPass').value;

    if(oldPass.trim().length !==0 || oldPass === oldPassword)
        document.getElementById('errorOldPass').innerHTML="";

    if(oldPass.trim().length == 0){
        document.getElementById('errorOldPass').innerHTML="Nhập mật khẩu cũ ";
        return false;
    }
    if(oldPass !== oldPassword){
        document.getElementById('errorOldPass').innerHTML= "Mật khẩu không đúng";
        return false;
    }

    if(newPass.trim().length !==0 || newPass !== oldPass)
        document.getElementById('errorNewPass').innerHTML="";

    if(newPass.trim().length ===0){
        document.getElementById('errorNewPass').innerHTML= "Nhập mật khẩu mới";
        return false;
    }

    if(newPass === oldPass){
        document.getElementById('errorNewPass').innerHTML="Mật khẩu mới phải khác mật khẩu cũ";
        return false;
    }

    oldPassword= newPass;
    document.getElementById('nameForm').innerHTML ="Member Login"; 
    document.getElementById('success').innerHTML="Đổi mật khẩu thành công";
    document.getElementById('loginForm').style.display="block";
    document.getElementById('save').style.display="none";
}
