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

// script to handle the submission of the form input and collect the data
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Capture the form data
        const formData = new FormData(form);
        
        // Access the form data values
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation to check if the fields are filled
        if (!name || !email) {
            alert('Please fill out your name and email.');
            return;
        }

        // Optional: Additional validation for the email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission using fetch (AJAX)
        fetch('#', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Assuming the server sends back a success message
            if (response.ok) {
                // Display success message
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
            } else {
                // Display error message if the response is not ok
                document.getElementById('errorMessage').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
            }
        })
        .catch(error => {
            // Handle any error during the submission process
            console.error('Error submitting the form:', error);
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        });
    });
});

// Get all experience items
const experienceItems = document.querySelectorAll('.experience-item');

// Function to trigger animations
function animateExperienceItems() {
    // Set initial index
    let currentIndex = 0;

    // Function to show the current item
    function showCurrentItem() {
        // Hide all items first
        experienceItems.forEach((item, index) => {
            item.style.animation = 'none'; // Reset animation
            item.style.opacity = '0'; // Hide
            item.style.visibility = 'hidden'; // Set visibility to hidden
        });

        // Set the current item to be visible
        experienceItems[currentIndex].style.visibility = 'visible'; // Set visibility to visible
        experienceItems[currentIndex].style.animation = `slide-in-out 8s ease forwards`; // Apply animation
        experienceItems[currentIndex].style.opacity = '1'; // Make it fully visible

        // Update the index to the next item
        currentIndex = (currentIndex + 1) % experienceItems.length; // Loop back to the start
    }

    // Call the function to show the first item
    showCurrentItem();

    // Set interval to change items every 8 seconds (the duration of the animation)
    setInterval(showCurrentItem, 8000); // 8000 milliseconds = 8 seconds
}

// Start the animation
animateExperienceItems();

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill'); // Select all skill divs
    let delay = 0; // Start with no delay

    // Loop through each skill and add a class to trigger the animation
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add('visible'); // Add the 'visible' class
        }, delay);
        delay += 500; // Increase the delay for the next skill (500ms each)
    });
});
