let page = document.querySelector('html')

document.addEventListener('scroll', ()=>{
    height1 = document.getElementById('first').offsetHeight
    height2 = document.getElementById('second').offsetHeight/2
    height = height1 + height2
    if(page.scrollTop+window.innerHeight >= height){
        document.querySelector('.secondmaintext').style.animation = 'showsecondtextarea 1s cubic-bezier(0.42, 0, 0.19, 2) forwards'
        document.querySelector('.secondsubtext').style.animation = 'showsecondtextarea 1s cubic-bezier(0.42, 0, 0.19, 2) forwards .3s'

    }

    //console.log(`height1 = ${height1}\nРазница = ${page.scrollTop-window.innerHeight}\nwindow.innerHeight = ${window.innerHeight}\ndocument.body.scrollTop${document.body.scrollTop}`)
})