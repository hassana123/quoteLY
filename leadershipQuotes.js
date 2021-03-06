const leadershipQuotes = [
    "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    "Where there is no vision, the people perish.",
    "I must follow the people. Am I not their leader?",
    "You manage things; you lead people.",
    "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant.",
    "Leadership is the capacity to translate vision into reality.",
    "Lead me, follow me, or get out of my way.",
    "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.",
    "A leader is a dealer in hope.",
    " You don’t need a title to be a leader.",
    "A leader is one who knows the way, goes the way, and shows the way.",
    "My own definition of leadership is this: The capacity and the will to rally men and women to a common purpose and the character which inspires confidence.",
    "Leadership is lifting a person's vision to high sights, the raising of a person's performance to a higher standard, the building of a personality beyond its normal limitations.",
    "Never doubt that a small group of thoughtful, concerned citizens can change world. Indeed it is the only thing that ever has.",
    "The nation will find it very hard to look up to the leaders who are keeping their ears to the ground.",
    "The most dangerous leadership myth is that leaders are born-that there is a genetic factor to leadership. That's nonsense; in fact, the opposite is true. Leaders are made rather than born.",
    "To command is to serve, nothing more and nothing less.",
    "He who has never learned to obey cannot be a good commander.",
    "Become the kind of leader that people would follow voluntarily; even if you had no title or position.",
    "I start with the premise that the function of leadership is to produce more leaders, not more followers.",
    "Effective leadership is not about making speeches or being liked; leadership is defined by results not attributes.",
    "Anyone can hold the helm when the sea is calm.",
    "A great person attracts great people and knows how to hold them together.",
    "The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint enough to keep from meddling with them while they do it.",
    "Leadership is influence.",
    "You don't lead by pointing and telling people some place to go. You lead by going to that place and making a case.",
    "When I give a minister an order, I leave it to him to find the means to carry it out.",
    "Men make history and not the other way around. In periods where there is no leadership, society stands still. Progress occurs when courageous, skillful leaders seize the opportunity to change things for the better.",
    "People buy into the leader before they buy into the vision.",
    "So much of what we call management consists in making it difficult for people to work.",
    "The art of leadership is saying no, not saying yes. It is very easy to say yes.",
    "The very essence of leadership is that you have to have a vision. It's got to be a vision you articulate clearly and forcefully on every occasion. You can't blow an uncertain trumpet.",
    "The key to successful leadership today is influence, not authority.",
    "A good general not only sees the way to victory; he also knows when victory is impossible.",
    "A great leader's courage to fulfill his vision comes from passion, not position.",
    "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.",
    "The challenge of leadership is to be strong, but not rude; be kind, but not weak; be bold, but not bully; be thoughtful, but not lazy; be humble, but not timid; be proud, but not arrogant; have humor, but without folly.",
    "Outstanding leaders go out of their way to boost the self-esteem of their personnel. If people believe in themselves, it's amazing what they can accomplish.",
    "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. He does not set out to be a leader, but becomes one by the equality of his actions and the integrity of his intent.",
    "A ruler should be slow to punish and swift to reward.",
    "No man will make a great leader who wants to do it all himself, or to get all the credit for doing it.",
    "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
    "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.",
    "Leaders think and talk about the solutions. Followers think and talk about the problems.",
    "A man who wants to lead the orchestra must turn his back on the crowd.",
    "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.",
    "As we look ahead into the next century, leaders will be those who empower others. ",
    "All of the great leaders have had one characteristic in common: it was the willingness to confront unequivocally the major anxiety of their people in their time. This, and not much else, is the essence of leadership.",
    "Do what you feel in your heart to be right–for you’ll be criticized anyway. ",
    "Don't necessarily avoid sharp edges. Occasionally they are necessary to leadership.",
    "Education is the mother of leadership",
    " Effective leadership is putting first things first. Effective management is discipline, carrying it out.",
    "Great leaders are not defined by the absence of weakness, but rather by the presence of clear strengths.",
    "Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand.",
    "He who has great power should use it lightly.",
    " He who has learned how to obey will know how to command.",
    "I am reminded how hollow the label of leadership sometimes is and how heroic followership can be.",
    "I cannot give you the formula for success, but I can give you the formula for failure, which is: Try to please everybody.",
    "If one is lucky, a solitary fantasy can totally transform one million realities.",
    "If you would not be forgotten, as soon as you are dead and rotten, either write things worth reading, or do things worth the writing.",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    "In matters of style, swim with the current; in matters of principle, stand like a rock.",
    "It is absurd that a man should rule others, who cannot rule himself.",
    "It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger. Then people will appreciate your leadership.",
    "Lead and inspire people. Don’t try to manage and manipulate people. Inventories can be managed but people must be led.",
    "Leaders aren't born, they are made. And they are made just like anything else, through hard work. And that's the price we'll have to pay to achieve that goal, or any goal.",
    "Leaders must be close enough to relate to others, but far enough ahead to motivate them.",
    "Leadership and learning are indispensable to each other.",
    "Leadership cannot just go along to get along. Leadership must meet the moral challenge of the day.",
    "Leadership does not always wear the harness of compromise.",
    "Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy.",
    "Leadership is solving problems. The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help or concluded you do not care. Either case is a failure of leadership.",
    "Leadership is the key to 99 percent of all successful efforts.",
    "Leadership is unlocking people's potential to become better.",
    "Management is about arranging and telling. Leadership is about nurturing and enhancing.",
    "Management is efficiency in climbing the ladder of success; leadership determines whether the ladder is leaning against the right wall.",
    "Never give an order that can't be obeyed.",
    "No man is good enough to govern another man without that other's consent.",
    "What you do has far greater impact than what you say. ",
    "Not the cry, but the flight of a wild duck, leads the flock to fly and follow.",
    "One of the tests of leadership is the ability to recognize a problem before it becomes an emergency.",
    "The final test of a leader is that he leaves behind him in other men, the conviction and the will to carry on.",
    "The greatest leaders mobilize others by coalescing people around a shared vision.",
    "The growth and development of people is the highest calling of leadership.",
    "To do great things is difficult; but to command great things is more difficult.",
    " To have long term success as a coach or in any position of leadership, you have to be obsessed in some way.",
    "True leadership lies in guiding others to success. In ensuring that everyone is performing at their best, doing the work they are pledged to do and doing it well.",
    "We live in a society obsessed with public opinion. But leadership has never been about popularity.",
    "Whatever you are, be a good one.",
    "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do.",
    "A competent leader can get efficient service from poor troops, while on the contrary an incapable leader can demoralize the best of troops.",
    "A good leader is a person who takes a little more than his share of the blame and a little less than his share of the credit.",
    "There are three essentials to leadership: humility, clarity and courage.",
    "I am endlessly fascinated that playing football is considered a training ground for leadership, but raising children isn't.",
    "A cowardly leader is the most dangerous of men.",
    "My responsibility is getting all my players playing for the name on the front of the jersey, not the one on the back.",
    "A good plan violently executed now is better than a perfect plan executed next week.",
    "The supreme quality of leadership is integrity.",
    "You don’t lead by hitting people over the head—that’s assault, not leadership.",
    "Earn your leadership every day.",
]


function getRandomQuotes(){
    let  quote  = document.getElementById("display");
    let rand = Math.floor(leadershipQuotes.length*Math.random());
    quote.innerText = `${leadershipQuotes[rand]}`;

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


