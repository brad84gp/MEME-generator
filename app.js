const submit = document.getElementById('submit')
const source = document.getElementById('src')
const topTxt = document.getElementById('top-text')
const bottomTxt = document.getElementById('bottom-text')
const newH1 = document.createElement('h1')
const newH2 = document.createElement('h2')
const anotherH1 = document.createElement('h1')
const anotherH2 = document.createElement('h2')
const left = document.getElementById('left')
const right = document.getElementById('right')
const firstMeme = document.getElementById('imageOne');
const secondMeme = document.getElementById('imageTwo');
const memeOne = document.getElementById('memeOne');
const memeTwo = document.getElementById('memeTwo')

let count = 0;
submit.addEventListener('click', function(e){
    e.preventDefault();
    const image =  source.value;
    if(count === 0){
        firstMeme.setAttribute('src', image);
        firstMeme.classList.add('image-specs')
        left.innerText = "First";
        newH1.innerText = topTxt.value;
        newH1.classList.add('h1-pos');
        newH2.innerText = bottomTxt.value;
        newH2.classList.add('h2-pos');
        memeOne.appendChild(newH1);
        memeOne.appendChild(newH2);
        source.value = "";
        topTxt.value = "";
        bottomTxt.value = "";
        count++;
    }else if(count === 1){
        secondMeme.setAttribute('src', image);
        secondMeme.classList.add('image-specs')
        right.innerText = "Second";
        anotherH1.innerText = topTxt.value;
        anotherH1.classList.add('h1-pos');
        anotherH2.innerText = bottomTxt.value;
        anotherH2.classList.add('h2-pos');
        memeTwo.appendChild(anotherH1);
        memeTwo.appendChild(anotherH2);
        source.value = "";
        topTxt.value = "";
        bottomTxt.value = "";
    }

})
        

const remove = document.getElementById('remove')
const remove2 = document.getElementById('remove2')

remove.addEventListener('click',function(e){
    firstMeme.setAttribute('src', " ")
    newH1.remove();
    newH2.remove();
    left.innerText = "";
    count = 0;
})

remove2.addEventListener('click',function(e){
    secondMeme.setAttribute('src'," ");
    right.innerText = "";
    anotherH2.remove();
    anotherH1.remove();
    count = 1;
})

removeAll.addEventListener('click',function(e){
    firstMeme.setAttribute('src', " ");
    secondMeme.setAttribute('src', " ");
    firstMeme.style.image = "none";
    left.innerText = "";
    right.innerText = "";
    newH1.remove();
    newH2.remove();
    anotherH2.remove();
    anotherH1.remove();
    count = 0;
})

