const truncateOverview = (overview) => {
  if (overview && overview.length > 150) {
    return overview.substring(0, 150) + "...";
  } else if (overview) {
    return overview;
  } else {
    return "";
  }
};

// menu toggle using hidden class reference below
// pulled from capstone wedding form js file
document.addEventListener('DOMContentLoaded', function () {
    const toggleFormButtons = document.querySelectorAll('.toggleFormButton');
    const formContainers = document.querySelectorAll('.formContainer');

    toggleFormButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            const formContainer = formContainers[index];
            formContainer.classList.toggle('hidden');
        });
    });

    let formSubmitted = false;

    document.addEventListener('click', function (e) {
        const isInsideForm = e.target.closest('.formContainer');
        const isFormButton = e.target.closest('.toggleFormButton');
        if (!isInsideForm && !isFormButton && !formSubmitted) {
            formContainers.forEach(function (formContainer) {
                formContainer.classList.add('hidden');
            });
        }
    });

    const closeButtons = document.querySelectorAll('.closeButton');
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            const formContainer = closeButton.closest('.formContainer');
            formContainer.classList.add('hidden');
        });
    });

    document.querySelectorAll('.gform').forEach(function(form) {
        form.addEventListener('submit', function () {
            formSubmitted = true;
        });
    });
});


export { truncateOverview };
