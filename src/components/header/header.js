const target = document.querySelector('.bg-astronaut');

function handleIntersection(entries) {
  entries.map(entry => {
    if (entry.isIntersecting) {
      console.log('object');
      entry.target.classList.add('is-animated');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.66 });
observer.observe(target);
