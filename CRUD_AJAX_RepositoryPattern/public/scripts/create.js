

$(document).ready(()=>{
        $("#createUserForm").submit(function(e){
            e.preventDefault();

            let name=$("#name").val();
            let contact=$("#contact").val();

            $.ajax({
                url:"/users",
                method:"POST",
                contentType:"application/json",
                data:JSON.stringify({
                    name:name,
                    contact:contact
                }),
                success:function(response){
                    alert(response.message);
                    $("#createUserForm")[0].reset();
                },
                error:function(err){
                    console.error(err);
                    alert("Error adding user");
                }
            });
        });
    });