var styles = [, 'color: hotpink;', 'display: block', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 2em'].join(';');
console.log('%c Such develop such wow you opened the console. ✨', styles);

function notify() {
  if (!("Notification" in window)) {
    clickLightbox();
  } else {
    fireNotification('FEY 0 - 1 AJA', 'Ajax has scored a goal!', 'img/ajax-icon.png', 'ned-bul', 'img/ajax.jpg');
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
    requireInteraction: true
  }
  var notification = new Notification(title, options);
}

askPermission();

function clickLightbox() {
  setTimeout(
    function() {
      document.querySelector('.lightbox-ajax').innerHTML =
      '<div class="lightbox">'
      + '<div class="box">'
      + '<button onclick="removeBox()">close ✖</button>'
      + '<p>Ajax has scored a goal!</p>'
      + '<p><strong>The current standing is: 0 - 1</strong></p>'
      +  '</div>';
      +  '</div>';
    }, 3000
  )
}

document.getElementById('clickLightbox').addEventListener('click', clickLightbox, false);

function removeBox() {
  var removeBox = document.querySelector('.lightbox');
  removeBox.parentNode.removeChild(removeBox);
}
