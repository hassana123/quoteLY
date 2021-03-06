const happyQuotes = [
    "Happiness is not the absence of problems, it’s the ability to deal with them.",
    "Happiness is not being pained in body or troubled in mind.",
    "Happiness is always a by-product. It is probably a matter of temperament, and for anything I know it may be glandular. But it is not something that can be demanded from life, and if you are not happy you had better stop worrying about it and see what treasures you can pluck from your own brand of unhappiness.",
    "The secret of happiness is to find a congenial monotony.",
    "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    "There is only one happiness in this life, to love and be loved.",
    "All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love.",
    "Happiness consists more in conveniences of pleasure that occur everyday than in great pieces of good fortune that happen but seldom.",
    "Happiness is not an ideal of reason, but of imagination.",
    "To be without some of the things you want is an indispensable part of happiness.",
    "A great obstacle to happiness is to expect too much happiness.",
    "To enjoy good health, to bring true happiness to one’s family, to bring peace to all, one must first discipline and control one’s own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.",
    "There is some kind of a sweet innocence in being human—in not having to be just happy or just sad—in the nature of being able to be both broken and whole, at the same time.",
    "Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity.",
    "The secret of happiness is freedom, the secret of freedom is courage.",
    "It is not how much we have, but how much we enjoy, that makes happiness.",
    "There is no happiness like that of being loved by your fellow creatures, and feeling that your presence is an addition to their comfort.",
    "If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else.",
    "The only way to find true happiness is to risk being completely cut open.",
    "Nobody really cares if you’re miserable, so you might as well be happy.",
    "Happiness is not something ready made. It comes from your own actions.",
    "It isn’t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.",
    "People are unhappy when they get something too easily. You have to sweat – that’s the only moral they know.",
    "We can’t control the world. We can only (barely) control our own reactions to it. Happiness is largely a choice, not a right or entitlement.",
    "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude.",
    "I think the key to life is just being a happy person, and happiness will bring you success.",
    "Happiness is being content with what you have, living in freedom and liberty, having a good family life and good friends.",
    "Happiness is the interval between periods of unhappiness.",
    "The world is full of people looking for spectacular happiness while they snub contentment.",
    "Happiness grows at our own firesides, and is not to be picked in strangers’ gardens.",
    "Happiness is excitement that has found a settling down place. But there is always a little corner that keeps flapping around.",
    "Happiness is always the serendipitous result of looking for something else.",
    "Learn to enjoy every minute of your life. Be happy now. Don’t wait for something outside of yourself to make you happy in the future.",
    "The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things.",
    "The search for happiness is one of the chief sources of unhappiness.",
    "My family didn’t have a lot of money, and I’m grateful for that. Money is the longest route to happiness.",
    "Happiness lies in the joy of achievement and the thrill of creative effort.",
    "We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.",
    "There can be no happiness if the things we believe in are different from the things we do.",
    "Give a man health and a course to steer, and he’ll never stop to trouble about whether he’s happy or not.",
    "Happiness is having a large, loving, caring, close-knit family in another city.",
    "How simple it is to see that we can only be happy now, and there will never be a time when it is not now.",
    "Happiness is a by-product of an effort to make someone else happy.",
    "Cheerfulness is what greases the axles of the world. Don’t go through life creaking.",
    "Happiness and sadness run parallel to each other. When one takes a rest, the other one tends to take up the slack.",
    "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose.",
    "All happiness depends on courage and work.",
    "Now and then it’s good to pause in our pursuit of happiness and just be happy.",
    "So we shall let the reader answer this question for himself: who is the happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed?",
    "Happiness is a matter of one’s most ordinary and everyday mode of consciousness being busy and lively and unconcerned with self.",
    "Happiness is distraction from the human tragedy.",
    "Real happiness is not of temporary enjoyment, but is so interwoven with the future that it blesses for ever.",
    "Real happiness is cheap enough, yet how dearly we pay for its counterfeit.",
    "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    "I must learn to be content with being happier than I deserve.",
    "Who is the happiest of men? He who values the merits of others, and in their pleasure takes joy, even as though it were his own.",
    "Ask yourself whether you are happy and you cease to be so.",
    "You cannot protect yourself from sadness without protecting yourself from happiness.",
    "Three grand essentials to happiness in this life are something to do, something to love, and something to hope for.",
    "The happiness which is lacking makes one think even the happiness one has unbearable.",
    "t’s been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.",
    "If you look to others for fulfillment, you will never be fulfilled. If your happiness depends on money, you will never be happy with yourself. Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the world belongs to you.",
    "You can’t be happy unless you’re unhappy sometimes.",
    "As people spin faster and faster in the pursuit of merely personal happiness, they become exhausted in the futile effort of chasing themselves.",
    "In order to have great happiness you have to have great pain and unhappiness – otherwise how would you know when you’re happy?",
    "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.",
    "He who lives in harmony with himself lives in harmony with the universe.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "Happiness is not a state to arrive at, but a manner of traveling.",
    "Happiness is a constant work-in-progress, because solving problems is a constant work-in-progress – the solutions to today’s problems will lay the foundation for tomorrow’s problems, and so on. True happiness occurs only when you find the problems you enjoy having and enjoy solving.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "In my life I’ve learned that true happiness comes from giving. Helping others along the way makes you evaluate who you are. I think that love is what we’re all searching for. I haven’t come across anyone who didn’t become a better person through love.",
    "Happiness is a well-balanced combination of love, labour, and luck.",
    "Many things can make you miserable for weeks; few can bring you a whole day of happiness. ",
    "Happiness is a dry martini and a good woman. Or a bad woman."
]


function getRandomQuotes(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(happyQuotes.length*Math.random());
    quote.innerText = `${happyQuotes[rand]}`;

}
let button = document.getElementById("next");

button.addEventListener("click", () => getRandomQuotes());

document.onload  = getRandomQuotes()


let nav = document.getElementById("display-nav-bar");
let displayNavBar = document.querySelector("#open-menu");
let closeNavBar = document.querySelector("#exit");

function openMenu(){
    document.getElementById('display-nav-bar').style.marginLeft = "0%"
}
function closemenu(){
    document.getElementById('display-nav-bar').style.marginLeft = '-50%';
}
displayNavBar.addEventListener('click', () => openMenu());
closeNavBar.addEventListener('click', () => closemenu());

function toggle(a){
    
    if(a.checkbox.checked==true){
        nav.style.background ="linear-gradient(to left, #181818, #b3b3b3)";
        document.documentElement.classList.add('transition');
        document.body.style.background ="#3e424b";
    }
    else if(a.checkbox.checked==false){
        //let mainPage = document.querySelector("#quote-body");
        nav.style.background ="linear-gradient(to left, #fe8dc6, #fed1c7)";
        //mainPage.style.background = "background: linear-gradient(to left,#d0b5ff,  #1eae98)";
        document.documentElement.classList.add('transition');
        document.body.style.background = "linear-gradient(to left,#d0b5ff,  #1eae98)";
    }
  };



