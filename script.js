var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(const tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(const tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu= document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}


const texts = ["Web Developer", "UI/UX Designer", "Software Developer","Data Analyst"];
        let currentIndex = 0;
        const textElement = document.getElementById('text');

        function showText(text, i, callback) {
            if (i < text.length) {
                textElement.textContent = text.substring(0, i + 1);
                setTimeout(() => showText(text, i + 1, callback), 100);
            } else if (callback) {
                setTimeout(callback, 1000); 
            }
        }

        function hideText(text, i, callback) {
            if (i >= 0) {
                textElement.textContent = text.substring(0, i);
                setTimeout(() => hideText(text, i - 1, callback), 100);
            } else if (callback) {
                callback();
            }
        }

        function updateText() {
            const text = texts[currentIndex];
            showText(text, 0, () => {
                hideText(text, text.length - 1, () => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    setTimeout(updateText, 500); 
                });
            });
        }

       
        updateText();


gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()
tl.from("#header",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

tl.from("#about",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

tl.from("#skill-Page h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#skill-Page .skills",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page .skills",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

tl.from("#contact",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#portfolio",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#portfolio",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})