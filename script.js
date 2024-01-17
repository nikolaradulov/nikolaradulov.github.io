function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        const content = section.querySelector('.content');
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    }
}

