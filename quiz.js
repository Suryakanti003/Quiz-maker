let topics = [];

let newTopic = document.getElementById("topic_new");
let topicName = document.getElementById("topic_name");
let deleteTopic = document.getElementById("topic_delete");

function setup() {
  createCanvas(600, 600);
  
  newTopic.addEventListener("click", makeNewTopic);
  deleteTopic.addEventListener("click", ()=>topics.pop());
  
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(127);
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (topics[3 * i + j]) {
        rect((j + 1) * width / 3 - 100, (i + 1) * height / 2 - 100, 100, 100);
        text(topics[3 * i + j].name, (j + 1) * width / 3 - 100, (i + 1) * height / 2 - 100);
      }
    }
  }
}

function makeNewTopic() {
  if (topicName.value) {
    let topic = { questions: [], name: topicName.value };
    topics.push(topic);
    topicName.value = "";
  } else alert("Please put a topic name");
}
