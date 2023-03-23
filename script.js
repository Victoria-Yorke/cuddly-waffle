// Toggle the dropdown menu when clicking on the dropdown button
document.querySelectorAll('.dropdown > a').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var parent = this.parentElement;
    if (parent.classList.contains('open')) {
      parent.classList.remove('open');
    } else {
      document.querySelectorAll('.dropdown').forEach(function(el) {
        el.classList.remove('open');
      });
      parent.classList.add('open');
    }
  });
});

// Toggle the mobile menu when clicking on the toggle button
document.querySelector('.toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('show');
});

// Hide the mobile menu and overlay when clicking on a menu item
document.querySelectorAll('.menu a').forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector('.toggle').classList.remove('active');
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.overlay').classList.remove('show');
  });
});
