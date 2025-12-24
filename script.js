document.addEventListener('DOMContentLoaded', () => {
    const typewriterTextElement = document.getElementById('typewriter-text');
    const revealBtn = document.getElementById('revealBtn');
    const hiddenContent = document.getElementById('hiddenContent');

    const mainMessage = "Hi Sumaiya, mujhe pata hai tum naaraz ho, aur Aditya dil se maafi maangta hai...";
    let i = 0;

    function typeWriter() {
        if (i < mainMessage.length) {
            typewriterTextElement.innerHTML += mainMessage.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            revealBtn.style.display = 'inline-block';
        }
    }

    setTimeout(typeWriter, 1000);

    revealBtn.addEventListener('click', () => {
        hiddenContent.classList.toggle('active');
        revealBtn.textContent = hiddenContent.classList.contains('active') ? 'Close Message' : 'Click for a Hug!';
    });

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 500);
});
