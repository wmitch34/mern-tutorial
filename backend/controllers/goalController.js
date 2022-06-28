// @desc get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
    res.status(200).json({message:'Get goals' })
}

// @desc set goals
// @route GET /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'set goals'})
}

// @desc update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}` })
}

// @desc delete goals
// @route GET /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}` })
}

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}