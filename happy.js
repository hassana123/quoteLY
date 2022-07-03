const quotes = [
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
]


function getRand(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(quotes.length*Math.random());
    quote.innerText = `${quotes[rand]}`;

}
let button = document.getElementById("next");

button.addEventListener("click", () => getRand());

document.onload  = getRand();
