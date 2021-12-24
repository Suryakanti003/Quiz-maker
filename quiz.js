let topics= []
let newTopic = document.getElementById("topic_new");
let topicName = document.getElementById("topic_name");
function setup(){
  createCanvas(800,800);
  newTopic.addEventListener("click", makeNewTopic);
  rectMode(CENTER);
}

function draw(){
  background(127);
  
  for(let i=0;i<2;i++){
    for(let j=0; j<3;j++){
      if(topics[3*i+j]){
        rect(width/(j+1), height/(i+1), 200, 200);
      }
    }
  }  
}

function makeNewTopic(){
  console.log("this is finally working");
  if(topicName.value){
    let topic = {questions : [],
                 name : topicName.value}
    topics.push(topic);
    topicName.value="";
  }else alert("Please put a topic name");
}
