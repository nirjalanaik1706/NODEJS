$(document).ready(() => {

    console.log("document is ready")
    $("#getusername").click((e) => {
        e.preventDefault();

        console.log("button clicked");  
        let getname = $("#getname").val();

        $.ajax({
            url: `/getUserNameSP/${getname}`, 
            method: "GET",
            success: function (user) {
                let table = `
                    <tr>
                        <td>${user.userName}</td>
                        <td>${user.userContact}</td>
                    </tr>
                `;

                $("#userTable").html(table);
            },
            error: function (err) {
                console.error(err);
                alert("User not found");
                $("#userTable").html(""); 
            }
        });
    });

});
