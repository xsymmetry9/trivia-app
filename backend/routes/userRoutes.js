const {Router} = require("express");
const router = Router();
const User = require("../db/query.prisma");

router.get("/api/users", async (req, res) =>{
    try{

        const users = await User.getUsers();
        res.json(users);
    } catch (err){
        res.status(500).send("Server error");
    }
});

router.post("/api/users/createUser", async (req, res) =>{
    try{
        const {name} = req.body;
        const newUser = await User.createUser(name);
        res.json(newUser);
    } catch (err){
        res.status(500).json({status: false, message: "Failed to create a user"})
    }

});

router.post("/api/users/test/:id", async (req, res) =>{
    try{
        const{ id, userAnswer} = req.body;
        const newQuestion = await User.createAnswer(id, userAnswer);
        res.status(201).json(newQuestion);
    } catch (err){
        res.status(500).json({error: err.message});
    }
});

router.post("/api/users/answer", async(req, res) =>{
    try{
        const data = req.body;
        //Inputs the answer choice to the database
        await User.inputAnswer(data);
         //Keeps track of how many questions the user got right.
         data.isCorrect ? console.log("Correct"): console.log("Incorrect !")
        data.isCorrect ? await User.isCorrect(data) : await User.isWrong(data);

        res.json({status: true, message: "Successfully added"});
    } catch (err){
        res.status(500).json({status: false, message: err});
    }
});

router.post("/api/users/reset", async(req, res) =>{
    console.log("this is a reset");
    try{
        const data = req.body;
        await User.resetTest(data);
        res.json({status: true, message: "All questions have been successfully deleted"})
    } catch (err){
        res.status(500).json({status: false, message: err});
    }

});

router.get("/api/users/tests", async(req, res) =>{
    
    try{
        const data = req.body;
        res.json({status: true, data: data});
    } catch (err){
        res.status(500).json({status: false, message: err});
    }
})


router.get("/", async(req, res) =>{
    try{
        const users = await User.getUsers()
        res.json({status: true, data: users})
    } catch (err){
        res.status(500).json({status: false, message: err});
    }
})

module.exports = router;