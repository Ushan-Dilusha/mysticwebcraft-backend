const Community = require("../models/commiunity");

const addCommunity = async (req, res) => {
    try {
        const newCommunity = new Community({
            ...req.body,
        });
        console.log(newCommunity);
        const savedCommunity = await newCommunity.save();
        res.json(savedCommunity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOneCommunity = async (req, res) => {
    try {
        const id = req.params.id;
        const community = await Community.findById(id);
        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }
        res.json(community);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteCommunity = async (req, res) => {
    try {
        const id = req.params.id;
        await Community.findByIdAndDelete(id);
        res.json('Deleted community');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCommunity = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCommunity = {
            ...req.body,
        };

        await Community.findByIdAndUpdate(id, updatedCommunity);
        res.json(updatedCommunity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addCommunity,
    getAllCommunities,
    getOneCommunity,
    deleteCommunity,
    updateCommunity,
};
