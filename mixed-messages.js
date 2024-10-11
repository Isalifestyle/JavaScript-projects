// Plan: Divide Math into 3 categories: Calculus, Aljebra, and Statistics
// For each category we will include a reference varibale
// that represents said category followed by a base joke
// We will then allows random words to fill the intended blank spaces
// We store everything in a list to where we will contatenate everything
// Optional: Include a function that spews a random math fact for the given base case 


// Making a mixed message object.
const mixedMessage = 
{
    message: [],

    messageWords : {
        mathList : ['pi ;)', 'Coding', 'Reading', 'Biking'],
        randomWords : ['I dislike', 'I enjoy', 'I love', 'I hate'],
        farwell : ['| Enjoy the rest of your day!', '| May God Be With You!', '| Toodles', '| Remember - Everyday is a Blessing!']

       },

    setMessege : function mixedMessage(message)
    {
        this.message = message;
    },

    generateRandomNumber : function()
    {
        return Math.floor(Math.random() * this.messageWords.mathList.length);
    },

    generateMessage : function()
    {
        const randomNum = this.generateRandomNumber();
        for (let i = 0; i < 1; i++)
        {
            this.message.push(this.messageWords.randomWords[randomNum]);
            this.message.push(this.messageWords.mathList[randomNum]);
            this.message.push(this.messageWords.farwell[randomNum]);
        }
        return this.message.join(' ');
    }

}
console.log(mixedMessage.generateMessage()); 








