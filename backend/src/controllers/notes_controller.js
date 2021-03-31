const notesCtrl = {};

const mNotes = require("../models/mNotes");

    notesCtrl.getNotes= async (req,res)=>{
        
        const notes = await mNotes.find();
        res.json(notes);
    }

    notesCtrl.createrNotes = async (req, res) => {
        const { title, content, date, author } = req.body;
            console.log(req.body);
        const newNote = new mNotes({ title, content, date, author });
        console.log(newNote);
        await newNote.save();
        res.json('New Note added');
    };

    notesCtrl.deleteNotes = async (req,res)=>{
        await mNotes.findByIdAndDelete(req.params.id);
        res.json({message:"DELETE Request"})
    }
    
    notesCtrl.updateNotes = async (req,res) => {
        const { title, content, date, author }=req.body;
        await mNotes.findOneAndUpdate(req.params.id, { title, content, date, author } );
        console.log(mNotes);
        res.json({message:"PUT Request"})
    }
    notesCtrl.getNote = async (req,res) => {
    const note = await mNotes.findById(req.params.id);
    console.log("esta es note del BACK:", note);
        res.json({note: "GeT Request"}) 
    }
module.exports=notesCtrl;