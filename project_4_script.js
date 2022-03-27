//3d4a1b09816562d007c754f2d0185a6d
//a3a307dedd3d67da2f4d87613ea61f2d
var url = 'https://gnews.io/api/v4/top-headlines?&token=662d0e2c0f5176b5266cdfca25380901&lang=en';
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
	console.log(data);
       	var txt = "";
	data.articles.forEach((element,i) => {
	     txt += `<div class="row"> 
		     <div class="col-md-3 col-sm-3 col-xs-12">
		           <img src=${element.image} width="100%">
		     </div>
		     <div class="col-md-9 col-sm-9 col-xs-12"> 
	 	          <a href=${element.url} target="_blank" style="target-new: tab;">${element.title}</a><br><br>
		          <i>${element.publishedAt}</i>
		          <p>${element.description}</p> 
		     </div>
		</div>`;
	})
       document.querySelector("#target").innerHTML=txt;   
    });

function searchFunction() {
       let keyWords = document.querySelector("#search").value;
       console.log(keyWords);
       document.querySelector("#target").innerHTML = "<h3>Loading...</h3><img src='searching.jpg' />"; // Thêm biểu tượng loading trong quá trình tải dữ liệu
       let searchUrl = 'https://gnews.io/api/v4/search?q='+keyWords+'&token=662d0e2c0f5176b5266cdfca25380901&lang=en&sortby=relevance';
       fetch(searchUrl)   
       .then(function (response) {
              return response.json();
       })
      .then(function(data) {
	console.log(data);
       	var txt = "";
	data.articles.forEach((element,i) => {
	     txt += `<div class="row"> 
		     <div class="col-md-3 col-sm-3 col-xs-12">
		           <img src=${element.image} width="100%">
		     </div>
		     <div class="col-md-9 col-sm-9 col-xs-12"> 
	 	          <a href=${element.url} target="_blank" style="target-new: tab;">${element.title}</a><br><br>
		          <i>${element.publishedAt}</i>
		          <p>${element.description}</p> 
		     </div>
		</div>`;
	})
               document.querySelector("#target").innerHTML=txt;   
    });
       document.querySelector("#search").value="";
}