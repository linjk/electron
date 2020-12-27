function onclick_login() {
    // 向父窗口传递登录结果信息
    window.opener.postMessage('login success');
}