// Function to switch pages
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Fake login
function login(role) {
  if (role === 'student') {
    let email = document.getElementById('studentEmail').value;
    let password = document.getElementById('studentPassword').value;
    if (email && password) {
      showPage('studentDashboard');
    } else {
      alert("Please enter email and password!");
    }
  } else if (role === 'tutor') {
    let email = document.getElementById('tutorEmail').value;
    let password = document.getElementById('tutorPassword').value;
    if (email && password) {
      showPage('tutorDashboard');
    } else {
      alert("Please enter email and password!");
    }
  }
}
