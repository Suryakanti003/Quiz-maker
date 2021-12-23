let topics= []
let newTopic = document.getElementById("topic_new");
let topicName = document.getElementById("topic_name");
function setup(){
  createCanvas(400,400);
  newTopic.addEventListener("click", makeNewTopic());
}

function draw(){
  background(127);
}

function makeNewTopic(){
  console.log("this is finally working");
  if(topicName.value){
    let topic = {questions:[],
                 name = topicName.value}
    topics.push(topic);
  }else alert("Please put a topic name");
}
