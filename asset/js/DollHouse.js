jQuery("#DhSubmit").click(function() {
    var c = $.trim($("#DhFName").val()),
        b = $("#DhEmailId").val(),
        e = $.trim($("#DhPhone").val()),
        jj = $.trim($("#DhMessage").val()),
        d = $.trim($("#DhCompanyname").val());
    var a = 0;
    $(".error").removeClass("error");
    if ($("#DhValidation").val() != "") {} else {
        if (c == "") {
            $("#DhFName").addClass("error");
            a++
        }
        if (e != "") {
            if (!e.replace(/ /g,"").replace(/\+/g, "").replace(/-/g, "").isNumber()) {
                $("#DhPhone").addClass("error");
                a++
            } else {
                if (e.length < 9) {
                    $("#DhPhone").addClass("error");
                    a++
                }
            }
        } else {
            $("#DhPhone").addClass("error");
            a++
        }
        if (b == "") {
            $("#DhEmailId").addClass("error");
            a++
        }
        if (b != "") {
            if (!isValidEmailAddress(b)) {
                $("#DhEmailId").addClass("error");
                a++
            }
        }
        if (a == 0) {
            Dhdatasave({
                DhFName: c,
                DhEmailId: b,
                DhPhone: e,
                DhCompanyname: d,
                DhMessage: jj
            })
        }
    }
});
var Dhdatasave = function(a) {
    var b = {
        method: "Dhdatasave",
        DhFName: a.DhFName,
        DhEmailId: a.DhEmailId,
        DhPhone: a.DhPhone,
        DhCompanyname: a.DhCompanyname,
        DhMessage: a.DhMessage
    };
    $.ajax({
        url: "server/Dhdatasave.php",
        dataType: "json",
        type: "post",
        data: b
    }).done(function(c) {
        $('.suceesMsg').show();
        $("#DhFName").val("");
        $("#DhEmailId").val("");
        $("#DhPhone").val("");
        $("#DhCompanyname").val("");
        $("#DhMessage").val("");
        $('.close').click(function() {
            $('.suceesMsg').hide();
        });
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
