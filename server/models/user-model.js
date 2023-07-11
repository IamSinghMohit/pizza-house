const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        googleId: { type: String, required: false },
        name: { type: String, required: [true, "Please provide a name"] },
        avatar: { type: String, required: false },
        email: { type: String, required: [true, "Please provide an Email"] },
        password: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) return next();

    // Random additional data
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(this.password, salt);

    // Replace the password with the hash
    this.password = hash;

    return next();
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password).catch(() => false);
};
module.exports = mongoose.model("User", userSchema);
