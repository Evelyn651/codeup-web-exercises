const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//2
let userLanguages = users.filter(function (user) {
    //console.log(user.languages.length); //gives all the amounts of languages for each object.
    return user.languages.length >= 3;
});
console.log(userLanguages); //gives only the ones with three or more languages

//3
const userEmails = users.map(user => user.email);
console.log(userEmails);

//4
const userYears = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);

console.log('Total years: ', userYears);

//5
const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');
console.log(longestEmail);

//6
const everyone = users.reduce((names, user) => {
    if(names !== ''){
        names += ', '
    }
    return names + user.name;
}, '');

console.log(`Your instructors are: ${everyone}`);
console.log('using join', users.map(user => user.name).join(', '));
