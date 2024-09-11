const downloadButton = [
    document.getElementsByClassName('downloadButton')[0],
    document.getElementsByClassName('downloadButton')[1],
    document.getElementsByClassName('downloadButton')[2]
]

const statusIndicators = [
    document.getElementsByClassName('statusIndicators')[0],
    document.getElementsByClassName('statusIndicators')[1],
    document.getElementsByClassName('statusIndicators')[2]
]

const atualStatus = [
    document.getElementsByClassName('atualStatus')[0],
    document.getElementsByClassName('atualStatus')[1],
    document.getElementsByClassName('atualStatus')[2]
]

const statusBar = [
    document.getElementsByClassName('statusBar')[0],
    document.getElementsByClassName('statusBar')[1],
    document.getElementsByClassName('statusBar')[2]
] 

const percentage = [
    document.getElementsByClassName('percentage')[0],
    document.getElementsByClassName('percentage')[1],
    document.getElementsByClassName('percentage')[2]
]

let percentageValue = 0

downloadButton[0].addEventListener('click',() => startDownload(0))
downloadButton[1].addEventListener('click',() => startDownload(1))
downloadButton[2].addEventListener('click',() => startDownload(2))



function updateStatus(id) {
    percentageValue+=10
    percentage[id].innerHTML = `${percentageValue}%`
    statusBar[id].style.width = `${percentageValue}%`
}


function startDownload(id) {
    const promise = new Promise(resolve => {
        setTimeout(()=> {
            if (percentageValue >= 100) {
                resolve('Concluído')
            }
        },10500)
        
        
    })
    
    promise.then((result)=> {
        atualStatus[id].innerHTML = result
        clearInterval(updateStatusFunction)
    })
    
    const updateStatusFunction = setInterval(() => updateStatus(id),1000)
}