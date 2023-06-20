console.log("我是PC端js");
let audio = document.getElementById("myaudio");
let bofngnaniu = document.getElementById("song-audio-button");

bofngnaniu.onclick = function () {
  body.classList.toggle("Song-Button");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

let txt = document.getElementById("lrc");
let con = document.getElementById("content");
let lrc = txt.value;
let lrcArr = lrc.split("[");
let html = ""; //空变量
for (let i = 0; i < lrcArr.length; i++) {
  let arr = lrcArr[i].split("]");
  console.log(arr[0]);
  let alltime = arr[0].split(".");
  // console.log(alltime);
  let time = alltime[0].split(":");
  // console.log(time);
  // 把时间转化为秒钟
  let timer = time[0] * 60 + time[1] * 1;
  // console.log(timer);
  let text = arr[1]; //文本
  if (text) {
    //用一个p标签来保存具体的每一条歌词
    html +=
      "<p id=" + timer + " " + "class=Beta-3-lrc-1" + " >" + text + "</p>";
  }
  con.innerHTML = html; //把html的文本添加到歌词盒子里面
}

let op = con.getElementsByTagName("p");
let num = 0;
//监听音乐播放进度来实现歌曲同步
audio.addEventListener("timeupdate", function () {
  //获取当前播放时间
  let curtime = parseInt(this.currentTime);
  // console.log(curtime);
  //把当前的时间和p标签的id名进行对比 若如果相同就让p标签变色
  if (document.getElementById(curtime)) {
    for (let i = 0; i < op.length; i++) {
      op[i].style.cssText = "color:#ccc";
    }
    document.getElementById(curtime).style.cssText =
      "color:#f3f7ff; font-size: 2rem;";

    if (op[num + 0].id == curtime) {
      //判断成功一次mun+1下次虽然curtime可能不变但是num变了所以每次只能判断一次
      con.style.top = -2 * num + "rem";
      // $(".Beta-3-lrc-1").style.top = -13 * num + "mm";
      // $(".song-textarea-font").css("margin-top") = -13 * num + "mm";
      num++;
    }
  }
});

