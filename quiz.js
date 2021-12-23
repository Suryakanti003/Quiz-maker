let topics= []
let newTopic = document.getElementById("topic_new");
function setup(){
  createCanvas(400,400);
  newTopic.addEventListener("onClick",()=>{console.log("this is working!!");
                                           let topic = {questions:[],name:""};
                                           topics.push(topic);});
}

function draw(){
  background(127);
}
