jQuery("#joinTbeat_submit").click(function() {
    var c = $.trim($("#FName").val()),
        e = $.trim($("#jdb_phone").val()),
        d = $.trim($("#jdb_companyname").val()),
        b = $("#Email_id").val();
    var a = 0;
    $(".error").removeClass("error");
    if ($("#joinTbeat_validation").val() != "") {} else {
        if (c == "") {
            $("#FName").addClass("error");
            a++
        }
        if (e != "") {
            if (!e.replace(/ /g,"").replace(/\+/g, "").replace(/-/g, "").isNumber()) {
                $("#jdb_phone").addClass("error");
								console.log("Ew");
                a++
            } else {
                if (e.length < 9) {
									console.log("eee")
                    $("#jdb_phone").addClass("error");
                    a++
                }
            }
        } else {
            $("#jdb_phone").addClass("error");
            a++
        }
        if (b == "") {
            $("#Email_id").addClass("error");
            a++
        }
        if (b != "") {
            if (!isValidEmailAddress(b)) {
                $("#Email_id").addClass("error");
                a++
            }
        }
        if (a == 0) {
            JoinTheBeatdatasave({
                FName: c,
                Email_id: b,
                jdb_phone: e,
                jdb_companyname: d,
            })
        }
    }
});
var JoinTheBeatdatasave = function(a) {
    var b = {
        method: "JoinTheBeatdatasave",
        FName: a.FName,
        Email_id: a.Email_id,
        jdb_phone: a.jdb_phone,
        jdb_companyname: a.jdb_companyname,
    };
    $.ajax({
        url: "server/JoinTheBeatdatasave.php",
        dataType: "json",
        type: "post",
        data: b
    }).done(function(c) {
        console.log("send");
				$('.suceesMsg').show();
        $("#FName").val("");
        $("#Email_id").val("");
        $("#jdb_phone").val("");
        $("#jdb_companyname").val("")
				$('.close').click(function() {
            $('.suceesMsg').hide();
        });
				
        window.location.href = "tnx.html?Lead=true";
        
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