
window.addEventListener("mousewheel", WheelGo)

var cur_index = -1
var invoke = false
list = [{ ele: "other_0" }, { ele: "other_1" }, { ele: "other_2" }, { ele: "other_3" }, { ele: "a" }, { ele: "b" }, { ele: "c" }]
list = initSrollPosition("body", list)

function initSrollPosition(ele, list) {

    var container = document.querySelector(ele)
    for (var i in list) {
        list[i].position = document.querySelector("." + list[i].ele).offsetTop
    }
    return list
}


window.addEventListener("mousewheel", go)

window.addEventListener("scroll", judge)
function judge(e) {
    console.log(e)
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    var first_position = list[0].position / 2
    console.log(scrollPosition)
    if (scrollPosition >= first_position) {

    }

}

function loseWheelControl() {

    window.removeEventListener("mousewheel", go)
    console.log("loseWheelControl")

}

function stopDefault(e) {
    e.preventDefault()
    return false
}

function WheelGo(e) {
    //判断当前所处位置

    var isDown = e.deltaY > 0 ? true : false

    stopDefault(e)
    if (invoke) {
        return
    }
    moveTo(isDown)


}
function moveTo(isDown) {
    var cur_state
    if (isDown) {
        cur_index = cur_index >= list.length - 1 ? list.length - 1 : cur_index + 1
        var cur_state = list[cur_index]
    } else {
        cur_index = cur_index <= 0 ? 0 : cur_index - 1
        cur_state = list[cur_index]
    }

    console.log("invoke")

    invoke = true

    window.scrollTo({ top: (cur_state.position), left: 0, behavior: "smooth" })

    setTimeout(() => {
        invoke = false
    }, 150)
}
