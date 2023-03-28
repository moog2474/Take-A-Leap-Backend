const { default: mongoose, Schema } = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
    {
        restaurantName: String,
        address: [
            {
                district: String,
                street: String,
                building: String,
                location: {
                    type: { type: String, default: "Point" },
                    coordinates: [Number]
                }
            }
        ],
        rating: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }],
        cuisineType: [String],
        menu: [{
            foodName: String,
            price: Number,
            categoryId: Schema.Types.ObjectId, ref: "category",
            ingredients: [String],

        }],
        socialAccount: [String],
        phone: Number,
        email: {
            type: String,
            unique: true
        },


    },
    {
        collection: 'Restaurants',
        timestamps: true
    }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
