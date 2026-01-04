$(document).ready(()=>{
    $("#showUsers").click(()=>{
        $.ajax({
            url:`/getAllUsers`,
            method:"GET",
            success:function(users){
                let table=" ";
                users.forEach(user=>{
                    table+=`
                    <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.contact}</td>
                    <tr>
                    `;
                });
                $("#userTable").html(table);
            },
            error:function(err){
                console.error(err);
                alert("Error fetching users");
            }
        })
    })
})