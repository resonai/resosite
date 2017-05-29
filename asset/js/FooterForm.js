jQuery("#cdn_submit").click(function() {
    var b = $.trim($("#cnd_FirstName").val()),
        d = $.trim($("#cdn_message").val()),
        c = $("#cnd_email").val();
    var a = 0;
    $(".error").removeClass("error");
    if ($("#validation").val() != "") {} else {
        if (b == "") {
            $("#cnd_FirstName").addClass("error");
            a++
        }
        if (c == "") {
            $("#cnd_email").addClass("error");
            a++
        }
        if (c != "") {
            if (!isValidEmailAddress(c)) {
                $("#cnd_email").addClass("error");
                a++
            }
        }
        if (a == 0) {
            saveCtnData({
                cnd_FirstName: b,
                cnd_email: c,
                cdn_message: d,
            })
        }
    }
});
var saveCtnData = function(a) {
    var b = {
        method: "saveCtnData",
        cnd_FirstName: a.cnd_FirstName,
        cnd_email: a.cnd_email,
        cdn_message: a.cdn_message,
    };
    $.ajax({
        url: "server/contactdatasave.php",
        dataType: "json",
        type: "post",
        data: b
    }).done(function(c) {
        //console.log("send");
        //window.location.href = "tnx.html?Lead=true";
				$('.suceesMsg').show();
        $("#cnd_FirstName").val("");
        $("#cnd_email").val("");
        $("#cdn_message").val("")
				$('.close').click(function(){ $('.suceesMsg').hide(); });
				
				
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