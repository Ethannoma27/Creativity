document.getElementById('escapeBtn').addEventListener('click', function() {
    // 让页面进入自由状态
    document.body.classList.add('freedom');
    document.getElementById('frame').style.transition = 'all 2s ease-out';
    
    // 更新文本
    setTimeout(function() {
        document.getElementById('message').innerText = '我的人生属于我自己！';
    }, 1500);

    // 触发粒子效果
    createParticles();
});

// 粒子效果函数
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
        particlesContainer.appendChild(particle);

        // 删除粒子
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
}
