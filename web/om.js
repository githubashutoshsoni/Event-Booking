function live() {
console.log('hell');

if(document.getElementById('username').value!="root"  )
{

window.location.assign("/userindex.html");

}

else if (document.getElementById('password').value=="root@123" ){


  window.location.assign("/index.html");


  }
}
  live();
