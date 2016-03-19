/**
 * Created by maurice on 3/17/2016.
 */

(function (inEen) {

    if (!inEen) throw new Error('inEen is not defined');

    function twee() {
        inEen.een();
    }


    window.addEventListener('load', function(){
        twee();

    });
}(window.inEen));
