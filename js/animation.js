const headerClone = document.querySelector("header").cloneNode(true);
headerClone.classList.add("fixed-top", "container","bg-white", "border-bottom", "rounded","fake-header");

export const onIntersecting = (entries,observer) => {
    const [entry] = entries;
    let eltTagName = entry.target.tagName.toLowerCase();

    // Ajouter un fake header fixe si le header n'est plus visible
    if(eltTagName === "header" && !entry.isIntersecting){
        document.querySelector("body").prepend(headerClone);
    }
    // animer les card quand ils apparaisent
    else if( eltTagName === "div"){
        entry.target.animate([
            {transform:"translateY(50%)",
            opacity:"0"
            },
            {transform:"translateY(0%)",
            opacity:"1"
            },
        ],{
            duration:400,
            delay:100,
        })
        observer.unobserve(entry.target);
    }
    else
        headerClone.remove();
}