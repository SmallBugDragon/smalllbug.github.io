fetch("https://api.imlazy.ink/mcapi/?host=mc.edgame.top&port=25565&name=&getbg=&type=json")
.then((res) =>res.json())
.then(data => {
    const status = document.getElementById("status")
    const players_online = document.getElementById("players_online")
    status.style.fontWeight = "bold"
    status.style.fontStyle = "normal"
    status.style.fontSize = "150%"
    players_online.style.fontSize = "200%"
    if (data.status == "在线") {
        status.innerText = "服务器已开启！"
        status.style.color = "rgb(21,174,103)"
        players_online.innerText = data.players_online + " / " + data.players_max
    }
    else{
        if (data.status == "离线"){
            status.innerText = "服务器已关闭！"
            status.style.color = "rgb(21,174,103)"
        }
    }
})
.catch(console.error)