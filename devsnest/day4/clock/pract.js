setInterval(() => {
    
    tmp = new Date();
    hrs = tmp.getHours();
    min = tmp.getMinutes();
    sec = tmp.getSeconds();
    console.log(tmp);
     console.log(min);
      console.log(hrs);
    
    
    hdeg = 30*hrs + min/2;
    mdeg = 6*min;
    sdeg = 6*sec;

    hour.style.transform = `rotate(${hdeg}deg)`;
    minute.style.transform = `rotate(${mdeg}deg)`;
     second.style.transform = `rotate(${sdeg}deg)`;
    //     d = new Date();
    // htime = d.getHours();
    // mtime = d.getMinutes();
    // stime = d.getSeconds();
    // hrotation = 30*htime + mtime/2;
    // mrotation = 6*mtime;
    // srotation = 6*stime;

    // hour.style.transform = `rotate(${hrotation}deg)`;
    // minute.style.transform = `rotate(${mrotation}deg)`;
    // second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);