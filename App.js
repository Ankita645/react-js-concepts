//the heading below has an object returned from createElement function . {} part has all the props
const heading = React.createElement(
    "h1",
    {id: "heading",xyz:"abc"},  //this {} is basically used to give id and attributes
    "React App: separated"
)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);