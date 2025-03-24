function jumpto(id) {
        var offset = -60;
        var element = document.getElementById(id);
        if (element) {
            var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            var offsetPosition = elementPosition + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
    }
    
}
