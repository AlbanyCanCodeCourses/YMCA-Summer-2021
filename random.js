    // This script was supplied free by Hypergurl and tweaked by Alligator Boogaloo
    // http://www.hypergurl.com
    // JavaScript to interpolate random images into a page.
    var chachacha = 5;
    // Number of alternative images
    var xyxy = new Array(chachacha);
    // Array to hold filenames
    xyxy[0] = "random/random001.gif";
    xyxy[1] = "random/random002.gif";
    xyxy[2] = "random/random003.gif";
    xyxy[3] = "random/random004.gif";
    xyxy[4] = "random/random005.gif";

    function pickRandom(range) {
        if (Math.random) {
            return Math.round(Math.random() * (range - 1));
        } else {
            var now = new Date();
            return (now.getTime() / 1000) % range;
        }
    }
    // Write out an IMG tag, using a randomly-chosen image name.
    var choice1 = pickRandom(chachacha);
    //