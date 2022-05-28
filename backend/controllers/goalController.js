//@description Get Goals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({message: "Get goals"})
}

//@description Set Goals
//@route POST /api/goals
//@access Private
const setGoal = (req, res) => {
    res.status(200).json({message: "Set goal"})
}

//@description Update Goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

//@description Delete Goal
//@route Delete /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}