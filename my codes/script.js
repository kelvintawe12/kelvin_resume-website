document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});
// Function to reveal skills one by one
function revealSkills() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add('show');
        }, index * 500); // 500ms delay between each skill
    });
}

// Trigger the reveal function once the page loads
window.onload = revealSkills;
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    let index = 0;

    function showNextSkill() {
        if (index > 0) {
            skills[index - 1].classList.remove('show'); // Hide previous skill
        }
        if (index < skills.length) {
            skills[index].classList.add('show'); // Show current skill
            index++;
            setTimeout(showNextSkill, 3000); // Wait 3 seconds before showing next skill
        }
    }

    showNextSkill();
}