var styles = [, 'color: hotpink;', 'display: block', 'line-height: 40px', 'text-align: center', 'font-weight: bold', 'font-size: 2em'].join(';');
console.log('%c Such develop such wow you opened the console. ✨', styles);

function notify(id) {
  if (!("Notification" in window)) {
    alert("Unfortunately you browser doesn't support browser notifications. :( However you can still use our default notifications.")
    clickLightbox();
  } else {
    fireNotification('Ajax has scored!', `FEY ` + db.get(id).FEY + ` - ` + db.get(id).AJA + ` AJA`, 'img/ajax-icon.png', 'ned-bul', 'img/ajax.jpg');
  }
}

function askPermission() {
  // Check if something is not `denied` so that means `default` or `granted`.
  if (Notification.permission !== "denied") {
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
  }
  var notification = new Notification(title, options);
}

askPermission();

function updateDOM(id) {
  document.getElementsByTagName('H2')[0].innerHTML =
  'Score: '
  + 'FEY ' + db.get(id).FEY
  + ' - '
  + 'AJA ' + db.get(id).AJA
};

function clickLightbox(id) {
  setTimeout(
    function() {
      document.querySelector('.lightbox-ajax').innerHTML =
      '<div class="lightbox">'
      + '<div class="box">'
      + '<button onclick="removeBox()">close ✖</button>'
      + '<p>Ajax has scored a goal!</p>'
      + '<p><strong>The current standing is:</strong></p>'
      +  `<p>FEY ` + db.get(id).FEY + ` - ` + db.get(id).AJA + ` AJA</p>`
      +  '</div>';
      +  '</div>';
    }, 3000
  )
}

var counter = 0;

document.getElementById('clickLightbox').onclick = function() {
  notify(counter);
  clickLightbox(counter);
  updateDOM(counter);
  counter++;
};

function removeBox() {
  var removeBox = document.querySelector('.lightbox');
  removeBox.parentNode.removeChild(removeBox);
}
