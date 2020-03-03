export class ArticlesService{
    getArticleUne(){
        const data = {
            titre :"titre article a la une",
            urlImg : [
                "assets/image1.jpg",
                "assets/image2.jpg"
            ],
            
            contenu : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quidem eius necessitatibus voluptatum magni labore aspernatur, suscipit quod ad quaerat, quia perferendis? Amet nisi vel cumque illum nemo omnis accusamus!"
        }
        return data;
    }

    getArticlesGrille(){
        const data = [
            {titre : "article1" , url:"https://via.placeholder.com/200x100"},
            {titre : "article2" , url:"https://via.placeholder.com/200x100"},
            {titre : "article3" , url:"https://via.placeholder.com/200x100"},
            {titre : "article4" , url:"https://via.placeholder.com/200x100"},
            {titre : "article5" , url:"https://via.placeholder.com/200x100"},
            {titre : "article6" , url:"https://via.placeholder.com/200x100"},
            {titre : "article7" , url:"https://via.placeholder.com/200x100"},
            {titre : "article8" , url:"https://via.placeholder.com/200x100"},
        ]
        return data;
    }

    getLastArticle(){
        const data = [];
        const all = this.getArticlesGrille();
        for(let i = 0; i < 5 ; i++){
            data.push(all[i].titre);
        }
        return data;

    }

}