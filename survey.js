const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let answer1, answer2, answer3, answer4, answer5, answer6, answer7;

rl.question(`I'm here to help build your online profile. What is your name? `, (ans1) => {
  answer1 = ans1;
  console.log(`Hi, ${ans1}!`);

  rl.question('What\'s an activity you like doing? ', (ans2) => {
    answer2 = ans2;
    console.log(`${ans2}?! That's a great acitivty!
    `);

    rl.question(`What do you listen to when you're ${ans2}? `, (ans3) => {
      answer3 = ans3;
      console.log(`${ans3} sounds like the perfect soundtrack
      `);

      rl.question(`What meal do you look forward to the most? `, (ans4) => {
        answer4 = ans4;
        console.log(`Oh yummy! ${ans4} sounds delicious!
        `);

        rl.question(`What's your favourite holiday themed meal? `, (ans5) => {
          answer5 = ans5;
          console.log(`${ans1}, that's incredible.
          `);

          rl.question(`What's your favourite utensil? `, (ans6) => {
            answer6 = ans6;
            console.log(`${ans6}. Incredible. ${ans1} loves using a ${ans6}!
            `);

            rl.question(`Do you have a favourite hobby? If so, what makes you enjoy that hobbie? `, (ans7) => {
              answer7 = ans7;
              console.log(`Nice. ${ans7} is a great hobby. Thank you for sharing you're hobby with me ${ans1}
              
              `);


              rl.close();
            });
          });
        });
      });
    });
  });
});

rl.on('close', () => {
  console.log(`Thanks for your answers. Here is your new online profile:
  
  Hello, world. My name is ${answer1} and I look forward to ${answer4}. I know what you're thinking... ${answer1}, what about ${answer5}? Well that is my go-to holiday meal. I can use my ${answer6} no problem. I also like listening to ${answer3} when I'm ${answer2}. Incredible right? Honestly though my passion is ${answer7}. Thank you for coming to my TED talk.`);
});