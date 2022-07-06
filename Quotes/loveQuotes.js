const loveQuotes = [
    "In love there are two things: bodies and words.",
    "Continue to share your heart with people even if it has been broken.",
    "Love is such a powerful force. It’s there for everyone to embrace-that kind of unconditional love for all of humankind. That is the kind of love that impels people to go into the community and try to change conditions for others, to take risks for what they believe in.",
    "To love is to recognize yourself in another.",
    "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
    "Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism. It isn't a feeling, it is a practice.",
    "There is always some madness in love. But there is also always some reason in madness.",
    "There's all kinds of reasons that you fall in love with one person rather than another: Timing is important. Proximity is important. Mystery is important.",
    "Passion makes the world go 'round. Love just makes it a safer place.",
    "I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day.",
    "When you find that one that's right for you, you feel like they were put there for you, you never want to be apart.",
    "When you're lucky enough to meet your one person, then life takes a turn for the best. It can't get better than that.",
    "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
    "Have enough courage to trust love one more time and always one more time.",
    "Love has nothing to do with what you are expect to get — only with what you are expecting to give — which is everything.",
    "Where there is great love, there are always miracles.",
    "In real love, you want the other person's good.In romantic love, you want the other person.",
    "True love is singing karaoke Under Pressure and letting the other person sing the Freddie Mercury part.",
    "When you realize you want to spend the rest of your life with sombody, you want the rest of your life to start as soon as possible.",
    "Where we love is home – home that our feet may leave, but not our hearts.",
    "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    "Love is that condition in which the happiness of another person is essential to your own.",
    "I love you not only for what you are, but for what I am when I am with you.",
    "I'm just a big believer in 'you must love yourself before you can love anybody else' and I think for me that breeds the most inspired relationships.",
    "When you are missing someone, time seems to move slower, and when I'm falling in love with someone, time seems to be moving faster.",
    "You found parts of me I didn't know exists and in you I fould a love I no longer believed was real.",
    "Love makes your soul crawl out from its hiding place.",
    "There is only one happiness in this life, to love and be loved.",
    "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
    "Love does not dominate; it cultivates.",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    "It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them.",
    "Love is the whole thing. We are only pieces.",
    "True love comes quietly, without banners or flashing lights. If you hear bells, get your ears checked.",
    "To love and be loved is to feel the sun from both sides.",
    "Life is the flower for which love is the honey.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "All that you are is all that I’ll ever need.",
    "I love her, and that’s the beginning and end of everything.",
    "Love recognizes no barriers.",
    "Love is composed of a single soul inhabiting two bodies.",
    "We are most alive when we're in love.",
    "There is no charm equal to tenderness of heart.",
    "The heart has its reasons of which reason knows nothing.",
    "Love is friendship that has caught fire.",
    "Love yourself first and everything falls into line.",
    "You can't blame gravity for falling in love.",
    "If you find someone you love in your life, then hang on to that love.",
    "I fell in love the way you fall asleep: slowly, and then all at once.",
    "A simple I love you means more than money.",
    "Everything I do, I do it for you.",
    "Let love rule.",
]

function getRandomQuotes(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(loveQuotes.length*Math.random());
    quote.innerText = `${loveQuotes[rand]}`;

}
let button = document.getElementById("next");

button.addEventListener("click", () => getRandomQuotes());

document.onload  = getRandomQuotes()
