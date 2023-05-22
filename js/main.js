const quote = {
    0:'"The Way Get Started Is To Quit Talking And Begin Doing."',
    1:'"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    2:'"Don’t Let Yesterday Take Up Too Much Of Today."',
    3: '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    4: '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    5:'"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    6: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    7: '"Strive not to be a success, but rather to be of value."',
    8: '"I attribute my success to this: I never gave or took any excuse."',
    9: '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    10: '"Every strike brings me closer to the next home run."',
    11:'"Life is what happens to you while you’re busy making other plans."',
    12: '"We become what we think about."',
    13: '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    14: '"Life is 10% what happens to me and 90% of how I react to it."',
    15: '"The mind is everything. What you think you become."',
    16: '"The best time to plant a tree was 20 years ago. The second best time is now."',
    17: '"Eighty percent of success is showing up."',
    18:'"Your time is limited, so don’t waste it living someone else’s life."',
    19: '"Winning isn’t everything, but wanting to win is."',
    20: '"I am not a product of my circumstances. I am a product of my decisions. "',
    21:'"You can never cross the ocean until you have the courage to lose sight of the shore."',
    22: '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    23: '"Either you run the day, or the day runs you."',
    24: '"Whether you think you can or you think you can’t, you’re right."',
    25: '"The best revenge is massive success."',
    26: '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    27: '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    28: '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    29: '"The only person you are destined to become is the person you decide to be."',
    30: '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    31: '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    32:'"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
  };
    let info = document.querySelector('.btn-info');
    let text = document.querySelector('.text');
    let authorText = document.querySelector('.author');

    function getRandom(){
        const keys = Object.keys(quote);
        return keys[Math.floor(Math.random() * keys.length)];
    }
    info.addEventListener('click', function(e) {
        text.textContent = quote[getRandom(quote)];
    });
    window.onload = function(){
        getRandom()
    }
      