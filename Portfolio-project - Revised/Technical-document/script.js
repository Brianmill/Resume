function pressButton() {
    var btn = getElementsByClassName("button");
    btn.click(function() {
        var vis = document.getElementById("opening-and-closing");
        if (vis.style.visibility === 'visible');
            vis.style.visibility = 'hidden';
        return false;
    });
};
