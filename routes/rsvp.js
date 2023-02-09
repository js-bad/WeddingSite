var router = require('express').Router()

const Rsvp = require('../models/RSVP');


router.post('/', async (req, res) => {
    const updateRSVP = await Rsvp.findOne({ _id: req.body._id });
    updateRSVP.guestName = req.body.guestName;
    updateRSVP.completed = req.body.completed;
    updateRSVP.isVaccinated = req.body.isVaccinated;
    updateRSVP.notes = req.body.notes;
    updateRSVP.attending = req.body.attending;

    var resObj;
    
    try {
        var doc = await updateRSVP.save();
        resObj = {
            message: `"${doc.guestName}" saved successfully`,
            content: doc
        } 
    }
    catch (err) {
        resObj = {
            message: err
        }
        res.status(500).json(resObj);
    }
    res.json(resObj);
});

router.get('/', async (req, res) => {
    try {
        const name = req.query.name;
        if (!name || name === 'undefined') throw 'Name not entered. Please enter name as it appears on invitation!';

        const requester = await Rsvp.findOne({ "guestName": new RegExp(`^${name}$`, 'i') });
        if (!requester) throw `'${name}' guest not found. It looks like you misspelled your name! Please try again and enter only your first and last name.`

        const fullGroup = await Rsvp.find({ groupID: requester.groupID });
    
        res.json(fullGroup);
    }
    catch (e) {
        res.status(500).json(e)
    }

});


router.post('/devguestentry', async (req, res) => {
    try {
        const body = req.body;

        await body.map(async group => {
            await group.guestNames.map( async guestName => {
                const isPlusOne = guestName.toUpperCase().replace(' ', '') === "PLUSONE"
                const name = isPlusOne
                    ? "(Placeholder)"
                    : guestName;

                const newRSVP = new Rsvp({
                    guestName: name,
                    groupID: group.groupID,
                    isPlusOne: isPlusOne
                });
                await newRSVP.save();
            })
        })

        res.send('wahoo');
    }
    catch (e){
        res.status(500).json(e);
    }
});



module.exports = router