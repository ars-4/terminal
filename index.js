let input = document.getElementById('input');
let btn = document.getElementById('btn');
let noded = document.getElementById('noded');
let user = document.getElementById('name');


user.addEventListener('keypress', (eve) => {
    if(eve.key == "Enter") {
        firstrun();
    }
});


let firstrun = () => {
    document.getElementById('user').innerHTML = document.getElementById('name').value;
    window.localStorage.setItem("User", document.getElementById('name').value);
    document.getElementById('before').style.display = 'none';
    document.getElementById('after').style.display = 'block';
    input.focus();
}


let appender = (_messege, _type) => {
    let p = document.createElement("p");
    p.innerHTML = _messege;
    p.style.color = _type;
    noded.appendChild(p);
    p.scrollIntoView();
}

appender("Sparrow OS [Version 10.0.19044.1645]");
appender("(c) Sparrow Corporation. 2022 All rights reserved.");

input.addEventListener('keypress', (eve) => {
    if(eve.key == "Enter") {
        btn.click();
    }
});

let enter = () => {
    appender('$ ' + document.getElementById('user').innerHTML + "@sparrowOS > " + input.value);
    inputVal(input.value);
    input.value = '';
}


let helpMsg = [
    ["help", "Prints This Help Message"],
    ["cls", "To Clear Current Screen"],
    ["update", "To Checkand Update Terminal"],
    ["time", "To Check Current Time"],
    ["--v", "Prints Current version for terminal"],
    ["----------", "-----------"],
    ["show warning", "Show a yellow color text"],
    ["show alert", "Show a red color text"],
    ["show success", "Show a green color text"],
    ["show verified", "Show a cyan color text"],
    ["----------", "-----------"],
    ["python --v", "Prints The current version of Python Installed"],
    ["node --v", "Prints the current node version installed"],
    ["----------", "-----------"],
    ["Other Commands Coming Soon ", " "]
]


let updateActions = [
    "Checking for updates",
    "Updates Pending",
    "Downloading Updates ....",
    "Installing Updates ...",
    "Updates Complete",
    "Welcome Back"
];

function updater(counter) {
    for(let i = 0; i<updateActions.length; i++) {
        setTimeout('appender(">> ' + updateActions[i] + '", "#00FFFF")', counter*i);
    }
}


let inputVal = (_messege) => {


    if(_messege == 'test') {
        appender(">> " + "<a href='"+ 'https://ars-7.herokuapp.com' +"'>Link</a>");
    }

    else if(_messege == 'show warning') {
        appender('>> ' + "This is a warning message!", "yellow");
    }

    else if (_messege == 'show alert') {
        appender('>> ' + "This is an alert message!", "red");
    }

    else if (_messege == 'show success') {
        appender('>> ' + "This is a success message!", "green");
    }

    else if (_messege == 'show verified') {
        appender('>> ' + "This is a verified message!", "#00ffff");
    }

    else if (_messege == '--v') {
        appender('>> ' + "You are using Sparrow OS TXS copyright 2022 all rights reserved")
    }

    else if (_messege == 'time') {
        let time = new Date();
        appender('>> ' + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    }

    else if (_messege == 'cls') {
        noded.innerHTML = '';
    }

    else if (_messege == 'help') {
        for(let i = 0; i< helpMsg.length; i++) {
            appender(">> "+ helpMsg[i][0] +" ------- " +  helpMsg[i][1], "#00ffff");
        }
    }

    // PACKAGES

    else if (_messege == 'python --v') {
        appender(">> Python 3.10.1");
    }

    else if (_messege == 'node --v') {
        appender(">> Node v14.18.1");
    }

    else if(_messege == 'update') {
        updater(3000);
    }

    else {
        appender(">> '" + _messege + "' is not an internal or external command", "yellow");
    }
}