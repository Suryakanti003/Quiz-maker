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
        rect((j+1)*width/3-150, (i+1)*height/(2-150, 100, 100);
      }
    }
  }  
}

function makeNewTopic(){
  if(topicName.value){
    let topic = {questions : [],
                 name : topicName.value}
    topics.push(topic);
    topicName.value="";
  }else alert("Please put a topic name");
}
