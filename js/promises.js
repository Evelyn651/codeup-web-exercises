

function getUsersLastCommit(username) {

    let url =`https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json()
            .then( data => console.log(data[0].created_at) )
        )
}
getUsersLastCommit('fmendozaro').then( lastCommitDate => console.log('last commit date', lastCommitDate));
getUsersLastCommit('douglas-codeup').then( lastCommitDate => console.log('last commit date', lastCommitDate));
// later on...

const wait = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolved();
        }, milliseconds)
    })
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
