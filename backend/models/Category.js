const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        category_image: {
            type: "string",
            required: true,
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model('Category', CategorySchema);