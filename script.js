setTimeout(function(){
    document.body.className="";
},500);


const zindex = (el) => {

};

const closeEyes = () => {
  let closed = document.querySelectorAll(".eyes-closed");
  closed.forEach(el => {
    el.style.zIndex = "2";
    setTimeout(function() {
      el.style.zIndex = "0";
    }, 50);
  });
};

const randRange = (data) => {
  let newTime = data[Math.floor(data.length * Math.random())];
  return newTime;
};

const toggleSomething = () => {
  let timeArray = new Array(3000, 5000, 8000);

  closeEyes();

  clearInterval(timer);
  timer = setInterval(toggleSomething, randRange(timeArray));
}

let timer = setInterval(toggleSomething, 2000);
// 1000 = Initial timer when the page is first loaded
