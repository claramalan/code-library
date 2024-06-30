document.querySelector('.side-text-right').addEventListener('mouseover', function() {
    this.classList.add('brown-text');
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.special-link');
    const container = document.querySelector('.special-links-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const usedPositions = [];

    console.log(`Container dimensions: ${containerWidth}x${containerHeight}`);

    links.forEach(link => {
        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;
        let randomX, randomY, overlap;

        console.log(`Link dimensions: ${linkWidth}x${linkHeight}`);

        do {
            // Generate random positions
            randomX = Math.floor(Math.random() * (containerWidth - linkWidth));
            randomY = Math.floor(Math.random() * (containerHeight - linkHeight));

            // Check for overlap with existing links
            overlap = usedPositions.some(pos => {
                return (
                    randomX < pos.x + pos.width &&
                    randomX + linkWidth > pos.x &&
                    randomY < pos.y + pos.height &&
                    randomY + linkHeight > pos.y
                );
            });
        } while (overlap);

        // Save the position
        usedPositions.push({ x: randomX, y: randomY, width: linkWidth, height: linkHeight });

        // Apply positions
        link.style.left = `${randomX}px`;
        link.style.top = `${randomY}px`;

        console.log(`Positioning link: ${link.textContent.trim()} at (${randomX}, ${randomY})`);
    });
});
