const registerForm = document.querySelector("#login-form");
const errorDiv = document.querySelector("#error");
const spinner = document.querySelector("#loading-spinner");
const signInButton = registerForm.querySelector('button[type="submit"]');

const pause = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), milliseconds);
  });
};


  registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorDiv.classList.add("hidden");
  spinner.classList.remove("hidden");
  signInButton.disabled = true;

 
  const formData = new FormData(registerForm);

  const username = formData.get("email");
  const password = formData.get("password");

  try {
    await pause(3000);
    const res = await fetch("http://localhost:8001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      errorDiv.innerText = "Erreur survenue lors de l'authentification";
      errorDiv.classList.remove("hidden");
      spinner.classList.add("hidden");
      signInButton.disabled = false;
      console.error("Erreur survenue lors de l'authentification", res.status);
      return;
    }

    const data = await res.json();
    localStorage.setItem("JWT_TOKEN", data.token);
    window.location.href = "index.html";
  } catch (err) {
    console.error("Erreur CATCH : ", err);
  }
});
