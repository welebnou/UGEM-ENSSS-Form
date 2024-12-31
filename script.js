document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    const fullName = document.getElementById('fullName').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const yearOfStudy = document.getElementById('yearOfStudy').value;
    const specialty = document.getElementById('specialty').value;
    const studyLanguage = document.getElementById('studyLanguage').value;
    const membershipCard = document.getElementById('membershipCard').files[0];
    const loyalty = document.getElementById('loyalty').checked;

    if (!fullName || !phoneNumber || !email || !profilePicture || !membershipCard || !loyalty) {
        alert("يرجى ملء جميع الحقول بشكل صحيح.");
        return;
    }

    // Here you can handle form submission (e.g., send an email or store data using Google Sheets API)
    alert("تم التسجيل بنجاح!"); // Placeholder for successful submission
});
