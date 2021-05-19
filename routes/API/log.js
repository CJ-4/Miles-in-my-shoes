const express = require('express');
const router = express.Router();

const Logs = require('../../models/logs');

router.get('/test', (req, res) =>  res.send('log route testing'));

router.get('/', (req, res) => {
    Logs.find()
    .then(logs => res.json(logs))
    .catch(err => res.status(404).json({nologsfound: 'No Logs Found'}));
});

router.get('/:id', (req, res) => {
    Logs.findById(req.params.id)
    .then(logs => res.json(logs))
    .catch(err => res.status(404).json({nologsfound: 'No Logs Found'}));
});

router.post('/', (req, res) => {
    Logs.create(req.body)
    .then(logs => res.json({msg: 'Miles added successfully'}))
    .catch(err => res.status(404).json({nologsfound: 'Unable to add these miles'}));
});

router.put('/:id', (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body)
    .then(logs => res.json({msg: 'Updated successfully'}))
    .catch(err => res.status(404).json({nologsfound: 'Unable to update logs'}));
});

router.delete('/:id', (req, res) => {
    Logs.findByIdAndRemove(req.params.id, res.body)
    .then(logs => res.json({msg: 'Log entry deleted'}))
    .catch(err => res.status(404).json({nologsfound: 'No Such Log Found'}));
});


module.exports = router;