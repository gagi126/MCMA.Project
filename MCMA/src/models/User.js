import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;
import Rol from './Rol';

 
const userSchema = new Schema({
    user_id: String,
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: String,
    role: [{ type: Schema.ObjectId, ref: Rol}]
})

export default model("user", userSchema);