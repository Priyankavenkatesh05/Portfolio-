const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", ()=> {
    if (document.querySelector(".style-switcher").classList.contains("open")) 
    {
        document.querySelector(".style-switcher").classList.remove("open");   
    } 
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style)=> {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        // we should be able to crack the code and submit the code ASAP. match should be started asap and India will bat first
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
// the above line should be able to compile the code successfully
// we need to get the result as per the code,


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() =>
{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() =>
{
    if (document.body.classList.contains("dark")) 
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})