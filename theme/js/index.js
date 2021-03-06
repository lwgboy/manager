$(function () {
    $('#login-btn').click(function () {
        // 登录校验
        var _validatePost = function(){
            var reg = /^[0-9]*$/;
            var $uid = $('#uid'),
                $password =  $('#password');

            //正则校验和非空校验
            if(!reg.test($uid.val())){
                layer.msg('请输入您的账号');
                return false;
            }
            if(!$password.val()){
                layer.msg('请输入您的密码');
                return false;
            }
            return true;
        };
        if(_validatePost()){
            $.ajax({
                type:'post',
                url:'/manager/jsp/login.jsp',
                data:{
                    uid: $('#uid').val(),
                    password: $('#password').val()
                },
                success:function (res) {
                    let resObj = $.parseJSON(res);
                    layer.msg(resObj.msg);
                    if(resObj.code === '1'){
                        document.cookie="uid="+$('#uid').val();
                        setTimeout(function () {
                            window.location.href = "/manager/page/main/index.html";
                        },2000);
                    }
                }
            });
        }
    });
});
