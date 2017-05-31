jQuery("#submit").click(function() {
    var c = $.trim($("#fullName").val()),
        b = $.trim($("#phone").val()),
        e = $.trim($("#companyname").val()),
        jj = $.trim($("#message").val()),
        d = $("#email").val();
    var a = 0;
    $(".error").removeClass("error");
    if ($("#validation").val() != "") {} else {
        if (c == "") {
            $("#fullName").addClass("error");
            a++
        }
        if (b != "") {
            if (!b.replace(/ /g,"").replace(/\+/g, "").replace(/-/g, "").isNumber()) {
                $("#phone").addClass("error");
                a++
            } else {
                if (b.length < 9) {
                    $("#phone").addClass("error");
                    a++
                }
            }
        } else {
            $("#phone").addClass("error");
            a++
        }
        if (d == "") {
            $("#email").addClass("error");
            a++
        }
        if (d != "") {
            if (!isValidEmailAddress(d)) {
                $("#email").addClass("error");
                a++
            }
        }
        if (a == 0) {
            saveData({
                fullname: c,
                email: d,
                phone: b,
                companyname: e,
                message: jj
            })
        }
    }
});
var saveData = function(a) {
    var b = {
        method: "saveData",
        fullname: a.fullname,
        email: a.email,
        phone: a.phone,
        companyname: a.companyname,
        message: a.message
    };
    $.ajax({
        url: "server/popupdatasave.php",
        dataType: "json",
        type: "post",
        data: b
    }).done(function(c) {
		$('.contactSuccessMsg').show();
        $("#fullName").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#companyname").val("");
        $("#message").val("");
        $('.close').click(function(){ $('.contactSuccessMsg').hide(); });
    }).fail(function() {
        console.log("fail")
    })
};
String.prototype.isNumber = function() {
    return /^\d+$/.test(this)
};

function isValidEmailAddress(b) {
    var a = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return a.test(b)
};
