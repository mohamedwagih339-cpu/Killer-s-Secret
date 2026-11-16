// Shows startup feedback and provides a recoverable reload action for load failures.
(function () {
  function showStartupError() {
    const loading = document.getElementById("loading-screen");
    const errorScreen = document.getElementById("load-error-screen");
    if (loading) loading.classList.add("hidden");
    if (errorScreen) errorScreen.classList.remove("hidden");
    document.body.classList.remove("app-loading");
  }

  function markGameReady() {
    const loading = document.getElementById("loading-screen");
    const errorScreen = document.getElementById("load-error-screen");
    if (loading) loading.classList.add("hidden");
    if (errorScreen) errorScreen.classList.add("hidden");
    document.body.classList.remove("app-loading");
  }

  window.showStartupError = showStartupError;
  window.markGameReady = markGameReady;

  window.addEventListener("error", function (event) {
    if (event.target && event.target.tagName === "SCRIPT") {
      showStartupError();
      return;
    }
    if (event.error) showStartupError();
  }, true);

  window.addEventListener("unhandledrejection", showStartupError);

  document.addEventListener("DOMContentLoaded", function () {
    const retry = document.getElementById("btn-load-error-retry");
    if (retry) retry.addEventListener("click", function () {
      window.location.reload();
    });
  });
})();
