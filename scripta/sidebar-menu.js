(function() {
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closeBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    
    openingBtn.addEventListener("click", function() {
        sidebar.classList.add('sidebar--opened');
    });
    
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove('sidebar--opened');
    });
}())
