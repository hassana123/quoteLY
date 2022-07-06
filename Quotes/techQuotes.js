let techQuotes = [
    "I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.",
    "Please, no matter how we advance technologically, please don’t abandon the book. There is nothing in our material world more beautiful than the book.",
    "Books don’t need batteries.",
    "We are the children of a technological age. We have found streamlined ways of doing much of our routine work. Printing is no longer the only way of reproducing books. Reading them, however, has not changed.",
    "I might love my e-reader, but I’d never pass up the chance to browse real books.",
    "Technology like art is a soaring exercise of the human imagination.",
    "Any sufficiently advanced technology is equivalent to magic.",
    "Any technology distinguishable from magic is insufficiently advanced.",
    "Our technology forces us to live mythically.",
    "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.",
    "It has become appallingly obvious that our technology has exceeded our humanity.",
    "Computers are useless. They can only give you answers.",
    "The human spirit must prevail over technology.",
    "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
    "The production of too many useful things results in too many useless people.",
    "Technology is a useful servant but a dangerous master.",
    "Science and technology revolutionize our lives, but memory, tradition, and myth frame our response.",
    "Cars will soon have the Internet on the dashboard. I worry that this will distract me from my texting.",
    "I’d rather check my Facebook than face my checkbook.",
    "User’ is the word used by the computer professional when they mean ‘idiot.",
    "What did people do when they went to the bathroom before smartphones?",
    "To err is human, but to really foul things up you need a computer.",
    "My life is now a constant assessment of whether what’s happening in real life is more entertaining than what’s happening on my phone.",
    "We are stuck with technology when what we really want is just stuff that works.",
    "Technology is a word that describes something that doesn’t work yet.",
    "Man is a slow, sloppy, and brilliant thinker; computers are fast, accurate, and stupid.",
    "Technology is the knack of so arranging the world that we do not experience it.",
    "The real problem is not whether machines think but whether men do.",
    "This is the whole point of technology. It creates an appetite for immortality on the one hand. It threatens universal extinction on the other. Technology is lust removed from nature.",
    "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.",
    "If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.",
    "What new technology does is create new opportunities to do a job that customers want done.",
    "Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.",
    "Technological progress has merely provided us with more efficient means for going backward.",
    "Technology – with all its promise and potential – has gotten so far beyond human control that it’s threatening the future of humankind.",
    "As cities grow and technology takes over the world belief and imagination fade away and so do we.",
    "Ethics change with technology.",
    "As technology advances in complexity and scope, fear becomes more primitive.",
    "Technology made large populations possible; large populations now make technology indispensable.",
    "Technology is best when it brings people together.",
    "Even the technology that promises to unite us, divides us. Each of us is now electronically connected to the globe, and yet we feel utterly alone.",
    "As technology accumulates and people in more parts of the planet become interdependent, the hatred between them tends to decrease, for the simple reason that you can’t kill someone and trade with him too.",
    "All of the biggest technological inventions created by man – the airplane, the automobile, the computer – says little about his intelligence, but speaks volumes about his laziness.",
    "We refuse to turn off our computers, turn off our phone, log off Facebook, and just sit in silence because in those moments we might actually have to face up to who we really are.",
    "Technology has solved old economic problems by giving us new psychological problems. The internet has not just open-sourced information, it has also open-sourced insecurity, self-doubt, and shame.",
    "The technology you use impresses no one. The experience you create with it is everything.",
    "Humanity is acquiring all the right technology for all the wrong reasons.",
    "You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers.",
    "The art challenges the technology, and the technology inspires the art.",
]


function getRandomQuotes(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(techQuotes.length*Math.random());
    quote.innerText = `${techQuotes[rand]}`;

}
let button = document.getElementById("next");

button.addEventListener("click", () => getRandomQuotes());

document.onload  = getRandomQuotes()
