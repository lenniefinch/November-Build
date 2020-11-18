const getCardContent = (title0, title1, title2, title3, title4, title5, title6, type1, type2, type3, type4, type5, desc1, desc2, desc3, desc4,  description5, details1, details2, detailText1, detailText2, alt1, alt2, alt3, alt4, alt5) => {
    return `
        <div class="card-content">
            
            <h1>${title1}</h1>
            <img src="./assets/${type1}.jpeg" alt="${alt1}">
            

            
            <h2>${title2}</h2>
            <p>
            ${desc1}
            </p>
            
            <h2>${details1}</h2>
            <p>${detailText1}</p>
            <h2>${details2}</h2>
            <p>${detailText2}</p>



            <img src="./assets/${type2}.png" alt="${alt2}">
            <h2>${title3}</h2>
            <p>
            ${desc2}
            </p>



            <img src="./assets/${type3}.png" alt="${alt3}">
            <h2>${title4}</h2>
            <p>
            ${desc3}
            </p>



            <img src="./assets/${type4}.png" alt="${alt4}">
            <h2>${title5}</h2>
            <p>
            ${desc4}
            </p>

            <img src="./assets/${type5}.png" alt="${alt5}">
            <h2>${title6}</h2>
            <p>
            ${desc5}
            </p>

        </div>
    `;
}



//close button


closeButton.style = `
position: fixed;
z-index: 10000;
top: 65px;
right: 65px;
width: 35px;
height: 35px;
border-radius: 50%;
background-color: #3e3e3f;
color: #eaeaea;
font-family: 'Lato', sans-serif;
border-style: none;
`;