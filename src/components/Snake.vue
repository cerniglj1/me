<template>
  <div id="Snake">
    <div class="container">
      <!-- <div class="jumbotron">
        <h1>Snake with Artificial Intelligence</h1>
        <br />
        <h2>By Sam Zierler, Nick Agneta, and James Cerniglia</h2>
      </div>-->
      <div class="row">
        <div class="col-sm-4">
          <form>
            <div class="form-group row">
              <label for="search" class="col-sm-4 col-form-label">Search Function</label>
              <div class="col-sm-8">
                <select id="search" class="form-control form-control-sm">
                  <option class="dropdown-item">A*</option>
                  <option class="dropdown-item">BFS</option>
                  <option class="dropdown-item">DFS</option>
                </select>
              </div>
            </div>

            <div class="form-group row text-center">
              <div class="col-sm-12">
                <button
                  type="button"
                  v-if="gameOver"
                  class="btn btn-start"
                  v-on:click="Initialize"
                >Reset</button>
                <button type="button" class="btn btn-start" v-on:click="Start">Start</button>
              </div>
            </div>
            <!-- <div class="form-group row">
              <div class="col-sm-6">
                <button type="button" class="btn btn-outline-primary" v-on:click="Play">Play</button>
              </div>
            </div>-->
          </form>

          <div class="col-sm-12 text-center rounded game-data">
            <div class="auto">
              <p>
                Highscore:
                <span id="highscore">0</span>
              </p>
              <p>
                Current Score:
                <span id="score">0</span>
              </p>
              <p>
                <span id="gameover"></span>
              </p>
              <p>size:{{size}}</p>
              <p>rows:{{rows}}</p>
              <p>Start x: {{start_x}}</p>
              <p>Start y: {{start_y}}</p>
              <p>item_x: {{item_x}}</p>
              <p>item_y: {{item_y}}</p>
              <!-- <p>Grid: {{Grid}}</p> -->
              <p>block_width: {{block_width}}</p>
              <p>block_height: {{block_height}}</p>
              <p>Credits to:</p>
              <p>
                <a href="https://github.com/sam-zierler">Sam Zierler</a> and
                <a href="https://github.com/nkagneta">Nick Agneta</a>
              </p>
              <p>
                <a
                  href="https://github.com/sacert/Snake-Star/blob/master/javascript/snake.js"
                >Sacert</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center rounded">
            <div id="game">
              <canvas id="canvas" width="608" height="608"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
class CustomNode {
  constructor(x, y) {
    this.block = false; //
    this.x = x;
    this.y = y;
    this.path = false; //determines if the current node is the path to the end_*
    this.parent = null;
    this.gScore = -1; // score of getting from start to this node
    this.fScore = -1; // score of gScore plus hueristic value
    this.heuristicCalc = function(x_final, y_final) {
      return Math.floor(
        Math.abs(x_final - this.x) + Math.abs(y_final - this.y)
      ); //gets the absolute value of final x and final y and subtracts the current x and y from it to see the optimal path
    };
  }
}

export default {
  name: "Snake",
  components: {},
  data() {
    return {
      score: 0,
      highscore: 0,
      tail: 0,
      w: 608,
      h: 608,
      rows: 38,
      columns: 38,
      size: 38,
      block_width: 0, //math.floor returns a whole integer
      block_height: 0,
      gameOver: true,
      dir: "up",
      SearchChosen: "",
      foodImg: 0, // size of grid nxn

      // Create grid based on numbers given
      Grid: [],
      snake: null,
      // Starts at center of Rows and Columns given
      start_x: 0,
      start_y: 0,
      currentPath: 0,
      item_x: 0,
      item_y: 0
    };
  },
  methods: {
    createGrid: function(size) {
      // create array
      var grid = new Array(size);
      for (var i = 0; i < size; i++) {
        grid[i] = new Array(size);
      }

      // associate each element with a node object
      for (var z = 0; z < size; z++) {
        for (var j = 0; j < size; j++) {
          if (grid[z][j] != "-") {
            grid[z][j] = new CustomNode(j, z);
          }
        }
      }

      return grid;
    },
    Initialize: function Initialize() {
      this.foodImg = new Image();
      this.foodImg.src = "./assets/projects/SnakeAi/apple.png";
      this.Grid = this.createGrid(this.size);
      this.start_x = Math.floor(this.rows / 2);
      this.start_y = Math.floor(this.rows / 2);
      this.block_width = Math.floor(this.w / this.columns);
      this.block_height = Math.floor(this.h / this.rows);
      this.currentPath = new Array();
      this.item_x = Math.floor(Math.random() * this.size);
      this.item_y = Math.floor(Math.random() * this.size);
      this.Grid[this.item_y][this.item_x].block == true;
      this.snake = new Array();
      this.snake.push(this.Grid[this.start_y][this.start_x]);
      this.Grid[this.start_y][this.start_x].block = true;
      this.gameOver = false;
      var openSet = [];
      var tail = 0;
      var c = document.getElementsByTagName("canvas")[0];
      var context = c.getContext("2d");
      if (tail == 0) {
        tail = 2;
      }
      openSet.push(this.Grid[this.start_y][this.start_x]);
      var currNode = openSet[0];
      if (!this.gameOver) {
        for (var x = 0; x < this.columns; ++x) {
          for (var y = 0; y < this.rows; ++y) {
            if (y == this.item_y && x == this.item_x) {
              context.fillStyle = "yellow";
            } else if (currNode.x == x && currNode.y == y) {
              context.fillStyle = "red";
              // console.log("head");
            } else if (this.Grid[y][x].block) {
              context.fillStyle = "green";
            } else if (this.Grid[y][x].path) {
              context.fillStyle = "blue";
            } else {
              context.strokeStyle = "black";
              context.lineWidth = "1";
              context.fillStyle = "black";
            }

            context.fillRect(
              this.block_width * x,
              this.block_height * y,
              this.block_width,
              this.block_height
            );
            context.strokeRect(
              this.block_width * x,
              this.block_height * y,
              this.block_width,
              this.block_height
            );
          }
        }
      }
    },
    DrawBoard: function DrawBoard() {
      var openSet = [];
      var tail = 0;
      var c = document.getElementsByTagName("canvas")[0];
      var context = c.getContext("2d");
      if (tail == 0) {
        tail = 2;
      }

      openSet.push(this.Grid[this.start_y][this.start_x]);

      var currNode = openSet[0];
      if (!this.gameOver) {
        for (var x = 0; x < this.columns; ++x) {
          for (var y = 0; y < this.rows; ++y) {
            if (y == this.item_y && x == this.item_x) {
              context.fillStyle = "yellow";
            } else if (currNode.x == x && currNode.y == y) {
              context.fillStyle = "red";
              // console.log("head");
            } else if (this.Grid[y][x].block) {
              context.fillStyle = "green";
            } else if (this.Grid[y][x].path) {
              context.fillStyle = "blue";
            } else {
              context.strokeStyle = "black";
              context.lineWidth = "1";
              context.fillStyle = "black";
            }
            context.fillRect(
              this.block_width * x,
              this.block_height * y,
              this.block_width,
              this.block_height
            );
            context.strokeRect(
              this.block_width * x,
              this.block_height * y,
              this.block_width,
              this.block_height
            );
          }
        }
      }
    },
    Start: function Start() {
      //   this.Grid = this.createGrid(this.size);
      //   this.start_x = Math.floor(this.rows / 2);
      //   this.start_y = Math.floor(this.rows / 2);
      //   this.block_width = Math.floor(this.w / this.columns);
      //   this.block_height = Math.floor(this.h / this.rows);
      //   this.currentPath = new Array();
      //   this.item_x = Math.floor(Math.random() * this.size);
      //   this.item_y = Math.floor(Math.random() * this.size);
      //   this.Grid[this.item_y][this.item_x].block == true;
      //   this.snake = new Array();
      //   this.snake.push(this.Grid[this.start_y][this.start_x]);
      //   this.Grid[this.start_y][this.start_x].block = true;
      this.DrawBoard();
      setInterval(this.tick, 4);
      setInterval(this.DrawBoard, 4);
    },

    Play: function Play() {
      this.DrawBoard();
      setInterval(this.control, 50);
      setInterval(this.DrawBoard, 50);
    },
    change_search: function() {
      var message = new Object();
      message.do = "set_search";
      message.search = document.getElementById("search").value;
      this.search = message.search;
      this.SearchChosen = this.search;
      this.console.log("current search: " + message.search);
    },
    fScoreSort: function fScoreSort(a, b) {
      if (a.fScore < b.fScore) return -1;
      if (a.fScore > b.fScore) return 1;
      return 0;
    },
    //pretty much the same thing as the wikipedia page
    reconstruct_path: function reconstruct_path(current) {
      var currentNode = current;
      var totalPath = [current];

      // go through the parents to find how the route
      while (currentNode.parent != null) {
        totalPath.push(currentNode.parent);
        currentNode.path = true; //this is where the blue path is determined
        currentNode = currentNode.parent;
      }

      return totalPath;
    },
    isInBounds: function isInBounds(currentNode, i, j) {
      // out of bounds
      if (
        currentNode.x + j < 0 ||
        currentNode.x + j > this.size - 1 ||
        currentNode.y + i < 0 ||
        currentNode.y + i > this.size - 1
      ) {
        return false;
      }

      // check to see if block is within the grid
      if (this.Grid[currentNode.y + i][currentNode.x + j].block) {
        return false;
      }

      // skip the current node
      if (
        (currentNode.y + i == currentNode.y &&
          currentNode.x + j == currentNode.x) ||
        (i == -1 && j == -1) ||
        (i == -1 && j == 1) ||
        (i == 1 && j == -1) ||
        (i == 1 && j == 1)
      ) {
        return false;
      }

      // if it passed all possible checks
      return true;
    },
    aStar: function aStar() {
      // ending values
      var end_x = this.item_x;
      var end_y = this.item_y;

      // set of nodes that have already been looked at
      var closedSet = [];

      // set of nodes that are known but not looked at
      var openSet = [];

      // add the starting element to the open set
      openSet.push(this.Grid[this.start_y][this.start_x]);
      this.Grid[this.start_y][this.start_x].gScore = 0;
      this.Grid[this.start_y][this.start_x].fScore = this.Grid[this.start_y][
        this.start_x
      ].heuristicCalc(end_x, end_y); // sets fscore to the heauristic value of the x and y of the final coordinates

      // while open set is not empty
      while (openSet.length > 0) {
        //   sort based on fscore of each node
        openSet.sort(this.fScoreSort);
        var currentNode = openSet[0];

        if (currentNode.x == end_x && currentNode.y == end_y) {
          return this.reconstruct_path(currentNode); // return path
        }

        // remove current node from open set
        var index = openSet.indexOf(currentNode);
        openSet.splice(index, 1);

        closedSet.push(currentNode);

        // looking at all of the node's neighbours

        //iterates the y values "up" and "down"
        for (var i = -1; i < 2; i++) {
          //iterates the x values "left" and "right"
          for (var j = -1; j < 2; j++) {
            if (!this.isInBounds(currentNode, i, j)) {
              //makes sure the node is in the bounds
              continue;
            }

            var neighbour = this.Grid[currentNode.y + i][currentNode.x + j];

            // if node is within the closed set, it has already
            // been looked at - therefore skip it
            if (closedSet.indexOf(neighbour) != -1) {
              continue;
            }

            // set tentative score to gScore plus distance from current to neighbour
            // in this case, the weight is equal to 1 everywhere
            var tScore = neighbour.gScore + 1;

            // if neighbour is not in open set, add it
            if (openSet.indexOf(neighbour) == -1) {
              openSet.push(neighbour);
            }

            // this is a better path so set node's new values
            neighbour.parent = currentNode;
            neighbour.gScore = tScore;
            neighbour.fScore =
              neighbour.gScore + neighbour.heuristicCalc(end_x, end_y);
          }
        }
      }

      // the node was not found or could not be reached
      return false;
    },
    DFS: function DFS() {},
    BFS: function BFS() {
      // ending values
      var end_x = this.item_x;
      var end_y = this.item_y;
      // set of nodes that have already been looked at
      var closedSet = [];

      // set of nodes that are known but not looked at
      var openSet = [];
      openSet.push(this.Grid[this.start_y][this.start_x]);

      while (openSet.length > 0) {
        //   sort based on fscore of each node
        openSet.sort(this.fScoreSort);
        var currentNode = openSet[0];

        if (currentNode.x == end_x && currentNode.y == end_y) {
          return this.reconstruct_path(currentNode); // return path
        }

        // remove current node from open set
        var index = openSet.indexOf(currentNode);
        openSet.splice(index, 1);

        closedSet.push(currentNode);

        // looking at all of the node's neighbours

        //iterates the y values "up" and "down"
        for (var i = -1; i < 2; i++) {
          //iterates the x values "left" and "right"
          for (var j = -1; j < 2; j++) {
            if (!this.isInBounds(currentNode, i, j)) {
              //makes sure the node is in the bounds
              continue;
            }

            var neighbour = this.Grid[currentNode.y + i][currentNode.x + j];

            // if node is within the closed set, it has already
            // been looked at - therefore skip it
            if (closedSet.indexOf(neighbour) != -1) {
              continue;
            }

            // set tentative score to gScore plus distance from current to neighbour
            // in this case, the weight is equal to 1 everywhere
            var tScore = neighbour.gScore + 1;

            // if neighbour is not in open set, add it
            if (openSet.indexOf(neighbour) == -1) {
              openSet.push(neighbour);
            }

            // this is a better path so set node's new values
            neighbour.parent = currentNode;
            neighbour.gScore = tScore;
            neighbour.fScore =
              neighbour.gScore + neighbour.heuristicCalc(end_x, end_y);
          }
        }
      }
    },
    getNextMove: function getNextMove(end_x, end_y) {
      //   var nextLoc;
      var lowestfScore = -1;
      var lowestfScoreNode = null;
      for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
          if (!this.isInBounds(this.snake[0], i, j)) {
            continue;
          }

          var neighbour = this.Grid[this.snake[0].y + i][this.snake[0].x + j];

          // pathScore = fScore + pathLength
          var pathScore =
            neighbour.gScore +
            neighbour.heuristicCalc(end_x, end_y) +
            this.pathLength(neighbour) +
            1;

          // find the largest pathScore
          if (pathScore > lowestfScore) {
            lowestfScore = pathScore;
            lowestfScoreNode = neighbour;
          }
        }
      }

      return lowestfScoreNode;
    },
    pathLength: function pathLength(currentNode) {
      var currNode = currentNode;
      var numOfNodes = 0;

      var longestPathArray = new Array();

      for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
          if (!this.isInBounds(currNode, i, j)) {
            continue;
          }

          currNode = this.Grid[currNode.y + i][currNode.x + j];

          // increment the number of nodes and reset the check to looking at the top node
          numOfNodes++;
          i = -1;
          j = -1;

          longestPathArray.push(currNode);

          // check if no where else to go
          if (
            (!(currNode.x + 1 >= 0 && currNode.x + 1 < this.size) ||
              this.Grid[currNode.y][currNode.x + 1] == undefined ||
              this.Grid[currNode.y][currNode.x + 1].block) &&
            (!(currNode.x - 1 >= 0 && currNode.x - 1 < this.size) ||
              this.Grid[currNode.y][currNode.x - 1] == undefined ||
              this.Grid[currNode.y][currNode.x - 1].block) &&
            (!(currNode.y + 1 >= 0 && currNode.y + 1 < this.size) ||
              this.Grid[currNode.y + 1][currNode.x] == undefined ||
              this.Grid[currNode.y + 1][currNode.x].block) &&
            (!(currNode.y - 1 >= 0 && currNode.y - 1 < this.size) ||
              this.Grid[currNode.y - 1][currNode.x] == undefined ||
              this.Grid[currNode.y - 1][currNode.x].block)
          ) {
            // house keeping - reset blocks to false
            for (var h = 0; h < longestPathArray.length - 1; h++) {
              longestPathArray[h].block = false;
            }

            return numOfNodes;
          }
          currNode.block = true;
        }
      }
    },
    tick: function tick() {
      // keep track of where the trail is
      var tail;
      var path = this.aStar();
      if (!this.gameOver) {
        // if (this.SearchChosen == "A*") {
        //   path = this.aStar();
        // } else if (this.SearchChosen == "BFS") {
        //   path = this.BFS();
        // } else if (this.SearchChosen == "DFS") {
        //   path = this.DFS();
        // }
      }

      // clear the grid to perform the next set of calculations
      for (var j = 0; j < path.length - 1; j++) {
        path[j].parent = null;
        path[j].gScore = -1;
        path[j].fScore = -1;
      }

      for (var i = 0; i < this.Grid.length; i++) {
        for (var z = 0; z < this.Grid.length; z++) {
          this.Grid[i][z].parent = null;
          this.Grid[i][z].gScore = -1;
          this.Grid[i][z].fScore = -1;
        }
      }

      // if there is a path using A* to the item, go to the first node
      if (path) {
        var nextLoc = path[path.length - 2];
      } else {
        // otherwise, attempt to find the next best movement
        var nextNode = this.getNextMove(this.item_x, this.item_y);
        if (nextNode == null) {
          this.gameOver = true;
          document.getElementById("gameover").innerHTML = "Game Over";
          return;
        } else {
          nextLoc = nextNode;
        }
      }

      // set next location
      this.snake.unshift(nextLoc);
      nextLoc.block = true;
      this.start_x = nextLoc.x;
      this.start_y = nextLoc.y;

      // if not at the item, pop the tail
      if (!(nextLoc.x == this.item_x && nextLoc.y == this.item_y)) {
        tail = this.snake.pop();
        tail.path = false;
        tail.block = false;
        tail.gScore = -1;
        tail.fScore = -1;
      } else {
        // if at the item, set a new item location
        do {
          this.item_x = Math.floor(Math.random() * this.rows);
          this.item_y = Math.floor(Math.random() * this.rows);
          this.Grid[this.item_y][this.item_x].path = false;
        } while (this.Grid[this.item_y][this.item_x].block == true);

        this.score++;

        document.getElementById("score").innerHTML = this.score;
        if (this.score >= this.highscore) {
          localStorage.setItem("highscore", this.score);
          document.getElementById("highscore").innerHTML = this.score;
        }

        //housekeeping; clears all the blue path nodes
        for (var t = 0; t < this.Grid.length; t++) {
          for (var y = 0; y < this.Grid.length; y++) {
            this.Grid[t][y].path = false;
          }
        }
      }
    }
  },
  mounted() {
    this.Initialize();
  }
};
</script>
<style scoped>
#Snake {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: rgba(65, 65, 65, 1);
}
.jumbotron {
  background-color: rgb(17, 115, 139);
}
.dropdown-item {
  color: black;
}
.game-data {
  padding: 5px;
  box-shadow: 0 5px 15px rgba(94, 144, 125, 0.7);
}
.btn-start:hover {
  background-color: white;
}
.btn-start {
  width: 120px;
  border: 2px solid;
  color: rgba(94, 144, 125, 0.7);
  border-color: rgba(94, 144, 125, 0.7);
}
</style>