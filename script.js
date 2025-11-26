const form = document.getElementById("studentForm");
const idCard = document.getElementById("idCard");
const idPhoto = document.getElementById("idPhoto");
const idName = document.getElementById("idName");
const idNumber = document.getElementById("idNumber");
const idCourse = document.getElementById("idCourse");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const photoFile = document.getElementById("photo").files[0];
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const course = document.getElementById("course").value;

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function(event) {
      idPhoto.src = event.target.result;
    }
    reader.readAsDataURL(photoFile);
  }

  idName.textContent = name;
  idNumber.textContent = id;
  idCourse.textContent = course;

  idCard.style.display = "block";
});
