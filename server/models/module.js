const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema(
    {
        workSpace: {
            type: String,
        },
        data: {
            type: Array
        },
    },

);

const WorkspaceModule = mongoose.model('workspace', moduleSchema);

module.exports = WorkspaceModule;