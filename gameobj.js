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
              this.createPremoves(i, 5);
              this.createPremoves(i, 4); 
            } else if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
              cage[i].classList.remove("active");
              alert("Дальше юнит не может пройти");
            } else if (i === 9 || i === 14 || i === 19 || i === 24) {
              this.createPremoves(i, 6);
              this.createPremoves(i, 5);
            } else {
              this.createPremoves(i, 6);
              this.createPremoves(i, 5);
              this.createPremoves(i, 4);
            }
          }
        } else if (cage[i].classList.contains("triangle-look-up-unit")) {
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
            if (i === 5 || i === 15) {
              this.createPremoves(i, 4);
              this.createPremoves(i, -6); 
            } else if (i === 1 || i === 3) {
              this.createPremoves(i, -4);
              this.createPremoves(i, -6);
            } else if (i === 9 || i === 19) {
              this.createPremoves(i, 6);
              this.createPremoves(i, -4);
            } else if (i === 21 || i === 23) {
              this.createPremoves(i, 6); 
              this.createPremoves(i, 4);  
            } else {
              this.createPremoves(i, 6);
              this.createPremoves(i, 4); 
              this.createPremoves(i, -6);  
              this.createPremoves(i, -4);
            }
          }
        } else {
          if (cage[i].classList.contains("pre-move")) {
            this.player1Move(i); 
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

  createPremoves(i, premoveLocation) {
    let preMovePoint = document.createElement("span");         
    if (this.field[i-premoveLocation].classList.contains("circle-look-up-unit")
    || this.field[i-premoveLocation].classList.contains("triangle-look-up-unit")
    || this.field[i-premoveLocation].classList.contains("square-look-up-unit")) {
      plugа = 0;
    } else {
      if (this.field[i-premoveLocation].classList.contains("circle-look-down-unit") 
      || this.field[i-premoveLocation].classList.contains("triangle-look-down-unit")  
      || this.field[i-premoveLocation].classList.contains("square-look-down-unit")) {
          preMovePoint.className = "attack-move-point";
          this.field[i-premoveLocation].classList.add("pre-move");
          this.field[i-premoveLocation].append(preMovePoint);
      } else {
        preMovePoint.className = "pre-move-point";
        this.field[i-premoveLocation].append(preMovePoint);
        this.field[i-premoveLocation].classList.add("pre-move");
      }
    }
  },

  player1Move(i) {
    const cage = document.querySelectorAll(".cage");
    this.field.find((item, index) => {
      if (item.classList.contains("active") && item.classList.contains("circle-look-up-unit")) {
        this.clearActive(index);
        this.player1Step(cage, index, i, "circle-look-up", "cage circle-look-up-unit");
      } else if (item.classList.contains("active") && item.classList.contains("triangle-look-up-unit")) {
        this.clearActive(index);
        this.player1Step(cage, index, i, "triangle-look-up", "cage triangle-look-up-unit");
        this.field.filter((item, index) => {
          if (item.classList.contains("pre-move") 
          && !item.classList.contains("circle-look-down-unit")
          && !item.classList.contains("triangle-look-down-unit")
          && !item.classList.contains("square-look-down-unit")) {
            item.innerHTML="";
            item.classList.remove("pre-move");
          }
        })
      }
    });  
  },

  player1Step(cage, index, i, unitClassName, cageClassName) {
    cage[index].classList.remove("active");
    cage[index].innerHTML = "";
    cage[index].className = "cage empty-cage"; 
    cage[i].innerHTML = "";

    let newSpan = document.createElement("span");
    newSpan.className = unitClassName;
    cage[i].append(newSpan);
    cage[i].className = cageClassName;
  },
  
  clearActive(index) {   
    if (this.field[index].classList.contains("circle-look-up-unit")) {
      if (index === 5 || index === 10 || index === 15 || index === 20) {
        if (this.field[index-5].classList.contains("circle-look-up-unit")
        || this.field[index-5].classList.contains("triangle-look-up-unit")
        || this.field[index-5].classList.contains("square-look-up-unit")) {
          plugа = 0;
        } else if (this.field[index-5].classList.contains("circle-look-down-unit")) {
          this.Player1ClearEnemyCircle(index, 5);
        } else if (this.field[index-5].classList.contains("square-look-down-unit")) {
          this.Player1ClearEnemySquare(index, 5);
        } else if (this.field[index-5].classList.contains("triangle-look-down-unit")) {
          this.Player1ClearEnemyTriangle(index, 5);
        } else {
          this.field[index-5].innerHTML = "";
          this.field[index-5].classList.remove("pre-move");
        } 
    
        if (this.field[index-4].classList.contains("circle-look-up-unit")
        || this.field[index-4].classList.contains("triangle-look-up-unit")
        || this.field[index-4].classList.contains("square-look-up-unit")) {
          plugа = 0;
        } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
          this.Player1ClearEnemyCircle(index, 4);
        } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
          this.Player1ClearEnemySquare(index, 4);
        } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
          this.Player1ClearEnemyTriangle(index, 4);
        } else {
          this.field[index-4].innerHTML = "";
          this.field[index-4].classList.remove("pre-move");
        } 
      } else {

        if (this.field[index-6].classList.contains("circle-look-up-unit")
        || this.field[index-6].classList.contains("triangle-look-up-unit")
        || this.field[index-6].classList.contains("square-look-up-unit")) {
          plugа = 0;
        } else if (this.field[index-6].classList.contains("circle-look-down-unit")) {
          this.Player1ClearEnemyCircle(index, 6);
        } else if (this.field[index-6].classList.contains("square-look-down-unit")) {
          this.Player1ClearEnemySquare(index, 6);
        } else if (this.field[index-6].classList.contains("triangle-look-down-unit")) {
          this.Player1ClearEnemyTriangle(index, 6);
        } else {
          this.field[index-6].innerHTML = "";
          this.field[index-6].classList.remove("pre-move");
        } 
    
        if (this.field[index-5].classList.contains("circle-look-up-unit")
        || this.field[index-5].classList.contains("triangle-look-up-unit")
        || this.field[index-5].classList.contains("square-look-up-unit")) {
          plugа = 0;
        } else if (this.field[index-5].classList.contains("circle-look-down-unit")) {
          this.Player1ClearEnemyCircle(index, 5);
        } else if (this.field[index-5].classList.contains("square-look-down-unit")) {
          this.Player1ClearEnemySquare(index, 5);
        } else if (this.field[index-5].classList.contains("triangle-look-down-unit")) {
          this.Player1ClearEnemyTriangle(index, 5);
        } else {
          this.field[index-5].innerHTML = "";
          this.field[index-5].classList.remove("pre-move");
        } 
    
        if (this.field[index-4].classList.contains("circle-look-up-unit")
        || this.field[index-4].classList.contains("triangle-look-up-unit")
        || this.field[index-4].classList.contains("square-look-up-unit")) {
          plugа = 0;
        } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
          this.Player1ClearEnemyCircle(index, 4);
        } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
          this.Player1ClearEnemySquare(index, 4);
        } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
          this.Player1ClearEnemyTriangle(index, 4);
        } else {
          this.field[index-4].innerHTML = "";
          this.field[index-4].classList.remove("pre-move");
        } 
      }
      // triangleLookUp
    } else if (this.field[index].classList.contains("triangle-look-up-unit")) {
        if (index === 5 || index === 15) {
          if (this.field[index-4].classList.contains("circle-look-up-unit")
          || this.field[index-4].classList.contains("triangle-look-up-unit")
          || this.field[index-4].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 4);
          } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 4);
          } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 4);
          } else {
            this.field[index-4].innerHTML = "";
            this.field[index-4].classList.remove("pre-move");
          } 
      
          if (this.field[index+6].classList.contains("circle-look-up-unit")
          || this.field[index+6].classList.contains("triangle-look-up-unit")
          || this.field[index+6].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index+6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -6);
          } else if (this.field[index+6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -6);
          } else if (this.field[index+6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -6);
          } else {
            this.field[index+6].innerHTML = "";
            this.field[index+6].classList.remove("pre-move");
    
          } 
        } else if (index === 21 || index === 23) {
          if (this.field[index-6].classList.contains("circle-look-up-unit")
          || this.field[index-6].classList.contains("triangle-look-up-unit")
          || this.field[index-6].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 6);
          } else if (this.field[index-6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 6);
          } else if (this.field[index-6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 6);
          } else {
            this.field[index-6].innerHTML = "";
            this.field[index-6].classList.remove("pre-move");
          } 
      
          if (this.field[index-4].classList.contains("circle-look-up-unit")
          || this.field[index-4].classList.contains("triangle-look-up-unit")
          || this.field[index-4].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 4);
          } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 4);
          } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 4);
          } else {
            this.field[index-4].innerHTML = "";
            this.field[index-4].classList.remove("pre-move");
          }

        } else if (index === 9 || index === 19) {
          if (this.field[index-6].classList.contains("circle-look-up-unit")
          || this.field[index-6].classList.contains("triangle-look-up-unit")
          || this.field[index-6].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 6);
          } else if (this.field[index-6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 6);
          } else if (this.field[index-6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 6);
          } else {
            this.field[index-6].innerHTML = "";
            this.field[index-6].classList.remove("pre-move");
          } 
      
          if (this.field[index+4].classList.contains("circle-look-up-unit")
          || this.field[index+4].classList.contains("triangle-look-up-unit")
          || this.field[index+4].classList.contains("square-look-up-unit")) {
            plugа = 0;
            // Менял здесь код 
          } else if (this.field[index+4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -4);
          } else if (this.field[index+4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -4);
          } else if (this.field[index+4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -4);
          } else {
            this.field[index+4].innerHTML = "";
            this.field[index+4].classList.remove("pre-move");
          }
        } else if (index === 1 || index === 3) {
          if (this.field[index+6].classList.contains("circle-look-up-unit")
          || this.field[index+6].classList.contains("triangle-look-up-unit")
          || this.field[index+6].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index+6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -6);
          } else if (this.field[index+6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -6);
          } else if (this.field[index+6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -6);
          } else {
            this.field[index+6].innerHTML = "";
            this.field[index+6].classList.remove("pre-move");
          } 
          // здесь тоже менял код
          if (this.field[index+4].classList.contains("circle-look-up-unit")
          || this.field[index+4].classList.contains("triangle-look-up-unit")
          || this.field[index+4].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index+4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -4);
          } else if (this.field[index+4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -4);
          } else if (this.field[index+4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -4);
          } else {
            this.field[index+4].innerHTML = "";
            this.field[index+4].classList.remove("pre-move");
          }
        } else {
          if (this.field[index-6].classList.contains("circle-look-up-unit")
          || this.field[index-6].classList.contains("triangle-look-up-unit")
          || this.field[index-6].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 6);
          } else if (this.field[index-6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 6);
          } else if (this.field[index-6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 6);
          } else {
            this.field[index-6].innerHTML = "";
            this.field[index-6].classList.remove("pre-move");
          } 
      
          if (this.field[index-4].classList.contains("circle-look-up-unit")
          || this.field[index-4].classList.contains("triangle-look-up-unit")
          || this.field[index-4].classList.contains("square-look-up-unit")) {
            plugа = 0;
          } else if (this.field[index-4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, 4);
          } else if (this.field[index-4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, 4);
          } else if (this.field[index-4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, 4);
          } else {
            this.field[index-4].innerHTML = "";
            this.field[index-4].classList.remove("pre-move");
          }
          
          if (this.field[index+4].classList.contains("circle-look-up-unit")
          || this.field[index+4].classList.contains("triangle-look-up-unit")
          || this.field[index+4].classList.contains("square-look-up-unit")){
            plugа = 0;
          } else if (this.field[index+4].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -4);
          } else if (this.field[index+4].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -4);
          } else if (this.field[index+4].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -4);
          } else {
            this.field[index+4].innerHTML = "";
            this.field[index+4].classList.remove("pre-move");
          } 

          if (this.field[index+6].classList.contains("circle-look-up-unit")
          || this.field[index+6].classList.contains("triangle-look-up-unit")
          || this.field[index+6].classList.contains("square-look-up-unit")){
            plugа = 0;
          } else if (this.field[index+6].classList.contains("circle-look-down-unit")) {
            this.Player1ClearEnemyCircle(index, -6);
          } else if (this.field[index+6].classList.contains("square-look-down-unit")) {
            this.Player1ClearEnemySquare(index, -6);
          } else if (this.field[index+6].classList.contains("triangle-look-down-unit")) {
            this.Player1ClearEnemyTriangle(index, -6);
          } else {
            this.field[index+6].innerHTML = "";
            this.field[index+6].classList.remove("pre-move");
          } 
        } 
    }
    return this
  },

  Player1ClearEnemyCircle(index, enemyLocation) {
    this.field[index-enemyLocation].innerHTML = "";
    this.field[index-enemyLocation].classList.remove("pre-move");

    let circleLookDown = document.createElement("span");
    circleLookDown.className = "circle-look-down";
    this.field[index-enemyLocation].append(circleLookDown);
    this.field[index-enemyLocation].className = "cage circle-look-down-unit";
  },

  Player1ClearEnemySquare(index, enemyLocation) {
    this.field[index-enemyLocation].innerHTML = "";
    this.field[index-enemyLocation].classList.remove("pre-move");

    let squareLookDown = document.createElement("span");
    squareLookDown.className = "square-look-down";
    this.field[index-enemyLocation].append(squareLookDown);
    this.field[index-enemyLocation].className = "cage square-look-down-unit";
  },

  Player1ClearEnemyTriangle(index, enemyLocation) {
    this.field[index-enemyLocation].innerHTML = "";
    this.field[index-enemyLocation].classList.remove("pre-move");

    let triangleLookDown = document.createElement("span");
    triangleLookDown.className = "triangle-look-down";
    this.field[index-enemyLocation].append(triangleLookDown);
    this.field[index-enemyLocation].className = "cage triangle-look-down-unit";
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














