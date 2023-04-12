const user = document.querySelector("#user_choice");
const cpu = document.querySelector("#cpu_choice");
const result = document.querySelector("#result");
const options = document.querySelectorAll(".option_img");
const userScore = document.querySelector("#user_score");
const cpuScore = document.querySelector("#cpu_score");
const display = document.querySelector(".display");

let userCurrentScore=Number(userScore.innerText)
let cpuCurrentScore=Number(cpuScore.innerText)

result.innerText = "Start";
result.style.color="orange";

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        display.classList.add("start");

        result.innerText = "wait!!!";
        result.style.color="orange";

        user.src = "./img/rock.jpg";
        cpu.src = "./img/rock.jpg";
 
        setTimeout(() => {
        display.classList.remove("start");
        user.src = option.src;
        const cpu_image = [
        "./img/rock.jpg",
        "./img/paper.jpg",
        "./img/scissors.jpg",
      ];
      let randomNumber = Math.floor(Math.random() * 3);
      cpu.src = cpu_image[randomNumber];
      const possibleResults = {
        rr: "Draw",
        pp: "Draw",
        ss: "Draw",
        rp: "Cpu Won",
        rs: "User Won",
        pr: "User Won",
        ps: "Cpu Won",
        sr: "Cpu Won",
        sp: "User Won",
      };
      const userInput = ["r", "p", "s"][index];
      const cpuInput = ["r", "p", "s"][randomNumber];
      let curr = possibleResults[userInput + cpuInput];
      
    
    if (curr==="User Won") {
      userScore.innerText = ++userCurrentScore;
      result.style.color="#adff2f";
    }
    else if(curr==="Cpu Won"){
      result.style.color="red";
      cpuScore.innerText =  ++cpuCurrentScore;
    }
    else{
      result.style.color="orange";
    }

    result.innerText = curr;

    if(cpuCurrentScore==5 || userCurrentScore==5){
      if (cpuCurrentScore==5 ) {
        result.innerText = "Game Over Cpu won";
      }
      else{
        result.innerText = "Game Over User won";
      }
        
        userScore.innerText = 0;
        cpuScore.innerText =  0;
        userCurrentScore = 0;
        cpuCurrentScore =  0;
    }
    }, 1500);
  });
});
