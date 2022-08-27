const Poll = require("./Poll")

exports.createPollGetController = (req,res,next)=> {
    res.render('create')
}

exports.createPollPostController = async (req,res,next) =>{
    let {title,description,options} = req.body

   options = options.map(opt =>{
    return{
        name:opt,
        vote:0
    }
   })

   let poll = new Poll({
   
    title,
    description,
    options
   })

   try{
    await poll.save()

    res.redirect('/polls')
   }catch(e){
    console.log(e);
   }        
}

exports.getAllPolls = async (req,res) => {
    try{
        let polls = await Poll.find()
        res.render('polls',{polls})
    }catch(e) {
        conosle.log(e)
    }
}

exports.viewPollGetController = async(req,res) => {
    let id = req.params.id
    console.log(id)

    try{
        let poll = await Poll.findById(id)
        res.render('viewPoll', {poll})
    }catch(e) {
        conosle.log(e)
    }
}