export default function posts(state = null, action) {
    console.log('cars list reducer',action)
    if (action.type === 'POSTS')
        return action.payload
console.log(action.type)
    return state
}