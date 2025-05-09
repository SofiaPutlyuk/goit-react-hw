//Homework 2 
const Greeting = props => (
    <h1>{`Привіт,${props.name}!`}</h1>
)
const HomeworkTwo = () => (
    <div>
        <Greeting name="Іван" />
        <Message text="Як справи ?" />
        <Button newText="Яка погода у вас" />
    </div>
)
const Message = props => (
    <h3>{props.text}</h3>
)
function SayWeather(text) {
    alert(text)
}
const Button = props => (
    <button onClick={() => SayWeather(props.newText)}>Click me</button>
)


export default HomeworkTwo;
