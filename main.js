<script>
  // Get the navigation links
  const navLinks = document.querySelectorAll('.navbar ul li a');

  // Add event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the target section ID from the link's href attribute
      const targetId = link.getAttribute('href');

      // Scroll to the target section smoothly with a slower transition
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        speed: 'slow'
      });
    });
  });
</script>
