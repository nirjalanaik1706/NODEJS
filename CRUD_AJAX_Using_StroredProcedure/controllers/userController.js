module.exports = function userController(userService) {
    return {

        addUser: (req, res) => {
            const { name, contact } = req.body;

            userService.addUser(name, contact, (err, result) => {
                if (err) return res.status(500).json(err);

                res.json({
                    message: "User added successfully",
                    id: result.insertId
                });
                console.log("Data Inserted...");
            });
        },

        deleteUser: (req, res) => {
            const id = req.params.id;

            userService.removeUser(id, (err, result) => {
                if (err) return res.status(500).json(err);

                res.json({ message: "Record Deleted successfully...!" });
                console.log("Data deleted...");
            });
        },

        getUsers: (req, res) => {
            userService.getAllUsers((err, result) => {
                if (err) return res.status(500).json(err);

                res.json(result);
                console.log("Records fetched...");
            });
        },

        updateUser: (req, res) => {
            const { name, contact } = req.body;
            const id = req.params.id;

            userService.editUser(id, name, contact, (err, result) => {
                if (err) return res.status(500).json(err);
                res.json({ message: "Record Updated Successfully...!" });
                console.log("Record updated...");
            });
        },

        getSpecificUser: (req, res) => {
            const id = req.params.id;
            userService.getparticularUser(id, (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }
                res.json(result[0]);
                console.log("Specific Record Fetched...!");
            });
        },

        getUserNameSP: (req, res) => {
            const id = req.params.id;
            userService.getUserNameSP(id, (err, result) => {
                if (err) return res.status(500).json(err);
                if (!result) {
                    return res.status(404).json({ message: "User not found" });
                }
                res.json(result);
            });
        },
        UpdateUserDetailsSimple:(req,res)=>{
            const id=req.params.id;
            const { name, contact } = req.body;
            if(!name &&!contact){
                return res.status(400).json({message:"Name Or Contact is required"});
            }
            userService.UpdateUserDetailsSimpleSP(id,name,contact,(err,result)=>{
                if(err) return res.status(500).json(err);
                if(!result || !result.oldName){
                    return res.status(404).json({message:"No Record Found"});
                }
                res.json({
                    message:"User updated successfully",
                    oldValues:result
                });
            });
        }
    }
}