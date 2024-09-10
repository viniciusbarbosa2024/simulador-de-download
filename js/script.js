const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

const statusBar1 = document.getElementById('statusBar1')
const statusBar2 = document.getElementById('statusBar2')
const statusBar3 = document.getElementById('statusBar3')


const percentage1 = document.getElementById('percentage1')
const percentage2 = document.getElementById('percentage2')
const percentage3 = document.getElementById('percentage3')

let percentageValue = 0

button1.addEventListener('click',startDownload)
button2.addEventListener('click',startDownload)
button3.addEventListener('click',startDownload)




function updateStatus() {
    percentageValue+=1
    percentage1.innerHTML = `${percentageValue}%`
    statusBar1.style.width = `${percentageValue}%`

}


function startDownload() {
    setInterval(updateStatus,1000)
}