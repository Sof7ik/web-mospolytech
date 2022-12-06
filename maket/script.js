function openCLoseMobileMenu(event)
{
    const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
    mobileMenuWrapper.classList.toggle("opened");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".header__mobile-menu-opener").addEventListener("click", openCLoseMobileMenu)
})