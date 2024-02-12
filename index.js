const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelement", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
 
  document.querySelectorAll(".eleme").forEach(function(ele) {
    var rotate = 0;
    var diffrot = 0;
    ele.addEventListener("mouseleave", function (dets) {
      gsap.to(ele.querySelector("img"), {
        opacity: 0,
        // ease: Power3,
        // duration: 0.5,
      });
    });
    ele.addEventListener("mousemove",function(dets){
      var diff = dets.clientY - ele.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(ele.querySelector("img"), {
        opacity: 1,
        ease: Power1,
        top: diff,
        left: dets.clientX,
       
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    })
    
  });
 
  firstPageAnim()


  var timeout;

 
  
  
  
  function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      this.document.querySelector("#minicircle").style.opacity=1
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower();
  let now=new Date();
  let y=now.getFullYear();
  let t=now.getHours()
  let p=now.getMinutes()
  console.log(typeof(t))
 let time=()=>{
  if ((t>=1) &&(t<=12)){
        return "AM"
  }
  else{
      return "PM"
  }
}
document.getElementById("time").innerHTML=`${t}:${p} `+ time()
document.getElementById("year").innerHTML=y

