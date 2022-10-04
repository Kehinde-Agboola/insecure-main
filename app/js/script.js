const hambuggerBtn = document.querySelector('.hambugger')
mobileBtn = document.querySelector('.mobile')
link1 = document.querySelector('.mobile >a:first-child')
link2 = document.querySelector('.mobile >a:nth-child(2)')
link3 = document.querySelector('.mobile>a:nth-child(3)')
link4 = document.querySelector('.mobile>a:last-child')
body  = document.querySelector('body')


hambuggerBtn.addEventListener('click', () => {
    
    if(mobileBtn.classList.contains('mobileSlideIn')){
        hambuggerBtn.src = '/images/icon-hamburger.svg'
        mobileBtn.classList.remove('mobileSlideIn')
        mobileBtn.classList.add('mobileSlideOut')



        link1.classList.remove('link1')
        link2.classList.remove('link2')
        link3.classList.remove('link2')
        link4.classList.remove('link4')
       
        body.classList.remove('noscroll')


    }

    else{
        
        hambuggerBtn.src = '/images/icon-close.svg'
        mobileBtn.classList.remove('mobileSlideOut')
        mobileBtn.classList.add('mobileSlideIn')

        
        link1.classList.add('link1')
        link2.classList.add('link2')
        link3.classList.add('link2')
        link4.classList.add('link4')
        
        body.classList.add('noscroll')
    }
})