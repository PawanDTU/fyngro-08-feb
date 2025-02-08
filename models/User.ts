import mongoose, { type Document, type Model, Schema } from "mongoose"
import bcrypt from "bcryptjs"

export interface IUser extends Document {
  name: string
  email: string
  password: string
  matchPassword(enteredPassword: string): Promise<boolean>
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  {
    timestamps: true,
  },
)

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User: Model<IUser> = mongoose.models.User || mongoose.model("User", UserSchema)

export default User

