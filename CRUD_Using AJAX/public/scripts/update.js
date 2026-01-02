$(document).ready(()=>{
    $("#updateRecord").submit(()=>{
        let id=$("#id").val();
        let name=$("#name").val();
        let contact=$("#contact").val();

        $.ajax({
            url:`/updateRecord/${id}`,
            method:"PUT",
            contentType:"application/json",
            data:JSON.stringify({name:name,contact:contact}),
            success:function(response){
                alert(response.message);
                $("#updateRecord")[0].reset();
            },
            error:function(err){
                console.error(err);
                alert("Error updating user");
            }
        })
    })
})