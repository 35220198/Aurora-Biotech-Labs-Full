function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileToggle = document.getElementById('mobileToggle');
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('open');
}

function filterResearch(stage, btn) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.research-card');
    cards.forEach(card => {
        if (stage === 'all' || card.dataset.stage === stage) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(title, stage, imgSrc, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalStage').innerText = stage;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalDesc').innerText = description;
    
    const modal = document.getElementById('researchModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('researchModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function handleContact(event) {
    event.preventDefault();
    alert('Thank you for contacting Aurora Biotech Labs. Our institutional relations department will respond shortly.');
}
