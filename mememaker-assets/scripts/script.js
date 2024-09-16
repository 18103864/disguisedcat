const bodyList = document.getElementById('body-list');
const headList = document.getElementById('head-list');
const eyesList = document.getElementById('eyes-list');
const buddyList = document.getElementById('buddy-list');
const bgList = document.getElementById('bg-list');
const bottomList = document.getElementById('bottom-list');
const topList = document.getElementById('top-list');

var current_body = undefined;
var current_head = undefined;
var current_eyes = undefined;
var current_buddy = undefined;
var current_bg = undefined;
var current_bottom = undefined;
var current_top = undefined;

var selected_body = 0;
var selected_head = 0;
var selected_eyes = 0;
var selected_buddy = 0;
var selected_bg = 1;
var selected_bottom = 0;
var selected_top = 0;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'head':
            current_head = image;
            break;
        case 'eyes':
            current_eyes = image;
            break;
        case 'buddy':
            current_buddy = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'bottom':
            current_bottom = image;
            break;
        case 'top':
            current_top = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'head':
            return selected_head;
        case 'eyes':
            return selected_eyes;
        case 'buddy':
            return selected_buddy;
        case 'bg':
            return selected_bg;
        case 'bottom':
            return selected_bottom;
        case 'top':
            return selected_top;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'head':
            selected_head = idx;
            break;
        case 'eyes':
            selected_eyes = idx;
            break;
        case 'buddy':
            selected_buddy = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'bottom':
            selected_bottom = idx;
            break;
        case 'top':
            selected_top = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}

AddParts(bodyList, 'body',0, undefined, 'mememaker-assets/img/base.png', true);

AddParts(headList, 'head',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(headList, 'head',1, 'mememaker-assets/img/icons/head/1.png', 'mememaker-assets/img/head/1.png');
AddParts(headList, 'head',2, 'mememaker-assets/img/icons/head/2.png', 'mememaker-assets/img/head/2.png');
AddParts(headList, 'head',3, 'mememaker-assets/img/icons/head/3.png', 'mememaker-assets/img/head/3.png');
AddParts(headList, 'head',4, 'mememaker-assets/img/icons/head/4.png', 'mememaker-assets/img/head/4.png');
AddParts(headList, 'head',5, 'mememaker-assets/img/icons/head/5.png', 'mememaker-assets/img/head/5.png');
AddParts(headList, 'head',6, 'mememaker-assets/img/icons/head/6.png', 'mememaker-assets/img/head/6.png');
AddParts(headList, 'head',7, 'mememaker-assets/img/icons/head/7.png', 'mememaker-assets/img/head/7.png');
AddParts(headList, 'head',8, 'mememaker-assets/img/icons/head/8.png', 'mememaker-assets/img/head/8.png');

AddParts(eyesList, 'eyes',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(eyesList, 'eyes',1, 'mememaker-assets/img/icons/eyes/1.png', 'mememaker-assets/img/eyes/1.png');
AddParts(eyesList, 'eyes',2, 'mememaker-assets/img/icons/eyes/2.png', 'mememaker-assets/img/eyes/2.png');
AddParts(eyesList, 'eyes',3, 'mememaker-assets/img/icons/eyes/3.png', 'mememaker-assets/img/eyes/3.png');
AddParts(eyesList, 'eyes',4, 'mememaker-assets/img/icons/eyes/4.png', 'mememaker-assets/img/eyes/4.png');
AddParts(eyesList, 'eyes',5, 'mememaker-assets/img/icons/eyes/5.png', 'mememaker-assets/img/eyes/5.png');
AddParts(eyesList, 'eyes',6, 'mememaker-assets/img/icons/eyes/6.png', 'mememaker-assets/img/eyes/6.png');
AddParts(eyesList, 'eyes',7, 'mememaker-assets/img/icons/eyes/7.png', 'mememaker-assets/img/eyes/7.png');
AddParts(eyesList, 'eyes',8, 'mememaker-assets/img/icons/eyes/8.png', 'mememaker-assets/img/eyes/8.png');

AddParts(topList, 'top',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(topList, 'top',1, 'mememaker-assets/img/icons/top/1.png', 'mememaker-assets/img/top/1.png');
AddParts(topList, 'top',2, 'mememaker-assets/img/icons/top/2.png', 'mememaker-assets/img/top/2.png');
AddParts(topList, 'top',3, 'mememaker-assets/img/icons/top/3.png', 'mememaker-assets/img/top/3.png');
AddParts(topList, 'top',4, 'mememaker-assets/img/icons/top/4.png', 'mememaker-assets/img/top/4.png');
AddParts(topList, 'top',5, 'mememaker-assets/img/icons/top/5.png', 'mememaker-assets/img/top/5.png');

AddParts(buddyList, 'buddy',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(buddyList, 'buddy',1, 'mememaker-assets/img/icons/buddy/1.png', 'mememaker-assets/img/buddy/1.png');
AddParts(buddyList, 'buddy',2, 'mememaker-assets/img/icons/buddy/2.png', 'mememaker-assets/img/buddy/2.png');
AddParts(buddyList, 'buddy',3, 'mememaker-assets/img/icons/buddy/3.png', 'mememaker-assets/img/buddy/3.png');
AddParts(buddyList, 'buddy',4, 'mememaker-assets/img/icons/buddy/4.png', 'mememaker-assets/img/buddy/4.png');
AddParts(buddyList, 'buddy',5, 'mememaker-assets/img/icons/buddy/5.png', 'mememaker-assets/img/buddy/5.png');
AddParts(buddyList, 'buddy',6, 'mememaker-assets/img/icons/buddy/6.png', 'mememaker-assets/img/buddy/6.png');
AddParts(buddyList, 'buddy',7, 'mememaker-assets/img/icons/buddy/7.png', 'mememaker-assets/img/buddy/7.png');

AddParts(bgList, 'bg', 1, 'mememaker-assets/img/icons/background/1.png', 'mememaker-assets/img/background/1.png', true);
AddParts(bgList, 'bg', 2, 'mememaker-assets/img/icons/background/2.png', 'mememaker-assets/img/background/2.png');
AddParts(bgList, 'bg', 3, 'mememaker-assets/img/icons/background/3.png', 'mememaker-assets/img/background/3.png');
AddParts(bgList, 'bg', 4, 'mememaker-assets/img/icons/background/4.png', 'mememaker-assets/img/background/4.png');
AddParts(bgList, 'bg', 5, 'mememaker-assets/img/icons/background/5.png', 'mememaker-assets/img/background/5.png');
AddParts(bgList, 'bg', 6, 'mememaker-assets/img/icons/background/6.png', 'mememaker-assets/img/background/6.png');
AddParts(bgList, 'bg', 7, 'mememaker-assets/img/icons/background/7.png', 'mememaker-assets/img/background/7.png');
AddParts(bgList, 'bg', 8, 'mememaker-assets/img/icons/background/8.png', 'mememaker-assets/img/background/8.png');
AddParts(bgList, 'bg', 9, 'mememaker-assets/img/icons/background/9.png', 'mememaker-assets/img/background/9.png');
AddParts(bgList, 'bg', 10, 'mememaker-assets/img/icons/background/10.png', 'mememaker-assets/img/background/10.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 600;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 600);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 600 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 600 );
    }

    if(current_head != undefined) {
        context.drawImage(current_head, 0, 0, 400, 600 );
    }

    if(current_buddy != undefined) {
        context.drawImage(current_buddy, 0, 0, 400, 600 );
    }

    if(current_eyes != undefined) {
        context.drawImage(current_eyes, 0, 0, 400, 600 );
    }
    
    // if(current_bottom != undefined) {
    //     context.drawImage(current_bottom, 0, 0, 400, 400 );
    // }

    if(current_top != undefined) {
        context.drawImage(current_top, 0, 0, 400, 600 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('head', 0);
    selectParts('eyes', 0);
    selectParts('buddy', 0);
    selectParts('bg', 1);
    // selectParts('bottom', 1);
    selectParts('top', 0);
}

const randomBtn = document.getElementById('random-btn');

randomBtn.onclick = () => {
    const randHead = randRange(0, 8);
    const randEyes = randRange(0, 8);
    const randBuddy = randRange(0, 7);
    const randBg = randRange(1, 10);
    // const randbottom = randRange(0, 10);
    const randtop = randRange(0, 5);

    selectParts('head', randHead);
    selectParts('eyes', randEyes);
    selectParts('buddy', randBuddy);
    selectParts('bg', randBg);
    // selectParts('bottom', randbottom);
    selectParts('top', randtop);
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'dbilly.png';
    link.href = canvas.toDataURL()
    link.click();
}


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-buttons button');
    const selectors = document.querySelectorAll('.selector');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            selectors.forEach(selector => selector.classList.remove('active'));
            document.getElementById(button.dataset.category).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.categories');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});

function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "s", "c", "x","u");
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        //IE
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which;
        //firefox
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}