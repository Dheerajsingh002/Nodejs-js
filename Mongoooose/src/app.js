const mongoose=require('moongose');
mongoose.connect('mongodb://localhost:27017//ttchannel').then(()=>console.log("COnnection sucessfully")).catch((e)=>console.log(e));

const DocumrntType=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    }

}

);
const playlist=new mongoose.model('Playlist',DocumrntType);

