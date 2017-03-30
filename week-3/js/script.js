// Le Fun Stuff
// var styles = [, 'color: hotpink;', 'display: block', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 2em'].join(';');
// console.log('%c Such develop such wow you opened the console. ✨', styles);

function notify() {
  if (!("Notification" in window)) {
    clickDing();
    clickDing2();
  } else {
    fireNotification('Titel', 'Body', 'img/ajax-icon.png', 'ned-bul', 'img/ajax.jpg');
  }
}

function askPermission() {
  // Check if something is not `denied` so that means `default` or `granted`.
  if (Notification.permission !== "denied") {
    console.log(Notification.permission);
    // API knows it doesn't need to ask for permission if `granted`.
    Notification.requestPermission();
  }
}

//
function fireNotification(title, body, icon, tag, image) {
  var options = {
    body: body,
    icon: icon,
    tag: tag,
    image: image,
    // requireInteraction: true
  }
  var notification = new Notification(title, options);
}

askPermission();

function clickAjax() {
  setTimeout(
    function() {
      document.querySelector('.lightbox-ajax').innerHTML =
      '<div class="lightbox">'
      + '<button onclick="removeBox()">close ✖</button>'
      + '<p>Ajax has scored a goal!</p>'
      + '<p><strong>The current standing is: 0 - 1</strong></p>'
      +  '</div>';
    }, 3000
  )
}

document.getElementById('clickAjax').addEventListener('click', clickAjax, false);


function clickFeyenoord() {
  setTimeout(
    function() {
      document.querySelector('.lightbox-feyenoord').innerHTML =
      '<div class="lightbox">'
      + '<button onclick="removeBox()">close ✖</button>'
      + '<p>Feyenoord has scored a goal!</p>'
      + '<p><strong>The current standing is: 0 - 1</strong></p>'
      +  '</div>';
    }, 3000
  )
}
document.getElementById('clickFeyenoord').addEventListener('click', clickFeyenoord, false);


function removeBox() {
  var removeBox = document.querySelector('.lightbox');
  removeBox.parentNode.removeChild(removeBox);
}
