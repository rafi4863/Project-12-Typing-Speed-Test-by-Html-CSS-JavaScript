
document.addEventListener('DOMContentLoaded', () => {

    const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Stay focused and never give up.",
  "Every moment is a fresh beginning.",
  "Do what is right, not what is easy.",
  "Mistakes are proof that you are trying.",
  "Work hard in silence, let success speak.",
  "Great things never come from comfort zones.",
  "Push yourself because no one else will.",
  "Small steps lead to big results.",
  "Your only limit is your mind.",
  "Nothing will work unless you do.",
  "Be stronger than your excuses.",
  "Doubt kills more dreams than failure ever will.",
  "Act as if what you do matters.",
  "Start where you are, use what you have.",
  "Success is the sum of small efforts.",
  "Focus on progress, not perfection.",
  "The best time for a new beginning is now.",
  "Learn from yesterday, live for today.",
  "Your vibe attracts your tribe.",
  "Do something today your future self will thank you for.",
  "Stay hungry, stay foolish.",
  "The harder you work, the luckier you get.",
  "Turn your wounds into wisdom.",
  "Don't wish for it, work for it.",
  "Consistency beats talent.",
  "Everything you can imagine is real.",
  "Don't stop until you're proud.",
  "Difficult roads lead to beautiful destinations.",
  "Stars can’t shine without darkness.",
  "The future depends on what you do today.",
  "Believe in yourself and all that you are.",
  "A goal without a plan is just a wish.",
  "Focus on the step in front of you.",
  "Success is a journey, not a destination.",
  "You become what you believe.",
  "If you can dream it, you can do it.",
  "Don’t let fear decide your future.",
  "Stay positive, work hard, make it happen.",
  "Be a warrior, not a worrier.",
  "A little progress each day adds up to big results.",
  "If you get tired, learn to rest, not quit.",
  "Big journeys begin with small steps.",
  "What you do today can change your life forever.",
  "The best view comes after the hardest climb.",
  "Do it now. Sometimes later becomes never.",
  "Success starts with self-discipline.",
  "Believe in the power of consistency.",
  "Make your dreams bigger than your fears.",
  "You are stronger than you think.",
  "Winners never quit and quitters never win.",
  "Focus on being productive, not busy.",
  "The secret to getting ahead is getting started.",
  "Everything starts with a single step.",
  "You don’t find willpower, you create it.",
  "Let your actions speak louder than words.",
  "Perseverance is the key to success."
];

    const Quotes = document.getElementById('quotes');
    const inputBox = document.getElementById('input-box');
    const startBtn = document.getElementById('startBtn');
    const resultbox = document.getElementById('resultBox');

    let currentQuetes;
    let startTime;

   startBtn.addEventListener('click', startTest);
   inputBox.addEventListener('input', checkInput)

    function startTest(){
       const randomIndex = Math.floor(Math.random() * quotes.length);
       currentQuetes = quotes[randomIndex];
       Quotes.textContent = currentQuetes;
       inputBox.value = '';
       Quotes.style.color = 'white';
       inputBox.removeAttribute('disabled');
       inputBox.focus();
       resultbox.textContent = '';
       resultbox.removeAttribute('style');
       startTime = new Date().getTime();
    }

    function checkInput() {
      const typedText = inputBox.value;
      
      if(typedText === currentQuetes){
         const endTime = new Date().getTime();
         const presentTime = (endTime - startTime) / 1000;
         const wordPerMinute = typedText.split(' ').length / presentTime * 60;
         
         resultbox.textContent = `You typed at : ${wordPerMinute.toFixed(0)} word per minute.`;


          resultbox.style.backgroundColor = "black";   
          resultbox.style.color = "lime";              
          resultbox.style.width = "80%";               
          resultbox.style.marginTop = "70px";          
          resultbox.style.padding = "12px";  
          resultbox.style.borderRadius = "8px";     
          resultbox.style.fontSize = "18px";   
          resultbox.style.fontWeight = "bold";         
          resultbox.style.transition = "0.3s";         
          resultbox.style.marginLeft = "auto";
          resultbox.style.marginRight = "auto";

      }
    }
});