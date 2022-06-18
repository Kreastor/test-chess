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
      if (i === 2 || i === 4) {
        let triangleLookDown = document.createElement("span");
        triangleLookDown.className = "triangle-look-down";
        cage.append(triangleLookDown);
        cage.className = "cage triangle-look-down-unit";
        this.trianglePlayer2.push(triangleLookDown);
      } else if (i === 3) {
        let squareLookDown = document.createElement("span");
        squareLookDown.className = "square-look-down";
        cage.append(squareLookDown);
        cage.className = "cage square-look-down-unit";
        this.squarePlayer2.push(squareLookDown);
      } else if (i === 7 || i === 8 || i === 9) {
        let circleLookDown = document.createElement("span");
        circleLookDown.className = "circle-look-down";
        cage.append(circleLookDown);
        cage.className = "cage circle-look-down-unit";
        this.circlePlayer2.push(circleLookDown);
      } else if (i === 22 || i === 24) {
        let triangleLookUp = document.createElement("span");
        triangleLookUp.className = "triangle-look-up";
        cage.append(triangleLookUp);
        cage.className = "cage triangle-look-up-unit";
        this.trianglePlayer1.push(triangleLookUp);
      } else if (i === 23) {
        let squareLookUp = document.createElement("span");
        squareLookUp.className = "square-look-up";
        cage.append(squareLookUp);
        cage.className = "cage square-look-up-unit";
        this.squarePlayer1.push(squareLookUp);
      } else if (i === 17 || i === 18 || i === 19) {
        let circleLookUp = document.createElement("span");
        circleLookUp.className = "circle-look-up";
        cage.append(circleLookUp);
        cage.className = "cage circle-look-up-unit";
        this.circlePlayer1.push(circleLookUp);
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

    /* TODO: make a separate method for active pressing
      this.circlePlayer1[1].style.backgroundColor="rgb(0, 255, 0)" 
      ↓↓↓↓↓↓↓↓↓↓
    */

    for (let i = 0; i < cage.length; i++) {
      cage[i].addEventListener("click", (event) => {
        if (cage[i].classList.contains("circle-look-up-unit")) {
          this.field.find((item, index) => {
            if (index === i) {
              let plugа = null;
            } else {
              if (item.classList.contains("active")) {
                if (this.field[index-6].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-6].innerHTML = "";
                  this.field[index-6].classList.remove("pre-move");
                } 
            
                if (this.field[index-5].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-5].innerHTML = "";
                  this.field[index-5].classList.remove("pre-move");
                }

                if (this.field[index-4].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-4].innerHTML = "";
                  this.field[index-4].classList.remove("pre-move");
                }

                cage[index].classList.remove("active");
              }
            }
          }); 

          if (cage[i].classList.contains("active")) {

            if (this.field[i-6].classList.contains("circle-look-up-unit")) {
              plugа = 0;
            } else {
              this.field[i-6].innerHTML = "";
              this.field[i-6].classList.remove("pre-move");
            } 
        
            if (this.field[i-5].classList.contains("circle-look-up-unit")) {
              plugа = 0;
            } else {
              this.field[i-5].innerHTML = "";
              this.field[i-5].classList.remove("pre-move");
            }

            if (this.field[i-4].classList.contains("circle-look-up-unit")) {
              plugа = 0;
            } else {
              this.field[i-4].innerHTML = "";
              this.field[i-4].classList.remove("pre-move");
            }
            cage[i].classList.remove("active");

          } else {
            cage[i].classList.add("active");
            {const preMovePoint = document.createElement("span");
            preMovePoint.className = "pre-move-point";
            if (this.field[i-6].classList.contains("circle-look-up-unit")) {
                plugа = 0;
              } else {
                this.field[i-6].append(preMovePoint);
                this.field[i-6].classList.add("pre-move");
              }
            }
            {const preMovePoint = document.createElement("span");
            preMovePoint.className = "pre-move-point";
            if (this.field[i-5].classList.contains("circle-look-up-unit")) {
                plugа = 0;
              } else {
                this.field[i-5].append(preMovePoint);
                this.field[i-5].classList.add("pre-move");
              }
            }
  
            {const preMovePoint = document.createElement("span");
            preMovePoint.className = "pre-move-point";
            if (this.field[i-4].classList.contains("circle-look-up-unit")) {
                plugа = 0;
              } else {
                this.field[i-4].append(preMovePoint);
                this.field[i-4].classList.add("pre-move");
              }
            }     
          }
        } else {
          if (cage[i].classList.contains("pre-move")) {
            this.cicleMove(i);
          } else {
            this.field.find((item, index) => {
              if (item.classList.contains("active")) {
                if (this.field[index-6].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-6].innerHTML = "";
                  this.field[index-6].classList.remove("pre-move");
                } 
            
                if (this.field[index-5].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-5].innerHTML = "";
                  this.field[index-5].classList.remove("pre-move");
                }

                if (this.field[index-4].classList.contains("circle-look-up-unit")) {
                  plugа = 0;
                } else {
                  this.field[index-4].innerHTML = "";
                  this.field[index-4].classList.remove("pre-move");
                }

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

        if (this.field[index-6].classList.contains("circle-look-up-unit")) {
          plugа = 0;
        } else {
          this.field[index-6].innerHTML = "";
          this.field[index-6].classList.remove("pre-move");
        } 
    
        if (this.field[index-5].classList.contains("circle-look-up-unit")) {
          plugа = 0;
        } else {
          this.field[index-5].innerHTML = "";
          this.field[index-5].classList.remove("pre-move");
        }

        if (this.field[index-4].classList.contains("circle-look-up-unit")) {
          plugа = 0;
        } else {
          this.field[index-4].innerHTML = "";
          this.field[index-4].classList.remove("pre-move");
        }
      } 
    });  
    let circleLookUp = document.createElement("span");
    circleLookUp.className = "circle-look-up";
    cage[i].append(circleLookUp);
    cage[i].className = "cage circle-look-up-unit";
    
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














