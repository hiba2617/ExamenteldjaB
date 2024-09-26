class ThemeSwitcher {
  constructor() {
    this.body = document.body;
    this.lightBtn = document.getElementById('lightThemeBtn');
    this.darkBtn = document.getElementById('darkThemeBtn');

    this.initTheme();


    this.lightBtn.addEventListener('click', () => this.setTheme('light'));
    this.darkBtn.addEventListener('click', () => this.setTheme('dark'));
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    if (theme === 'dark') {
      this.body.classList.add('dark');
      this.body.classList.remove('light');
    } else {
      this.body.classList.add('light');
      this.body.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});

