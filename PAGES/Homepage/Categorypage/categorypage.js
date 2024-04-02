function CATEGORYPAGE() {
    const CATEGORYDIV=document.querySelector('#category-div');
    const DATAHOLDERDIV=document.querySelector('.dataholderdiv');

    fetch('/PAGES/Homepage/Categorypage/category.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            

            //creating a div to hold categories
            const CATEGORIESHOLDER=document.createElement('div')
            CATEGORIESHOLDER.classList.add('category')
            CATEGORYDIV.append(CATEGORIESHOLDER)

            //adding image to the div
            const CATEGORIESIMAGE=document.createElement('img')
            CATEGORIESIMAGE.classList.add('category-image')
            CATEGORIESHOLDER.append(CATEGORIESIMAGE)
            CATEGORIESIMAGE.src=element.categoryimage

            //adding a name to the category
            const CATEGORIESNAME=document.createElement('p')
            CATEGORIESNAME.classList.add('category-title')
            CATEGORIESHOLDER.append(CATEGORIESNAME)
            CATEGORIESNAME.innerHTML=element.categoryname

            //function to open respective divs
            CATEGORIESHOLDER.addEventListener('click',()=>{
                DATAHOLDERDIV.style.display='block'
                DATAHOLDERDIV.style.top='0' 
                DATAHOLDERDIV.innerHTML=`
                    <header class="category-themes-wrapper">
                        <img class="icons" id="back-icon" src="/icons/arrow-left.png" onclick='closedataholderdiv()' />
                        <h3 id="themes">${element.categoryname}</h3>
                    </header>
                    <div class="recipes-container"></div>
                `
                closedataholderdiv=()=>{
                    DATAHOLDERDIV.style.display='none'
                }

                const RECIPEDATA=document.querySelector('.recipes-container');
                //to fetch cakes data
                fetch('/PAGES/Homepage/Categorypage/recipes.json')
                .then(res=>res.json())
                .then(data=>{
                    data.forEach(element => {
                        
                        //div to hold the respective recipes
                        const RECIPEHOLDER=document.createElement('div')
                        RECIPEHOLDER.classList.add('recipe-wrapper')
                        RECIPEDATA.append(RECIPEHOLDER)

                        //div to hold recipe image
                        const RECIPEIMGEHOLDER=document.createElement('div')
                        RECIPEIMGEHOLDER.classList.add('recipeimg-holder')
                        RECIPEHOLDER.append(RECIPEIMGEHOLDER)

                        //adding image to div
                        const RECIPEIMG=document.createElement('img')
                        RECIPEIMG.classList.add('recipe-image')
                        RECIPEIMG.src=element.recipeimg
                        RECIPEIMGEHOLDER.append(RECIPEIMG)

                        //adding a title to the recipe
                        const RECIPETITLE=document.createElement('h3')
                        RECIPETITLE.classList.add('recipe-title')
                        RECIPETITLE.innerHTML=element.recipetitle
                        RECIPEHOLDER.append(RECIPETITLE)

                        //adding like button to the recipe
                        const RECIPELIKE=document.createElement('img')
                        RECIPELIKE.classList.add('recipe-like')
                        RECIPELIKE.src=element.recipelike
                        RECIPEHOLDER.append(RECIPELIKE)

                        if (localStorage.getItem(element.recipetitle)===element.recipenumber) {

                            RECIPELIKE.src=element.recipeliked
                                
                        } else{
                            
                            RECIPELIKE.src=element.recipelike

                        }

                        //adding eventlistener to show liked icon
                        RECIPELIKE.addEventListener('click',()=>{
                           
                            if (localStorage.getItem(element.recipetitle)) {
                                
                                localStorage.removeItem(element.recipetitle)

                                RECIPELIKE.src=element.recipelike

                            } else{

                                localStorage.setItem(element.recipetitle,element.recipenumber)
                                
                                RECIPELIKE.src=element.recipeliked

                            }
                        })
                        
                        console.log(element)
                    });

                })
            })

        });
    })

    .catch(error=>console.log(error))
}