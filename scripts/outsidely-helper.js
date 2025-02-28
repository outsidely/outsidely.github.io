/***********************************
 outsidely helper
 ***********************************/

/*  
  const totalSeconds = 7500; // Example: 7500 seconds
  const formattedTime = formatTime(totalSeconds);
  console.log(formattedTime); // Output: 02:05:00
*/
function formatTime(seconds) {
    var rtn = "";
    if(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
    
      const formattedHours = String(hours).padStart(2, ' ');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
      rtn = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;  
    } 
    return rtn;
  }

/* Example usage:
  const isoDate = '2025-02-20T10:30:45.000Z';
  const formattedDate = formatDate(isoDate);
  console.log(formattedDate); // Output: 20-02-2025 10:30:45
*/
function formatDate(isoDateString, format) {
  var fmtDate = "";
  
  if(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    fmtDate = format || `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;  
  }

  return fmtDate;
}

function formatDateWords(isoDateString, format) {
  var fmtDate = "";
  
  if(isoDateString) {
    const date = new Date(isoDateString);
    const options= {
      weekday:"long", year:"numeric", month:"long", day:"numeric",
      hour:"numeric", minute:"numeric"
    };
    fmtDate = date.toLocaleDateString(undefined, options);
  }
  return fmtDate;
}


/*
  let meters = 10;
  let feet = metersToFeet(meters);
  console.log(meters + " meters is equal to " + feet + " feet");
 */ 
function metersToFeet(meters) {
  var rtn = "";
  if(meters) {
  rtn = Math.ceil(meters * 3.28084).toString()+ " feet";
  } 
  return rtn;
}

function metersToMiles(meters, noLabel) {
  var rtn = "";
  if(meters) {
    rtn = meters*0.000621371192;
    rtn = rtn*10;
    rtn = Math.round(rtn);
    rtn = rtn/10;
    if(noLabel==true) {
      rtn = rtn;
    } else {
      rtn = rtn.toString() + " miles";
    }
  }
  return rtn;
}
  
function metersToKilometers(meters, noLabel) {
  var rtn = "";
  if (meters) {
    if(noLabel===true) {
      rtn = Math.round(meters / 1000);
    } else {
      rtn = Math.round(meters / 1000).toString() + " km";
    }    
  } 
  return rtn;
}

function computeSpeed(meters, seconds, units) {
  var rtn = "";
  var distance = 0;
  var hours = 0;
  var unt = units || "mph";
  if (meters && seconds) {
    hours = seconds / 3600;
    if(unt==="mph") {
      distance = metersToMiles(meters,true);
    } else {
      distance = metersToKilometers(meters, true)
    }
    rtn = Math.round(((distance * hours) * 100))/100;
  }
  return rtn.toString()+" "+unt;
}

function computePace(time, length, units) { 
  var rtn = "";
  var unt = units || "mi"
  var distance = 0;

  if(time && length) {
    var totalSeconds = time;

    if(unt==="mi") {
      distance = metersToMiles(length,true);
    } else {
      distance = metersToKilometers(length,true);
    }
    const secondsPerDistance = totalSeconds / distance;
  
    const minutes = Math.floor(secondsPerDistance / 60);
    const seconds = Math.round(secondsPerDistance % 60);
  
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    rtn = minutes + ":" + formattedSeconds + "/" + unt; 
  }
  return rtn
}

function formatName(firstname, lastname, userid) {
  var rtn = "";
  if(firstname && lastname) {
    rtn = firstname + "&nbsp;" + lastname;
  } else {
    rtn = userid || "Guest";
  }
  return rtn;
} 

function formatStats(distance, time, units) {
  var rtn = "";
  var meters = 0
  var seconds = time;
  var unt = units || "miles";
  var distString = "";
  var paceString = "";
  var speedString = "";

  if(distance && time) {
    meters = distance;
    seconds = time;
    if(unt==="miles") {
      distString = metersToMiles(meters);
      paceString = computePace(seconds,meters);
      speedString = computeSpeed(meters, seconds);
    } else {
      distString = metersToKilometers(meters);
      paceString  = computePace(seconds, meters, "km");
      speedString = computeSpeed(meters, seconds, "kph");
    }
    rtn = distString + "&nbsp;" + paceString + "&nbsp;" + speedString;
  }
  return rtn;
}

function setTextArea(value) {
  var rtn = value || "";;
  rtn = value;
}

function formatActivityType(value) {
  var rtn = "";
  var rtn = '<img src="images/'+value+'.png" class="activity" />'
  return rtn;
}

function setTitle(value) {
  var rtn = "";
  var rtn = '<b class="activityTitle">'+(value || "")+'<b/>'
  return rtn;
}

function selectActivity(value, actTypes) {
  var rtn = value;
  /*
  var actTypes = [
    {name:"run",value:"Run"},
    {name:"ride",value:"Ride"},
    {name:"other",value:"Other"}
  ]
    */
  for(var t in actTypes) {
    if(value==actTypes[t].activitytype) {
      rtn = actTypes[t].label;
    }
  }
  return rtn;
}

// cookie support
function setCookie(name,value,days) {
  var rtn = false;
  var dy = days || 30;
  var dt = new Date();
  var expires = "";
  if(name && value) {
    dt.setTime(dt.getTime() + (dy*24*60*60*1000));
    expires = "expires="+dt.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    rtn = true;
  }
  return rtn;
}

function getCookie(name) {
  var rtn = "";
  var dCookie = "";
  var ca = [];
  var c = "";
  if(name) {
    name = name+"=";
    dCookie = decodeURIComponent(document.cookie);
    ca = dCookie.split(";");
    for(var i=0; i<ca.length; i++) {
      c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1);
      }
      if(c.indexOf(name)==0) {
        return c.substring(name.length, c.length);
      }  
    }
  }
  return rtn;
}