$(document).ready(()=>{
    $("#deleteUserForm").submit(function(e){
        e.preventDefault();

        let id=$("#delete").val();

        $.ajax({
            url:`/delete/${id}`,
            method:"DELETE",
            contentType:"application/json",
            data:JSON.stringify({id:id}),
            success:function(response){
                alert(response.message);
                $("#deleteUserForm")[0].reset();
            },
            error:function(err){
                console.error(err);
                alert("Error Deleting User")
            }
            
        });
    });
});
