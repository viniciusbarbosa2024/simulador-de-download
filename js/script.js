const downloadButton = [
    document.getElementsByClassName('downloadButton')[0],
    document.getElementsByClassName('downloadButton')[1],
    document.getElementsByClassName('downloadButton')[2]
]

const statusIndicators1 = document.getElementById('statusIndicators1')

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

downloadButton[0].addEventListener('click',startDownload)
downloadButton[1].addEventListener('click',startDownload)
downloadButton[2].addEventListener('click',startDownload)



function updateStatus() {
    percentageValue+=10
    percentage[0].innerHTML = `${percentageValue}%`
    statusBar[0].style.width = `${percentageValue}%`
}


function startDownload() {
    const promise = new Promise(resolve => {
        setTimeout(()=> {
            if (percentageValue >= 100) {
                resolve('Concluído')
            }
        },10500)
        
        
    })
    
    promise.then((result)=> {
        statusIndicators1.innerHTML = result
        clearInterval(updateStatusFunction)
    })
    
    const updateStatusFunction = setInterval(updateStatus,1000)
}