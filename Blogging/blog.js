var blog = [];

function addBlog() {
    var blogData = {}
    blogData.title = document.getElementById("title").value;
    blogData.desc = document.getElementById("desc").value;
    blogData.imageInfo = document.getElementById("imageId").files[0].name;

    blog.push(blogData);
    sessionStorage.setItem("blog-post", JSON.stringify(blog));
    resetForm();
    storeData();
}

function storeData(){
    var retrieved = JSON.parse(sessionStorage.getItem("blog-post"));
    var blogContainer = document.getElementById('blog-container');
    for (i = 0; i < retrieved.length; i++) {
        console.log(retrieved[i]);
        var space = document.createElement('div')
        var tInfo = document.createElement('h1');
        var dInfo = document.createElement('div');
        var iInfo = document.createElement('img');
        tInfo.id = "titleInfo";
        tInfo.textContent = retrieved[i].title;
        blogContainer.appendChild(tInfo);
        dInfo.id = "descInfo";
        dInfo.textContent = retrieved[i].desc;
        blogContainer.appendChild(dInfo);
        iInfo.id = "imageInfo";
        iInfo.src = retrieved[i].imageInfo;
        blogContainer.appendChild(iInfo);
        space.id = "space";
        space.textContent = "-------------------------------------------------------------------------------------------------------------------------------------------------";
        blogContainer.appendChild(space);
    }
}

function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("imageId").value=""; 
}