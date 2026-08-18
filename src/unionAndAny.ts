//Union:
let bountyCount: Number | String = '1M'
let apiRequest: 'pending' | 'success' | 'error' = 'pending'

let airplaneSeat: 'asile' | 'window' | 'middle' = 'window'

airplaneSeat = 'asile'

let scores = ['12', '109', '82', '87']
let currentScore: String | undefined;

for (let score of scores) {
    if (score === '82') {
        currentScore = score
        break
    }

    currentScore = '58'
}

console.log(currentScore)