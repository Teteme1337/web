const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaViewport);

const linkFonts = document.createElement('link');
linkFonts.href = "https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Open+Sans:wght@400;600&display=swap";
linkFonts.rel = 'stylesheet';
document.head.appendChild(linkFonts);

const linkFonts2 = document.createElement('link');
linkFonts2.href = "https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap";
linkFonts2.rel = 'stylesheet';
document.head.appendChild(linkFonts2);

const title = document.createElement('title');
title.textContent = 'LR14';
document.head.appendChild(title);

const style = document.createElement('style');
style.textContent = `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #FFFFFF;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    #title {
        width: auto;
        height: 84px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 55px;
    }

    h1 {
        font-family: 'Arvo', serif; 
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    }

    h5 {
        font-family: 'Open Sans', sans-serif; 
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        font-weight: 400;
    }

    #main {
        width: auto;
        height: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    .box {
        width: 401px;
        height: 480px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: center;
    }

    .n1 {
        width: auto;
        height: auto;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 2.4px;
        margin-top: 80px;
    }
    
    .n2 {
        width: 210px;
        height: auto;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }
            
    .n3 {
        width: 210px;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 25px;
    }
    
    .butt {
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 999px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #212121;
        margin-top: 65px;
    }

    #box1 {
        background-color: #FFFFFF;
    }

    #box1 > .n1 {
        color: #9FA3A7;
    }

    #box1 > .n2 {
        color: #212121;
    }

    #box1 > .n3 {
        color: #9FA3A7;
    }

    #box1 > .butt {
        background-color: #FFFFFF;
    }

    #box2 {
        background-color: #8F75BE;
    }

    #box2 > .n1 {
        color: #FFC80A;
    }

    #box2 > .n2 {
        color: #FFFFFF;
    }

    #box2 > .n3 {
        color: #FFFFFF;
    }

    #box2 > .butt {
        color: #FFFFFF;
        background-color: #8F75BE;
    }
`;
document.head.appendChild(style);

const titleContainer = document.createElement('div');
titleContainer.id = 'title';

const h1 = document.createElement('h1');
h1.textContent = 'Choose Your Option';

const h5 = document.createElement('h5');
h5.textContent = 'But I must explain to you how all this mistaken idea of denouncing';

titleContainer.appendChild(h1);
titleContainer.appendChild(h5);
document.body.appendChild(titleContainer);

const mainContainer = document.createElement('div');
mainContainer.id = 'main';
document.body.appendChild(mainContainer);

const box1 = document.createElement('div');
box1.className = 'box';
box1.id = 'box1';

const span1_1 = document.createElement('span');
span1_1.className = 'n1';
span1_1.textContent = 'FREELANCER';

const span1_2 = document.createElement('span');
span1_2.className = 'n2';
span1_2.textContent = 'Initially designed to';

const span1_3 = document.createElement('span');
span1_3.className = 'n3';
span1_3.textContent = 'But I must explain to you how all this mistaken idea of denouncing';

const button1 = document.createElement('button');
button1.className = 'butt';
button1.textContent = 'START HERE';

box1.appendChild(span1_1);
box1.appendChild(span1_2);
box1.appendChild(span1_3);
box1.appendChild(button1);
mainContainer.appendChild(box1);

const box2 = document.createElement('div');
box2.className = 'box';
box2.id = 'box2';

const span2_1 = document.createElement('span');
span2_1.className = 'n1';
span2_1.textContent = 'STUDIO';

const span2_2 = document.createElement('span');
span2_2.className = 'n2';
span2_2.textContent = 'Initially designed to';

const span2_3 = document.createElement('span');
span2_3.className = 'n3';
span2_3.textContent = 'But I must explain to you how all this mistaken idea of denouncing';

const button2 = document.createElement('button');
button2.className = 'butt';
button2.textContent = 'START HERE';

box2.appendChild(span2_1);
box2.appendChild(span2_2);
box2.appendChild(span2_3);
box2.appendChild(button2);
mainContainer.appendChild(box2);
