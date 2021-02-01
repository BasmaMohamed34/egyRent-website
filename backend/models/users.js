import Posts from './post';
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const usersSchema=new schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    photo:{
        type:String
    },
    notification:[
        {
            message:{
                type:String
            }
        }
    ],
    type:[
        {
            host:{
                type:Boolean
            },
            traveller:{
                type:Boolean
            }
        }
    ],
    posts:[
        {
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: Posts
            }
        }
    ],
    wishlist:[
        {
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: Posts
            }
        }
    ],
    upcoming:[
        {
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: Posts
            }
        }
    ],
    history:[
        {
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref: Posts
            }
        }
    ]
})

const User=mongoose.model('User',usersSchema);
module.exports=User;