const forms = () => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");
  console.dir(forms);

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const messageElement = document.createElement("div");
      messageElement.classList.add("status");
      form.appendChild(messageElement);

      const formData = new FormData();
      formData.append("name", "John");
      formData.append("password", "John123");
      for (var d of formData) console.log(d);
      postData("http://localhost:3000/reflect", formData)
        .then((data) => {
          console.log(data);
          messageElement.textContent = message.success;
        })
        .catch((e) => {
          messageElement.textContent = e;
        })
        .finally(() => {
          setTimeout(() => {
            clearInputs(inputs);
            messageElement.remove();
          }, 3000);
        });

      // clearInputs(inputs);
      console.log("submitted");
    });
  });

  //###########################################################################

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    await new Promise((resolve) => setTimeout(resolve, 500));
    const res = await fetch(url, {
      body: "email=test@example.com&password=pw",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    });
    return await res.text();
  };

  function clearInputs(inputs) {
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  const message = {
    loading: "Loading...",
    success: "Thank You for contacting. We'll get back to you ASAP.",
    failure: "Something went wrong, please try again later.",
  };
};
export default forms;
