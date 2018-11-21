var head = document.createElement("h1");
head.innerHTML = "Making Ice Cream Sandwiches";
head.style.color = "orange";
document.body.appendChild(head);

var para = document.createElement("p");
para.innerHTML = "Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
para.style.fontSize = "20px";
document.body.appendChild(para);

var div = document.createElement("div");
div.style.padding = "20px";
div.style.backgroundColor = "orange";
var head2 = document.createElement("h3");
head2.innerHTML = "Ingredients";
div.appendChild(head2);
var ul = document.createElement('ul');
var ingredients = ["Cookies and Cream ice cream","Large chocolate chip cookies","M&M's minis","Reese's mini peanut butter cups"];
div.appendChild(ul);
ingredients.forEach(function(name){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += name;
});
document.body.appendChild(div);

var div2 = document.createElement("div");
var image1 = document.createElement("img");
image1.src = "ice-cream.jpg";
image1.style.width = "24%";
var image2 = document.createElement("img");
image2.src = "cookies.jpg";
image2.style.width = "24%";
var image3 = document.createElement("img");
image3.src = "mmminis.jpg";
image3.style.width = "24%";
var image4 = document.createElement("img");
image4.src = "pb.jpg";
image4.style.width = "24%";
div2.appendChild(image1);
div2.appendChild(image2);
div2.appendChild(image3);
div2.appendChild(image4);
document.body.appendChild(div2);

var link = document.createElement("a")
link.href = "https://www.tasteofhome.com/recipes/candy-craze-ice-cream-sandwiches/";
link.innerHTML = "The Taste of Home Website.";
var para2 = document.createElement("p")
para2.innerHTML = "For more information about this recipe, please visit ";
para2.appendChild(link);
document.body.appendChild(para2);
