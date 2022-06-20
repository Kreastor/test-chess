const GAME = {

  createGame(p1, p2,) {
    const field = document.createElement("div");
    field.className = "field";
    field.style.cssText = `width: 600px;
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 auto;
                        margin-top: 10%;`
    document.body.append(field);

    for (let i = 1; i < 26; i++) {
      let cage = document.createElement("div");
      cage.className = "cage empty-cage"; 
      cage.id = `cage${i}`;
      cage.style.cssText = `position: relative;
                              border: 3px solid #fff;
                              width: 120px;
                              height: 120px;`
      field.append(cage);
      this.field.push(cage);

      switch(i) {
        case 2: 
          {let triangleLookDown = document.createElement("span");
          triangleLookDown.className = "triangle-look-down";
          cage.append(triangleLookDown);
          cage.className = "cage triangle-look-down-unit";
          this.trianglePlayer2.push(triangleLookDown);}
          break;

        case 4: 
          {let triangleLookDown = document.createElement("span");
          triangleLookDown.className = "triangle-look-down";
          cage.append(triangleLookDown);
          cage.className = "cage triangle-look-down-unit";
          this.trianglePlayer2.push(triangleLookDown);}
          break;

        case 3: 
          {let squareLookDown = document.createElement("span");
          squareLookDown.className = "square-look-down";
          cage.append(squareLookDown);
          cage.className = "cage square-look-down-unit";
          this.squarePlayer2.push(squareLookDown);}
          break;

        case 7: 
          {let circleLookDown = document.createElement("span");
          circleLookDown.className = "circle-look-down";
          cage.append(circleLookDown);
          cage.className = "cage circle-look-down-unit";
          this.circlePlayer2.push(circleLookDown);}
          break;
        
        case 8: 
          {let circleLookDown = document.createElement("span");
          circleLookDown.className = "circle-look-down";
          cage.append(circleLookDown);
          cage.className = "cage circle-look-down-unit";
          this.circlePlayer2.push(circleLookDown);}
          break;

        case 9: 
          {let circleLookDown = document.createElement("span");
          circleLookDown.className = "circle-look-down";
          cage.append(circleLookDown);
          cage.className = "cage circle-look-down-unit";
          this.circlePlayer2.push(circleLookDown);}
          break;
        
        case 22:
          {let triangleLookUp = document.createElement("span");
          triangleLookUp.className = "triangle-look-up";
          cage.append(triangleLookUp);
          cage.className = "cage triangle-look-up-unit";
          this.trianglePlayer1.push(triangleLookUp);}
          break;

        case 24:
          {let triangleLookUp = document.createElement("span");
          triangleLookUp.className = "triangle-look-up";
          cage.append(triangleLookUp);
          cage.className = "cage triangle-look-up-unit";
          this.trianglePlayer1.push(triangleLookUp);}
          break;

        case 23: 
          let squareLookUp = document.createElement("span");
          squareLookUp.className = "square-look-up";
          cage.append(squareLookUp);
          cage.className = "cage square-look-up-unit";
          this.squarePlayer1.push(squareLookUp);
          break;

        case 17: 
          {let circleLookUp = document.createElement("span");
          circleLookUp.className = "circle-look-up";
          cage.append(circleLookUp);
          cage.className = "cage circle-look-up-unit";
          this.circlePlayer1.push(circleLookUp);}
          break;

        case 18: 
          {let circleLookUp = document.createElement("span");
          circleLookUp.className = "circle-look-up";
          cage.append(circleLookUp);
          cage.className = "cage circle-look-up-unit";
          this.circlePlayer1.push(circleLookUp);}
          break;
        
        case 19: 
          {let circleLookUp = document.createElement("span");
          circleLookUp.className = "circle-look-up";
          cage.append(circleLookUp);
          cage.className = "cage circle-look-up-unit";
          this.circlePlayer1.push(circleLookUp);}
          break;
      }
    };
    return this;
  },

  player1: true,
  player2: false,

  field: [],
  trianglePlayer1: [],
  trianglePlayer2: [],
  squarePlayer1: [],
  squarePlayer2: [],
  circlePlayer1: [],
  circlePlayer2: [],

  selectUnit() {
    const cage = document.querySelectorAll(".cage");
    
    for (let i = 0; i < cage.length; i++) {
      cage[i].addEventListener("click", (event) => {
        if (cage[i].classList.contains("circle-look-up-unit")) {
          this.field.find((item, index) => {
            if (index === i) {
              plugа = null;
            } else {
              if (item.classList.contains("active")) {
                this.clearActive(index);
                cage[index].classList.remove("active");
              }
            }
          }); 

          if (cage[i].classList.contains("active")) {
            this.clearActive(i);
            cage[i].classList.remove("active");

          } else {
            cage[i].classList.add("active");
            if (i === 5 || i === 10 || i === 15 || i === 20) {

            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-5].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-5].classList.contains("circle-look-down-unit") 
                || this.field[i-5].classList.contains("triangle-look-down-unit")  
                || this.field[i-5].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-5].classList.add("pre-move");
                    this.field[i-5].append(preMovePoint);
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-5].append(preMovePoint);
                  this.field[i-5].classList.add("pre-move");
                }
              }
            }  

            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-4].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-4].classList.contains("circle-look-down-unit") 
                || this.field[i-4].classList.contains("triangle-look-down-unit")  
                || this.field[i-4].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-4].classList.add("pre-move");
                    this.field[i-4].append(preMovePoint);             
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-4].append(preMovePoint);
                  this.field[i-4].classList.add("pre-move");
                }
              }
            }  
            
            } else if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
              cage[i].classList.remove("active");
              alert("Дальше юнит не может пройти");
            } else if (i === 9 || i === 14 || i === 19 || i === 24) {
            
            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-6].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-6].classList.contains("circle-look-down-unit") 
                || this.field[i-6].classList.contains("triangle-look-down-unit")  
                || this.field[i-6].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-6].classList.add("pre-move");
                    this.field[i-6].append(preMovePoint);     
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-6].append(preMovePoint);
                  this.field[i-6].classList.add("pre-move");
                }
              }
            }  

            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-5].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-5].classList.contains("circle-look-down-unit") 
                || this.field[i-5].classList.contains("triangle-look-down-unit")  
                || this.field[i-5].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-5].classList.add("pre-move");
                    this.field[i-5].append(preMovePoint);
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-5].append(preMovePoint);
                  this.field[i-5].classList.add("pre-move");
                }
              }
            }  
            } else {
              {const preMovePoint = document.createElement("span");
              
              if (this.field[i-6].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-6].classList.contains("circle-look-down-unit") 
                || this.field[i-6].classList.contains("triangle-look-down-unit")  
                || this.field[i-6].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-6].classList.add("pre-move");
                    this.field[i-6].append(preMovePoint); 
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-6].append(preMovePoint);
                  this.field[i-6].classList.add("pre-move");
                }
              }
            }

            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-5].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-5].classList.contains("circle-look-down-unit") 
                || this.field[i-5].classList.contains("triangle-look-down-unit")  
                || this.field[i-5].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-5].classList.add("pre-move");
                    this.field[i-5].append(preMovePoint);
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-5].append(preMovePoint);
                  this.field[i-5].classList.add("pre-move");
                }
              }
            }  

            {const preMovePoint = document.createElement("span");
              
              if (this.field[i-4].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
              } else {
                if (this.field[i-4].classList.contains("circle-look-down-unit") 
                || this.field[i-4].classList.contains("triangle-look-down-unit")  
                || this.field[i-4].classList.contains("square-look-down-unit")) {
                    preMovePoint.className = "attack-move-point";
                    this.field[i-4].classList.add("pre-move");
                    this.field[i-4].append(preMovePoint);
                } else {
                  preMovePoint.className = "pre-move-point";
                  this.field[i-4].append(preMovePoint);
                  this.field[i-4].classList.add("pre-move");
                }
              }
            }  
            }
          }
        } else {
          if (cage[i].classList.contains("pre-move")) {
            this.cicleMove(i);
          } else {
            this.field.find((item, index) => {
              if (item.classList.contains("active")) {
                this.clearActive(index);
                cage[index].classList.remove("active");
              } 
            });  
          }      
        }
      })
    }
  },

  cicleMove(i) {
    const cage = document.querySelectorAll(".cage");
    this.field.find((item, index) => {
      if (item.classList.contains("active")) {
        cage[index].classList.remove("active");
        cage[index].innerHTML = "";
        cage[index].className = "cage empty-cage"; 

        this.clearActive(index);
        cage[i].innerHTML = "";
      } 
    });  
    let circleLookUp = document.createElement("span");
    circleLookUp.className = "circle-look-up";
    cage[i].append(circleLookUp);
    cage[i].className = "cage circle-look-up-unit";



  },

  // #1
  clearActive(index) {   
    
    if (index === 5 || index === 10 || index === 15 || index === 20) {
      if (this.field[index-5].classList.contains("circle-look-up-unit")) {
        plugа = 0;
      } else if (this.field[index-5].classList.contains("circle-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        this.field[index-5].append(circleLookDown);
        this.field[index-5].className = "cage circle-look-down-unit"
      } else if (this.field[index-5].classList.contains("circle-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "circle-look-down";
        this.field[index-5].append(triangleLookDown);
        this.field[index-5].className = "cage triangle-look-down-unit"
      } else if (this.field[index-5].classList.contains("triangle-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let squareLookDown = document.createElement("span");
        squareLookDown.className = "circle-look-down";
        this.field[index-5].append(squareLookDown);
        this.field[index-5].className = "cage square-look-down-unit"
      } else {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");
      } 
  
      if (this.field[index-4].classList.contains("circle-look-up-unit")) {
        plugа = 0;
      } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        this.field[index-4].append(circleLookDown);
        this.field[index-4].className = "cage circle-look-down-unit"
      } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "circle-look-down";
        this.field[index-4].append(triangleLookDown);
        this.field[index-4].className = "cage triangle-look-down-unit"
      } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let squareLookDown = document.createElement("span");
        squareLookDown.className = "circle-look-down";
        this.field[index-4].append(squareLookDown);
        this.field[index-4].className = "cage square-look-down-unit"
      } else {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");
      } 
    } else {
      if (this.field[index-6].classList.contains("circle-look-up-unit")) {
        plugа = 0;
      } else if (this.field[index-6].classList.contains("circle-look-down-unit")) {
        this.field[index-6].innerHTML = "";
        this.field[index-6].classList.remove("pre-move");

        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        this.field[index-6].append(circleLookDown);
        this.field[index-6].className = "cage circle-look-down-unit"
      } else if (this.field[index-6].classList.contains("square-look-down-unit")) {
        this.field[index-6].innerHTML = "";
        this.field[index-6].classList.remove("pre-move");

        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "circle-look-down";
        this.field[index-6].append(triangleLookDown);
        this.field[index-6].className = "cage triangle-look-down-unit"
      } else if (this.field[index-6].classList.contains("triangle-look-down-unit")) {
        this.field[index-6].innerHTML = "";
        this.field[index-6].classList.remove("pre-move");

        let squareLookDown = document.createElement("span");
        squareLookDown.className = "circle-look-down";
        this.field[index-6].append(squareLookDown);
        this.field[index-6].className = "cage square-look-down-unit"
      } else {
        this.field[index-6].innerHTML = "";
        this.field[index-6].classList.remove("pre-move");
      } 
  
      if (this.field[index-5].classList.contains("circle-look-up-unit")) {
        plugа = 0;
      } else if (this.field[index-5].classList.contains("circle-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        this.field[index-5].append(circleLookDown);
        this.field[index-5].className = "cage circle-look-down-unit"
      } else if (this.field[index-5].classList.contains("square-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "circle-look-down";
        this.field[index-5].append(triangleLookDown);
        this.field[index-5].className = "cage triangle-look-down-unit"
      } else if (this.field[index-5].classList.contains("triangle-look-down-unit")) {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");

        let squareLookDown = document.createElement("span");
        squareLookDown.className = "circle-look-down";
        this.field[index-5].append(squareLookDown);
        this.field[index-5].className = "cage square-look-down-unit"
      } else {
        this.field[index-5].innerHTML = "";
        this.field[index-5].classList.remove("pre-move");
      } 
  
      if (this.field[index-4].classList.contains("circle-look-up-unit")) {
        plugа = 0;
      } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        this.field[index-4].append(circleLookDown);
        this.field[index-4].className = "cage circle-look-down-unit"
      } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "circle-look-down";
        this.field[index-4].append(triangleLookDown);
        this.field[index-4].className = "cage triangle-look-down-unit"
      } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");

        let squareLookDown = document.createElement("span");
        squareLookDown.className = "circle-look-down";
        this.field[index-4].append(squareLookDown);
        this.field[index-4].className = "cage square-look-down-unit"
      } else {
        this.field[index-4].innerHTML = "";
        this.field[index-4].classList.remove("pre-move");
      } 
    }
    return this
  },

  showUnits() {
    let request = prompt(`Какие юниты показать?
    0 - Треугольники игрока 1;
    1 - Треугольники игрока 2;
    2 - Квадраты игрока 1;
    3 - Квадраты игрока 2;
    4 - Курги игрока 1;
    5 - Круги игрока 2.
    6 - Показать в консоли`,);

    if (+request === 0) {
      alert(this.trianglePlayer1);
    } else if (+request === 1) {
      alert(this.trianglePlayer2);
    } else if (+request === 2) {
      alert(this.squarePlayer1);
    } else if (+request === 3) {
      alert(this.squarePlayer2);
    } else if (+request === 4) {
      alert(this.circlePlayer1);
    } else if (+request === 5) {
      alert(this.circlePlayer2);
    } else if (+request === 6) {
      let unitsArr = [
        this.trianglePlayer1,
        this.trianglePlayer1,
        this.trianglePlayer2,
        this.squarePlayer1,
        this.squarePlayer2,
        this.circlePlayer1,
        this.circlePlayer2,
      ]
      let enteringConsole = prompt(`Какие юниты показать в консоли?
      0 - Треугольники игрока 1;
      1 - Треугольники игрока 2;
      2 - Квадраты игрока 1;
      3 - Квадраты игрока 2;
      4 - Курги игрока 1;
      5 - Круги игрока 2.
      6 - Всех`,);
      if (+enteringConsole === 6) {
        console.log(this.trianglePlayer1);  // Array [ span.triangle-look-up, span.triangle-look-up]
        console.log(this.trianglePlayer2); // Array [ span.triangle-look-down, span.triangle-look-down]
        console.log(this.squarePlayer1); // Array [ span.square-look-up]
        console.log(this.squarePlayer2); // Array [ span.square-look-down]
        console.log(this.circlePlayer1); // Array(3) [ span.circle-look-up, span.circle-look-up, span.circle-look-up]
        console.log(this.circlePlayer2); // Array(3) [ span.circle-look-down, span.circle-look-down, span.circle-look-down]
      } else if (typeof enteringConsole === null) {
        return
      } else
        console.log(unitsArr[enteringConsole]);

    } else if (typeof request === null) {
      return
    } else {
      alert("Ошибка ввода, попробуй ещё раз");
      this.showUnits();
    }
  }
}

const startGameBTN = document.querySelector(".border-menu__item");

startGameBTN.addEventListener("click", () => {
  document.querySelector(".border-menu").style = "display:none";
  setTimeout(() => GAME.createGame(), 100); 
  setTimeout(() => GAME.selectUnit(), 500);
  // setTimeout(() => GAME.moveUnit(), 600);
  setTimeout(() => console.log(GAME.field), 800);
});

showUnit.addEventListener("click", function () {
  GAME.showUnits();
});














