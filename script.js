document.addEventListener('DOMContentLoaded', () => {
  if (!AFRAME.components['ask-question']) {
    AFRAME.registerComponent('ask-question', {
      init: function () {
        const questions = [
          "What is your greatest strength?",
          "What is your biggest weakness?",
          "Why do you want to work here?",
          "Where do you see yourself in five years?",
          "Why shoulda we hire you?"
        ];
        const button = this.el;
        const sceneEl = document.querySelector('a-scene');
        const modelEl = document.querySelector('#model');

        if (!sceneEl) return;

        button.addEventListener('click', function () {
          const oldText = document.querySelector('#questionText');
          if (oldText) oldText.remove();

          const randomIndex = Math.floor(Math.random() * questions.length);
          const questionText = document.createElement('a-text');
          questionText.setAttribute('id', 'questionText');
          questionText.setAttribute('value', questions[randomIndex]);
          questionText.setAttribute('position', '0 2 -3');
          questionText.setAttribute('align', 'center');
          questionText.setAttribute('color', 'white');
          questionText.setAttribute('scale', '1.5 1.5 1.5');
          sceneEl.appendChild(questionText);

          if (modelEl) {
            modelEl.setAttribute('position', '0 0.45 -4');
          }
        });

        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
              if (permissionState === 'granted') {}
            }).catch(console.error);
        }
      }
    });
  }
});
