  /********************************
    DETAILS CONTROLS
  ********************************/

  var details = {}
  

  /*
  sample data

  {
    "timestamp": "March 06 at 05:47 PM",
    "activitytype": "Ride",
    "ascent": "561 ft",
    "comments": 0,
    "descent": "568 ft",
    "description": "Windy but crisp ",
    "distance": "2.27 mi",
    "media": [],
    "name": "Quick run",
    "props": 0,
    "starttime": "March 06 at 12:08 PM",
    "time": "20m 32s",
    "userid": "jamund",
    "activityid": "bf5fe35a-a70c-4b2b-a112-64fb2d727b34",
    "previewurl": "data/preview/bf5fe35a-a70c-4b2b-a112-64fb2d727b34",
    "firstname": "Jesse",
    "lastname": "Amundsen",
    "speed": "6.6 mi/hr",
    "trackurl": "data/geojson/bf5fe35a-a70c-4b2b-a112-64fb2d727b34"
  }
  */
  // activities fields
  /*
    {field:"timestamp",prompt:"&nbsp;",type:""},
    {field:"ascent",prompt:"&nbsp;",type:""},
    {field:"descent",prompt:"&nbsp;",type:""},
    {field:"distance",prompt:"&nbsp;",type:""},
    {field:"description",prompt:"&nbsp;",type:"wrap"},
    {field:"starttime",prompt:"&nbsp;",type:""},
    {field:"userid",prompt:"&nbsp;",type:""},
    {field:"activityid",prompt:"&nbsp;",type:""},
    {field:"firstname",prompt:"&nbsp;",type:""},
    {field:"lastname",prompt:"&nbsp;",type:""},
    {field:"trackurl",prompt:"&nbsp;",type:""},
    {field:"activitytype",prompt:"&nbsp;",type:""},
    {field:"name",prompt:"&nbsp;",type:""},
  */
  details.fields = [
    {field:"user",prompt:"&nbsp;",type:"user"},
    {field:"starttime",prompt:"&nbsp;",type:""},
    {field:"name",prompt:"&nbsp;",type:"title"},
    {field:"distance",prompt:"&nbsp;",type:"distance"},
    {field:"ascent",prompt:"&nbsp;",type:"ascent"},
    {field:"description",prompt:"&nbsp;",type:"wrap"},
    {field:"time",prompt:"&nbsp;",type:"time"},
    {field:"speed",prompt:"&nbsp;",type:"speed"},
    {field:"previewurl",prompt:"&nbsp;",type:"image"},
    {field:"comments",prompt:"&nbsp;",type:"comments"},
    {field:"media",prompt:"&nbsp;",type:"media"},
    {field:"props",prompt:"&nbsp;",type:"props"}
  ];
 
  // user object content
  details.content = "";
  
  // user object actions
  /*
  g.actions.user = {
    home:       {target:"app", func:httpGet, href:"/home/", prompt:"Home"}, 
    tasks:      {target:"app", func:httpGet, href:"/task/", prompt:"Tasks"}, 
    users:      {target:"app", func:httpGet, href:"/user/", prompt:"Users"},  
    byNick:     {target:"list", func:jsonForm, href:"/user", prompt:"By Nickname", method:"GET",
                  args:{
                    nick: {value:"", prompt:"Nickname", required:true}
                  }
                }, 
    byName:     {target:"list", func:jsonForm, href:"/user", prompt:"By Name", method:"GET",
                  args:{
                    name: {value:"", prompt:"Name", required:true}
                  }
                }, 
    add:        {target:"list", func:jsonForm, href:"/user/", prompt:"Add User", method:"POST",
                  args:{
                    nick: {value:"", prompt:"Nickname", required:true, pattern:"[a-zA-Z0-9]+"},
                    password: {value:"", prompt:"Password", required:true, pattern:"[a-zA-Z0-9!@#$%^&*-]+"},
                    name: {value:"", prompt:"Full Name", required:true},
                  }
                },
    item:       {target:"item", func:httpGet, href:"/user/{id}", prompt:"Item"},
    edit:       {target:"single", func:jsonForm, href:"/user/{id}", prompt:"Edit", method:"PUT",
                  args:{
                    nick: {value:"{nick}", prompt:"Nickname", readOnly:true},
                    name: {value:"{name}", prompt:"Full Name",required:true}
                  }
                },
    changepw:   {target:"single", func:jsonForm, href:"/task/pass/{id}", prompt:"Change Password", method:"POST",
                  args:{
                    nick: {value:"{nick}", prompt:"NickName", readOnly:true},
                    oldPass: {value:"", prompt:"Old Password", required:true, pattern:"[a-zA-Z0-9!@#$%^&*-]+"},
                    newPass: {value:"", prompt:"New Password", required:true, pattern:"[a-zA-Z0-9!@#$%^&*-]+"},
                    checkPass: {value:"", prompt:"Confirm New", required:true, pattern:"[a-zA-Z0-9!@#$%^&*-]+"},
                  }
                },    
    assigned:   {target:"single", func:httpGet, href:"/task/?assignedUser={id}", prompt:"Assigned Tasks"}
  };
  */
