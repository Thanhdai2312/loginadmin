// lấy thông tin từ chỗ nhập
var username = document.getElementById("username");
var password = document.getElementById("password");
var login = document.getElementById("login");

// chỗ này t dịnh dạng cứng 
var defaultUsers = {
    "phanthanhdai": "12345678",
    "vovanluan": "12345678",
    "huynhminhquan": "12345678"
};

// đây là chỗ nhấn cái nút login
login.addEventListener("click", function() {
// Validate the username and password
    var enteredUsername = username.value;
    var enteredPassword = password.value;

    if (defaultUsers.hasOwnProperty(enteredUsername) && defaultUsers[enteredUsername] === enteredPassword) {
        
        alert("Welcome, " + enteredUsername + "!");
        window.location.href = ""; // chỗ này m thêm duong92 dẫn vào sau khi đáng nhập thành công
    } else {
        
        alert("Invalid username or password!");
        username.value = "";
        password.value = "";
    }
});
