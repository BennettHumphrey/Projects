






const beginning = () => {
    const num = (Math.floor(Math.random()*5));
    switch (num) {
        case 0:
            return 'The massive';
        case 1:
            return 'The tiny';
        case 2:
            return 'The fat';
        case 3:
            return 'The fugly';
        case 4:
            return 'The anorexic';
    }
}

const middle = () => {
    const num = (Math.floor(Math.random()*5));
    switch (num) {
        case 0:
            return 'cat';
        case 1:
            return 'person';
        case 2:
            return 'llama';
        case 3:
            return 'monkey';
        case 4:
            return 'dog';
    }
}

const end = () => {
    const num = (Math.floor(Math.random()*5));
    switch (num) {
        case 0:
            return 'fled the scene!';
        case 1:
            return 'died.';
        case 2:
            return 'ate way too much!';
        case 3:
            return 'jumped into a lake!';
        case 4:
            return 'got married!';
    }
}

const randomSentence = () => (`${beginning()} ${middle()} ${end()}`)



console.log(beginning())
console.log(middle())
console.log(end())

const runRandomSentence = n => {
    for (let i = 0; i < n; i++) {
        console.log(randomSentence())
    }
}
console.log(runRandomSentence(10))





