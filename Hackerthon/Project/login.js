function login() {
    const form = document.login_form;
    const chkUsername = checkValidUsername(form);
    const chkPhoneNumber = checkValidPhoneNumber(form);
    const chkPw = checkValidPassword(form);
    const chkPw2 = checkValidPassword2(form);

    if (chkUsername) {
        document.getElementById('alert_username').innerText = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }

    if (chkPhoneNumber) {
        document.getElementById('alert_phone_number').innerText = "";
        form.phonenumber.style.border = '2px solid';
        form.phonenumber.style.borderColor = '#00D000';
    } else {
        form.phonenumber.style.border = '2px solid';
        form.phonenumber.style.borderColor = '#FF0000';
        document.getElementById('alert_phone_number').style.color = '#FF0000';
    }

    if (chkPw) {
        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }
    if (chkPw2) {
        document.getElementById('alert_password2').innerText = "";
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#00D000';
    } else {
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#FF0000';
        document.getElementById('alert_password2').style.color = '#FF0000';
    }

    if (chkUsername && chkEmail && chkPw && chkPw2) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}

function checkValidUsername(form) {
    if (form.username.value == "") {
        document.getElementById('alert_username').innerText = "이름을 입력해주세요.";
        //form.username.focus();
        return false;
    }

    return true;
}

function checkValidPhoneNumber(form) {
    if (form.phonenumber.value == "") {
        document.getElementById('alert_phone_number').innerText = "전화번호를 입력해주세요.";
        //form.email.focus();
        return false;
    }

    const exptext = /^[0-9]+/;

    // "ㅁ@ㅁ.ㅁ" 이메일 형식 검사.
    if (exptext.test(form.phonenumber.value) === false) {
        document.getElementById('alert_phone_number').innerText = "전화번호가 유효하지 않습니다.";
        //form.email.select();
        return false;
    }

    return true;
}

function checkValidPassword(form) {
    if (form.password.value == "") {
        document.getElementById('alert_password').innerText = "비밀번호를 입력해주세요.";
        //form.password.focus();
        return false;
    }

    const pw = form.password.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "비밀번호는 6자 이상이어야 합니다.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "비밀번호는 공백을 포함하지 않게 해주세요.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "비밀번호가 유효하지 않습니다.";
        return false;
    }

    return true;
}

function checkValidPassword2(form) {
    if (form.password2.value == "") {
        document.getElementById('alert_password2').innerText = "비밀번호를 재입력 해주세요.";
        //form.password.focus();
        return false;
    }

    if (form.password.value !== form.password2.value) {
        document.getElementById('alert_password2').innerText = "비밀번호가 일치하지 않습니다.";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
        return false;
    }

    return true;
}