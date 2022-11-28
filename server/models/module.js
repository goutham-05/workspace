const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        data: {
            type: Array
        },
    },

);

const WorkspaceModule = mongoose.model('workspace', moduleSchema);

module.exports = WorkspaceModule;