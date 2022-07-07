const emotionalQuotes =[
    "If your emotional abilities aren't in hand, if you don't have self-awareness, if you are not able to manage your distressing emotions, if you can't have empathy and have effective relationships, then no matter how smart you are, you are not going to get very far.",
    "75 percent of careers are derailed for reasons related to emotional competencies, including inability to handle interpersonal problems; unsatisfactory team leadership during times of difficulty or conflict; or inability to adapt to change or elicit trust.",
    "When dealing with people, remember you are not dealing with creatures of logic, but with creatures of emotion.",
    "When our emotional health is in a bad state, so is our level of self-esteem. We have to slow down and deal with what is troubling us, so that we can enjoy the simple joy of being happy and at peace with ourselves.",
    "The only way to change someone's mind is to connect with them from the heart.",
    "No one cares how much you know, until they know how much you care.",
    "Unleash in the right time and place before you explode at the wrong time and place.",
    "The greatest ability in business is to get along with others and influence their actions.",
    "In a high-IQ job pool, soft skills like discipline, drive, and empathy mark those who emerge as outstanding.",
    "Any person capable of angering you becomes your master. ",
    "Anyone can be angry--that is easy. But to be angry with the right person, to the right degree, at the right time, for the right purpose, and in the right way--that is not easy.",
    "Every time we allow someone to move us with anger, we teach them to be angry.",
    "Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
    "Emotions can get in the way or get you on the way",
    "Experience is not what happens to you--it's how you interpret what happens to you.",
    "Running a marathon with a backpack is tough and may hinder you from winning the race. Don't let the baggage from your past--heavy with fear, guilt, and anger--slow you down.",
    "Our feelings are not there to be cast out or conquered. They're there to be engaged and expressed with imagination and intelligence.",
    "When you make people angry, they act in accordance with their baser instincts, often violently and irrationally. When you inspire people, they act in accordance with their higher instincts, sensibly and rationally. Also, anger is transient, whereas inspiration sometimes has a lifelong effect. ",
    "It isn't stress that makes us fall--it's how we respond to stressful events.",
    "Whatever is begun in anger, ends in shame.",
    "Emotional intelligence is the ability to sense, understand, and effectively apply the power and acumen of emotions as a source of human energy, information, connection, and influence.",
    "It is very important to understand that emotional intelligence is not the opposite of intelligence, it is not the triumph of heart over head--it is the unique intersection of both.",
    "We define emotional intelligence as the subset of social intelligence that involves the ability to monitor one's own and others' feelings and emotions, to discriminate among them and to use this information to guide one's thinking and actions.",
    "For news of the heart, ask the face.",
    "Let's not forget that the little emotions are the great captains of our lives and we obey them without realizing it.",
    "Quick to judge, quick to anger, slow to understand ... prejudice, fear, and ignorance walk hand in hand.",
    "The essential difference between emotion and reason is that emotion leads to action while reason leads to conclusions.",
    "You can conquer almost any fear if you will only make up your mind to do so. For remember, fear doesn't exist anywhere except in the mind. ",
    "Your intellect may be confused, but your emotions will never lie to you. ",
    "Change happens in the boiler room of our emotions--so find out how to light their fires.",
    "If we lack emotional intelligence, whenever stress rises the human brain switches to autopilot and has an inherent tendency to do more of the same, only harder.  Which, more often than not, is precisely the wrong approach in today's world.",
    "Never react emotionally to criticism. Analyze yourself to determine whether it is justified. If it is, correct yourself. Otherwise, go on about your business.",
    "To increase your effectiveness, make your emotions subordinate to your commitments.",
    "When you listen with empathy to another person, you give that person psychological air.",
    "Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.",
    "Remember that failure is an event, not a person. ",
    "We are at our most powerful the moment we no longer need to be powerful.",
    "I'm a pessimist because of intelligence, but an optimist because of will.",
    "It takes something more than intelligence to act intelligently.",
    "A leader is a dealer in hope.",
    "When people talk, listen completely. Most people never listen.",
    "Whenever you feel like criticizing anyone ... just remember that all the people in this world haven't had the advantages that you've had.",
    "Some people think only intellect counts: knowing how to solve problems, knowing how to get by, knowing how to identify an advantage and seize it. But the functions of intellect are insufficient without courage, love, friendship, compassion, and empathy.",
    "He'd always known that shit rolled downhill, but he never knew tears did the same thing.",
    "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    "Don't compromise yourself. You're all you've got.",
    "Wisdom tends to grow in proportion to one's awareness of one's ignorance.",
    "The way to do is to be. ",
    "The curious paradox is that when I accept myself just as I am, then I can change.",
    "I know that I am intelligent, because I know that I know nothing.",
    "If we can't laugh at ourselves, do we have the right to laugh at others? ",
    "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. ",
    "In my 35 years in business, I have always trusted my emotions. I have always believed that by touching emotion you get the best people to work with you, the best clients to inspire you, the best partners and most devoted customers.",
    "One way to boost our willpower and focus is to manage our distractions instead of letting them manage us.",
    "Emotional intelligence is a way of recognizing, understanding, and choosing how we think, feel, and act. It shapes our interactions with others and our understanding of ourselves. It defines how and what we learn; it allows us to set priorities; it determines the majority of our daily actions. Research suggests it is responsible for as much as 80 percent of the success in our lives."
]


function getRandomQuotes(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(emotionalQuotes.length*Math.random());
    quote.innerText = `${emotionalQuotes[rand]}`;

}
let button = document.getElementById("next");

button.addEventListener("click", () => getRandomQuotes());

document.onload  = getRandomQuotes();

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

