let userInfo;

class UserInfo {
    firstName = "";
    lastName = "";
    constructor() {
        
    }
    printName = function() {
        console.log(this.firstName + "," + this.lastName);
    }
    
}

export function getUserInfo() {
    if (userInfo == null) {
        userInfo = new UserInfo();
        userInfo = Object.assign(userInfo, JSON.parse(localStorage.getItem("user_info")));
    }
    return userInfo;   
}

export function setUserInfo(arg) {
    userInfo = arg;
    localStorage.setItem("user_info", JSON.stringify(arg))
}

// let account;

// export function getAccount() {
//     if (account) {
//         return Promise.resolve(account);
//     } 
//     return window.tronLink.send("eth_requestAccounts", []);
// }