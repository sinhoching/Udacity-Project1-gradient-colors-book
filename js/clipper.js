/* Javascript written with help from Joey Lemberg. */
document.querySelectorAll('.cssButton').forEach(function (button) {
    button.addEventListener('click', function () {
        var textOne = this.getAttribute('data-clipboard-text-one');
        var textTwo = this.getAttribute('data-clipboard-text-two');
        navigator.clipboard.writeText(textOne + "\n" + textTwo);
    });
});