$(document).ready(() => {

    console.log("document is ready")
    $("#showSpecificUser").click((e) => {
        e.preventDefault();

        console.log("button clicked");  
        let userId = $("#userId").val();
        
        if (!userId) {
            alert("Please enter User ID");
            return;
        }

        $.ajax({
            url: `/getSpecificUser/${userId}`, 
            method: "GET",
            success: function (user) {
                let table = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.contact}</td>
                    </tr>
                `;

                $("#userTable").html(table);
            },
            error: function (err) {
                console.error(err);
                alert("User not found");
                $("#userTable").html(""); // clear previous data
            }
        });
    });

});
