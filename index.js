
let myleads = []
const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")
const inputdel = document.getElementById("input-del")
const inputtab = document.getElementById("input-tab")
let leadsls = JSON.parse(localStorage.getItem("myleads"))

function render(leads){
    let listItems = ""

    for(let i = 0; i< leads.length; i++){
        //listItems += "<li><a target='_blank' href='" + leads[i] + "'>"+ leads[i]  + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
        //const li = document.createElement("li")
        //li.textContent = leads[i]
        //ulel.append(li)
    }
    ulel.innerHTML = listItems
}
if(leadsls){
    myleads = leadsls
    render(myleads)
}

inputbtn.addEventListener("click", function(){
    //console.log("button clicked");
    myleads.push(inputel.value)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    inputel.value = ""
    render(myleads)
})
inputdel.addEventListener("dblclick", function(){
    //console.log("clicked")
    localStorage.clear()
    myleads = []
    render(myleads)
})
inputtab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
        console.log(tabs);
    })
})

