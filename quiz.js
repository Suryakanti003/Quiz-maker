let newTopic = document.getElementById("topic_new");
function setup(){
  createCanvas(400,400);
  newTopic.addEventListener("onClick",()=>console.log("this is working!!"));
}

function draw(){
  background(127);
}
