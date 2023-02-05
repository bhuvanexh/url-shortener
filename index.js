const input = document.querySelector('#ip');
const button = document.querySelector('#shorten');
const mainDiv = document.querySelector('.results');
const small = document.querySelector('.small');

// let newDiv = document.createElement("div");
// newDiv.classList.add('divL');
// let newSpan1 = document.createElement("span");
// let newSpan2 = document.createElement("span");
// newSpan2.classList.add('text-grayishV');
// let newBtn = document.createElement("button");
// newBtn.classList.add('btn2');
// newBtn.innerText = 'Copy';

const cb = navigator.clipboard;

button.addEventListener('click', () => {
    console.log('hello');

    if (input.value.length < 5) {
        small.classList.add('errorS')
        input.classList.add('errorI')
    } else {
        small.classList.remove('errorS')
        input.classList.remove('errorI')

        axios.get(`https://api.shrtco.de/v2/shorten?url=${input.value}`).then((res) => {
            console.log(res.data.result.full_short_link);
            let newDiv = document.createElement("div");
            newDiv.classList.add('divL');
            let newSpan1 = document.createElement("span");
            let newSpan2 = document.createElement("span");
            newSpan2.classList.add('text-grayishV');
            let newBtn = document.createElement("button");
            newBtn.classList.add('btn2');
            newBtn.innerText = 'Copy';
            newSpan1.innerText = `${input.value}`
            newSpan2.innerText = `${res.data.result.full_short_link}`;

            let div = mainDiv.appendChild(newDiv);
            div.appendChild(newSpan1);
            div.appendChild(newSpan2);
            div.appendChild(newBtn);

            newBtn.addEventListener('click', () => {
                cb.writeText(newSpan2.innerText).then(() => {
                    newBtn.innerText = 'copied'
                })
            })
        })
            .catch((e) => {
                small.classList.add('errorS');
                input.classList.add('errorI');
                small.innerText = 'something went wrong , try again!';
                console.log(e);
            })
    }


})





const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');
const dropdown = document.querySelector('.dropdown');

const addRem = () => {
    ham.classList.toggle('visible');
    cross.classList.toggle('visible');
    dropdown.classList.toggle('visible');
}

ham.addEventListener('click', addRem)
cross.addEventListener('click', addRem)
