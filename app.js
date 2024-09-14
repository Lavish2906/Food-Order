const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "grandChild"}, "This is the grand child of div")))
const heading = React.createElement("h1", {id: "heading"}, "heading from react")
console.log(heading) // this is core react function
const root = ReactDOM.createRoot(document.getElementById("root")) // creation of root is a dom function 
// root.render(heading)
root.render(parent)