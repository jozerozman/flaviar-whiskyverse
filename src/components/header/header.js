const target = document.querySelector('.bg-astronaut');

function handleIntersection(entries) {
  entries.map(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-animated');
    } else {
      //   entry.target.classList.remove('is-animated');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });
observer.observe(target);
