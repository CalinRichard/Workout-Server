const lastUpdatesBtn = document.getElementById('last-updates-btn')
lastUpdatesBtn.addEventListener('click', showLastUpdates)

function showLastUpdates() {
    const lastUpdatesRow = document.getElementById('last-updates-row')
    if(lastUpdatesRow.className == "row last-updates-row-none"){
        lastUpdatesRow.className = "row last-updates-row-block"
        lastUpdatesRow.scrollIntoView()
    }else{
        lastUpdatesRow.className = "row last-updates-row-none"
    }
    
}