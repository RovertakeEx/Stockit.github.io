
export const activateSection = (path) => {
    const sectionId = `#${path}`;
    const el = document.querySelector(sectionId);
    const isRefresh = performance.navigation.type === 1;
    
    if (!isRefresh && el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', path);
      }, 50);
    } else {
        // If not found, scroll to top/home
        const home = document.getElementById('home');
        home?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '/');
    }

    setWhatsappButton(path);
}

export const setWhatsappButton = (path) => {
    const wtspBtn = document.querySelector('.floating-container');
    if (path === 'home') {
        wtspBtn.classList.remove('visible');
    } else {
        wtspBtn.classList.add('visible');
    }
}
