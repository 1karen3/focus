    const focusOnMe = document.getElementsByClassName('focusOnMe')[0];
    const mypopup = document.getElementById('mypopup');

    focusOnMe.addEventListener("focusin", showPopup);
    focusOnMe.addEventListener("focusout", hidePopup);

    function showPopup(evt){
        const focusPos = focusOnMe.getBoundingClientRect();
        mypopup.style.left = (focusPos.right + 20) + "px";
        mypopup.style.top = (window.scrollY + focusPos.top - 60) + "px";
        mypopup.style.display = "block";
    }

    function hidePopup(evt) {
        mypopup.style.display = "none";
    }

