const form = document.getElementById('studentForm');
const idCard = document.getElementById('idCard');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value;
    const idNo = document.getElementById('idNo').value;
    const course = document.getElementById('course').value;
    const photo = document.getElementById('photo').files[0];

    if(photo) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('cardPhoto').src = reader.result;
        }
        reader.readAsDataURL(photo);
    }

    // Set ID card values
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardID').textContent = idNo;
    document.getElementById('cardCourse').textContent = course;

    // Hide form and show ID card
    form.style.display = 'none';
    idCard.style.display = 'block';
});
