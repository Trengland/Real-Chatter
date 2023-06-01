const { Schema, model, Types } = require('mongoose');

const { formatDate } = require('../utils/moment');
const now = new Date(); // or any other Date object
const formattedDate = formatDate(now);


const ReactionSchema = new Schema(

    {
        // set custom id to avoid confusion with parent thought _id
        reactionId: {
            type: Schema.Types.ObjectId,
            // default: () => new Types.ObjectId(),
            default: new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            trim: true,
            // 280 character maximum
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     // use getter method to format timestamp on query
        //     get: (createdAtVal) => dateFormat(createdAtVal),
        // },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter method to format timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            // must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // use getter method to format timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal),
        },

        username: {
            type: String,
            required: true,
            trim: true,
        },
        // use ReactionSchema to validate data for a reaction
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// get total count of reactions and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}
);

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
