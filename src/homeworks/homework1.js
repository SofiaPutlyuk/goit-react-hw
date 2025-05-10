const name = "Sophia"
const imageUrl = "https://st2.depositphotos.com/5482604/8042/i/450/depositphotos_80421542-stock-photo-funny-cat-delivery-service.jpg"
const altImg = "FunnyCat"
const num1 = 2;
const num2 = 3;
const sum = num1 + num2
const colors = ["Червоний", "Синій", "Зелений"]
const InfoShow = ({ web }) => (
  <div>
    <h1>{name}!Ласкаво просимо до нашого сайту!</h1>
    <img src={imageUrl} alt={altImg} />
    {web.map((site, index) => (
      <a href={site.url} key={index}>{site.title}</a>

    ))}
    <p>{sum}</p>
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  </div>
)

export default InfoShow;
