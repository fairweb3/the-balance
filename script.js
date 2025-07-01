// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Load Council of Echoes (members)
fetch('members.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('members');

    data.forEach(member => {
      const card = document.createElement('a');
      card.href = member.link;
      card.className = 'member-card';
      card.target = '_blank';

      const img = document.createElement('img');
      img.src = https://unavatar.io/x/${member.username};
      img.alt = member.name;
      img.className = 'member-avatar';

      const span = document.createElement('span');
      span.textContent = member.name;

      card.appendChild(img);
      card.appendChild(span);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading members:', error);
  });
