    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      }
    });

    document.querySelector('#year').textContent = new Date().getFullYear();

    document.querySelector('#contact-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;

      const fields = new FormData(form);
      const subject = encodeURIComponent(`GeoLab inquiry from ${fields.get('name')}`);
      const body = encodeURIComponent(`${fields.get('message')}\n\nFrom: ${fields.get('name')} (${fields.get('email')})`);
      document.querySelector('#form-note').textContent = 'Opening your email app to send this inquiry.';
      window.location.href = `mailto:hello@geolab.studio?subject=${subject}&body=${body}`;
    });
