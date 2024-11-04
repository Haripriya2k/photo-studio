document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('services-container').scrollBy({
        left: -300, // Adjust scroll distance
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('services-container').scrollBy({
        left: 300, // Adjust scroll distance
        behavior: 'smooth'
    });
});
function toggleDescription(serviceItem) {
    const description = serviceItem.querySelector('.service-description');
    const isVisible = description.style.display === 'block';

    // Hide all descriptions first
    document.querySelectorAll('.service-description').forEach(desc => desc.style.display = 'none');

    // Toggle visibility of the clicked item's description
    description.style.display = isVisible ? 'none' : 'block';
}

