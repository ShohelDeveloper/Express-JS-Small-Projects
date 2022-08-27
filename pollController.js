const poll = require("./Poll")

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
console.log(poll)
   try{
    await poll.save()

    res.redirect('/polls')
   }catch(e){
    console.log(e);
   }        
}