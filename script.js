// 显示弹窗
function showModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("show"); // 添加 "show" 类来显示弹窗
}

// 关闭弹窗
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show"); // 移除 "show" 类来隐藏弹窗
}

// 为文档添加点击事件，以便点击页面的任意区域关闭弹窗
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) { // 如果点击的是弹窗外部区域
        closeModal();
    }
});

