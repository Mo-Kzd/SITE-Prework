# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **ZHAODONG KANG**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/canyon-early-constellation)

## Required Functionality

The following **required** functionality is complete:

* [*] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [*] "Start" button toggles between "Start" and "Stop" when clicked. 
* [*] Game buttons each light up and play a sound when clicked. 
* [*] Computer plays back sequence of clues including sound and visual cue for each button
* [*)] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [*] User wins the game after guessing a complete pattern
* [*] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [*] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [*] Buttons use a pitch (frequency) other than the ones in the tutorial
* [*] More than 4 functional game buttons
* [*] Playback speeds up on each turn
* [*] Computer picks a different pattern each time the game is played
* [*] Player only loses after 3 mistakes (instead of on the first mistake)
* [*] Game button appearance change goes beyond color (e.g. add an image)
* [] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [*] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [*] Create 8 buttons corresponding to DO, RE, MI, FA, SOL, LA, Ti, DO+
- [*] Add text to colorful buttons and change to cute animal images when clicks the button


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

The first gif went through whole progress successfully

![](https://i.imgur.com/QiMTRqX.gif)

The second gif shows the users are allowed to make two mistakes

![](https://i.imgur.com/eTr1tIO.gif)

The third gif shows there is a time limit for the game

![](https://i.imgur.com/onjno5M.gif)

The final gif shows that users could stop and start the game

![](https://i.imgur.com/uPIccA5.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://rosettacode.org/wiki/Musical_scale
https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
https://www.w3schools.com/cssref/css_colors.asp
https://www.geeksforgeeks.org/how-to-change-an-input-button-image-using-css/#:~:text=The%20default%20button%20in%20HTML,show%20only%20the%20image%20itself.
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The majority of challenges occur when I try to create a ticking clock for the game. In the beginning, I have no idea how to do that. Then, I start to read the documentation about the setInterval and clearInterval methods. Also, I looked up how others implement a similar function on StackOverflow. Therefore, I have a clear idea about where I should start with. However, when I implement the function, I discovered there are some bugs that need me to address: it goes into an infinity loop when the time is out, and the clock does not restart when I end and restart the game. For the first problem, I trace through the code and find out when I originally call loseGame(), but I do not clear the clock in loseGame(). Thus, my clock would continue to call loseGame(), resulting in an infinity loop. Thus, I call clearInterval(timerId) in my loseGame() to resolve it. Secondly, for the problem the clock does not restart, I finally find out it is because I only reinitialize the clock when timeLeft <= 0. I need to also add a condition to reinitialize the timer when timeLeft != 60 (which is the total time). Therefore, the clock could work without problem.
Moreover, for speeding up the playback speed, I make a lot of trials to determine what exact number I should put the make the game engaging but not too difficult. Also, when I speed up the playback on each turn, I find out when I end and restart the game, that the playback speed does not reet to the old value. Instead, the playback speed starts at a quick time. After tracing the code, the problem is that I did not reinitialize clueHoldTime = 1000 in the startGame(). 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
This project is my first web development project, and it raises my interest in web development. For the CSS, I utilized some types of selectors in this project, but I am eager to learn are there other types of selectors and in different situations, which selector is the most concise and efficient one. Moreover, I have a question about how to practically push the web project to a server to allow everyone could access to the web. It also raises other questions: when there are more and more people access to my website, how could I make the access time short, how could I avoid my website being crushed, and how could I maintain my website later.
Besides, this project, I used javascript to implement the behaviors of items. However, actually, I am more familiar with Java, Python, and C. So, could I use them to make a similar effect. Similarly, I do not know what is the connection between the front end and back end of the web development.
Moreover, I wish to know more about the connection between web development and the SQL database (the reason would be explained in the next question later).
Lastly, I am currently doing a research project about Automatic Algorithm Design at Georgia Tech. It is a kind of Machine Learning and Genetic Algorithm. I am wondering is possible for me to utilize what I've learned in school in web development later in my career.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I could have more time on this, firstly, I wish I could let have different pages for this project, where the front page could allow users to choose the difficulties of the game and then jump to the game page. Moreover, I wish users could choose the music modes. Specifically, I want to have three modes: random tones, tones that form a piece of short music, and the animal's sound. For the random tones, I have already implemented them in this project. I wish to convert some popular and classical music to a specific pattern in this game later. For the animals' sound, since each button is corresponding to an animal, I wish to have a mode where the sound is the actual animals' sound, and I think this mode is more interesting for some baby users.
Finally, I wish to create a log-in system, in which each user would have a username and password stored in the database. The account could have information about how many times the user wins the game and the shortest time they used it, and I wish to create three ranks for three different modes to make the game more engaging.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=1fvmTL3QzvQ)

## Reference
pictures:
https://zh.pngtree.com/free-png-vectors/
https://www.aisoutu.com/pingmian/516146
https://www.jamiesale-cartoonist.com/free-cartoon-dog-vector-clip-art/
https://www.jamiesale-cartoonist.com/free-cartoon-cat-vector-clip-art/
http://clipart-library.com/free/pig-clipart-transparent.html
https://www.seekpng.com/ipng/u2w7u2u2u2y3q8t4_animated-snake-clipart/
https://pixabay.com/illustrations/turtle-animal-cartoon-tortoise-6002767/
https://pixabay.com/vectors/monkey-animal-gorilla-zoo-nature-4187960/

## License

    Copyright ZHAODONG KANG

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
