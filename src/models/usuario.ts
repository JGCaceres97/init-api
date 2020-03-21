import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUsuario extends Document {
  Email: string;
  Password: string;
}

const usuarioSchema = new Schema(
  {
    Email: {
      trim: true,
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      match: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}/
    },
    Password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'Usuarios'
  }
);

usuarioSchema.pre<IUsuario>('save', async function(next) {
  if (!this.isModified('Password')) return next();

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(this.Password, salt);

  this.Password = hash;
  next();
});

usuarioSchema.methods.comparePassword = async function(Password: string): Promise<boolean> {
  return await bcrypt.compare(Password, this.Password);
};

export default model<IUsuario>('Usuario', usuarioSchema);
