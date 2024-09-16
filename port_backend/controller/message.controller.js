const Contact = require('../models/message.model');

const addMessage = async (req,res) =>{
    try{
        const  {fullName, email, message} = req.body;
    
    const contact = new Contact({
        fullName,
        email,
        message
    });
    await contact.save();
    res.status(201).json({message:"Messsage is added successfully"});

    }catch(err){
        console.error("Error During signup:",err.message);
        res.status(500).json({message: "Some internal error occureed",error:err.message});
    }
};

const getAllMessages = async(req,res)=>{
    try{
        const data = await Contact.find();
        res.status(200).json(data);
    }catch (error) {
        res.status(500).json({message:"internal Error occured"})
    }
}

module.exports ={addMessage,getAllMessages};