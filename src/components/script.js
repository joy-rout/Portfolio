// eslint-disable-next-line no-use-before-define
// var typed = new typed(".typing",{
//     strings:["Web Designer" , "Web Developer" , "Gamer"],
//     typeSpeed:100,
//     backspeed:60,
//     loop:true
//   })
  


const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"), 
  totalNavlist = navlist.length; 
  for(let i=0; i<totalNavlist; i++)
    {
      const a = navlist[i].querySelector("a"); 
      a.addEventListener("click", function()
      {
      for(let j=0; j<totalNavlist; j++)
        {
          navlist[j].querySelector("a").classList.remove("active");
        }
      this.classList.add("active")
      })
    }