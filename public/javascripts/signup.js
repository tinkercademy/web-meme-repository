function execSignup() {
    var username = $("#username").val();
    var pw = $("#password").val();
    var confirmPw = $("#confirmPassword").val();

    if (!username || !pw || !confirmPw) {
        $("#inputsBlank").modal();
    }

    if (pw !== confirmPw) {
        $("#somethingNoMatch").modal();
    } else {
        $.ajax({
            url: "/auth/signup",
            method: "PUT",
            data: {
                username: username,
                password: pw,
                confirmPassword: confirmPw
            },
            success: function(result) {
                if (result.includes("already exists")) {
                    $("#duplicateUser").modal();
                } else if (result.includes("match")) {
                    $("#somethingNoMatch").modal();
                } else {
                    $(".alert").removeAttr("hidden");
                    window.location.href = "/z/dash";
                }
            }
        })
    }

}

function runOnEnter(e) {
    if (e.keyCode === 13) {
        execSignup();
    }
}
