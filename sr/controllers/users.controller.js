const getAllUsers =(req,res)=>res.status(200).send('Get/users succeeded');

const createUser =(req,res)=>res.status(201).send('Post/users succeeded');

const deleteUser =(req,res)=>res.status(204).send();

module.exports={getAllUsers,createUser,deleteUser}