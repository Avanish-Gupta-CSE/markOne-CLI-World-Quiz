var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your Name? ");

var score = 0;
function quiz(ques,ans)
{
    var userAnswer = readlineSync.question(ques+"Your Answer: ");

    if(userAnswer === ans)
    {
        console.log("\nYay !!! Your Answer '"+ userAnswer + "' is CORRECT.");
        score++;
    }
    else
    {
        console.log("\nBetter Luck Next Time !!! Your Answer '"+ userAnswer + "' is WRONG.\n" +
            "Correct Answer is '"+ans+ "' .");
        //score--;
    }
    console.log("Current score : "+score+"\n");
}

var quesList = [
    {
        question: "1. Which is the smallest ocean in the World?" +
            "\n\n(A) Indian\n(B) Pacific\n(C) Atlantic\n(D) Arctic\n",
        answer: "Arctic"
    },
    {
        question: "2. Which country gifted the 'Stature of Liberty' to USA?" +
            "\n\n(A) France\n(B) Canada\n(C) Brazil\n(D) England\n",
        answer: "France"
    },
    {
        question: "3. Dead Sea is located between which two countries?" +
            "\n\n(A) Jordan and Sudan\n(B) Jordan and Israel\n(C) Turkey and UAE\n(D) UAE and Egypt\n",
        answer: "Jordan and Israel"
    },
    {
        question: "4. In which ocean 'Bermuda Triangle' is located?" +
            "\n\n(A) Atlantic\n(B) Indian\n(C) Pacific\n(D) Arctic\n",
        answer: "Atlantic"
    },
    {
        question: "5. Which country is known as the 'Playground of Europe'?" +
            "\n\n(A) Austria\n(B) Holland\n(C) Switzerland\n(D) Italy\n",
        answer: "Switzerland"
    },
    {
        question: "6. Which country is also known as the 'Land of Rising Sun'?" +
            "\n\n(A) Japan\n(B) New Zealand\n(C) Fiji\n(D) China\n",
        answer: "Japan"
    },
    {
        question: "7. Which country is also known as 'Land of Thunderbolts'?" +
            "\n\n(A) China\n(B) Bhutan\n(C) Mongolia\n(D) Thailand\n",
        answer: "Bhutan"
    },
    {
        question: "8. Which continent has the highest number of countries?" +
            "\n\n(A) Asia\n(B) Europe\n(C) North America\n(D) Africa\n",
        answer: "Africa"
    },
    {
        question: "9. In which country, white elephant is found?" +
            "\n\n(A) India\n(B) Sri Lanka\n(C) Thailand\n(D) Malaysia\n",
        answer: "Thailand"
    },
    {
        question: "10. Total number of oceans in the World is" +
            "\n\n(A) 3\n(B) 5\n(C) 7\n(D) 12\n",
        answer: "5"
    }
];

console.log("======WELCOME , "+userName+" =======");
console.log("Let's check your knowledge about the beautiful world we live in : \n");
for(var i = 0; i<quesList.length; i++)
{
    quiz(quesList[i].question, quesList[i].answer);
}

console.log("========RESULTS========");
console.log("Final Score : "+score);
console.log("=======================");
