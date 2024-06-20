// my-component-library.js

let enableClickAnimation = false;

function initializeLibrary(options) {
  if (options && options.enableClickAnimation) {
    enableClickAnimation = true;
    document.addEventListener('click', handleDocumentClick);
  } else {
    enableClickAnimation = false;
    document.removeEventListener('click', handleDocumentClick);
  }
}

function handleDocumentClick(e) {
  if (enableClickAnimation) {
    let clickEffect = document.createElement('div');
    clickEffect.className = 'click-animation';
    clickEffect.style.left = `${e.pageX - 10}px`;
    clickEffect.style.top = `${e.pageY - 10}px`;
    document.body.appendChild(clickEffect);

    setTimeout(() => {
      clickEffect.remove();
    }, 500);
  }
}

export { initializeLibrary };
