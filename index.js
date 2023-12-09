const axios = require('axios');
const domain = 'https://www.ornek.com';

async function getPosts(x) {
    try {
        const response = await axios.get(`${domain}/wp-json/wp/v2/posts?per_page=100&page=${x}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    x = [];
    z = 0;
    for (let i = 1; i < 100; i++) {
        posts = await getPosts(i);
        if (!posts) break;
        if(posts?.length < 1) break;
        try {
            x.push(posts);
        } catch (e) {
            
        }
    }

    x.forEach(element => {
        element.forEach(post => {
            console.log(post.id + " " + post.title.rendered);
            z++;
        });
    });

    console.log(`Toplam ${z} adet post bulundu.`);

})();