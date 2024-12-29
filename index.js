const Div = styled.div`
  background-color: #f5f5dc;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 20px;
`;

const Img = styled.img`
  border-radius: 20px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Text = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
`;

const InfoDiv = styled.div`
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: initial;
`;

const TextInfo = styled.p`
  font-size: 14px;
  color: #333333;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const Difficulty = styled.div`
  height: 100px;
  background-color: ${(props) =>
    props.difficulty === 3
      ? 'red'
      : props.difficulty === 1
      ? 'yellow'
      : 'white'};
  width: 210px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: ${(props) =>
    props.difficulty === 3 ? '0px 4px 10px rgba(255, 0, 0, 0.4)' : 'none'};
 
  justify-content: space-between;
`;
const TextDifficult = styled(Text)`
text-align:start;
`
const Button = styled.button`
height:40px;
width:60px;
background-color: #f5f5dc;
color:black;
border-radius:20px;
border:none;
margin-left:10px;
&:hover{
  background-color:pink;
}
`
const App = () => (
 
  <Div>
  <InsideContainer>
<Wrapper>
<Img src="./burger.jpeg" alt="burger"></Img>
<Text>Smoked salmon burger</Text>
<InfoDiv>
<Icon src="./time.png" alt="time"></Icon>
<TextInfo>20 min</TextInfo>
<Icon src="./statics.png" alt="statics"></Icon>
<TextInfo>6 servings</TextInfo>
<Icon src="./signal-alt.png" alt="level"></Icon>
<TextInfo>210 calories</TextInfo>
</InfoDiv>
<Difficulty difficulty={0}>
  <TextDifficult>Difficulty</TextDifficult>
  <Button>Easy</Button>
  <Button>Medium</Button>
  <Button>Hard</Button>
</Difficulty>
</Wrapper>
<Wrapper>
<Img src="./salad.jpg" alt="salad"></Img>
<Text>Tomatoes With Creamy Feta</Text>
<InfoDiv>
<Icon src="./time.png" alt="time"></Icon>
<TextInfo>15 min</TextInfo>
<Icon src="./statics.png" alt="statics"></Icon>
<TextInfo>3 servings</TextInfo>
<Icon src="./signal-alt.png" alt="level"></Icon>
<TextInfo>600 calories</TextInfo>
</InfoDiv>
<Difficulty difficulty={0}>
  <TextDifficult>Difficulty</TextDifficult>
  <Button>Easy</Button>
  <Button>Medium</Button>
  <Button>Hard</Button>
</Difficulty>
</Wrapper>
<Wrapper>
<Img src="./potato.jpg" alt="potato"></Img>
<Text>Spicy potato salad</Text>
<InfoDiv>
<Icon src="./time.png" alt="time"></Icon>
<TextInfo>30 min</TextInfo>
<Icon src="./statics.png" alt="statics"></Icon>
<TextInfo>2 servings</TextInfo>
<Icon src="./signal-alt.png" alt="level"></Icon>
<TextInfo>320 calories</TextInfo>
</InfoDiv>
<Difficulty difficulty={1}>
  <TextDifficult>Difficulty</TextDifficult>
  <Button>Easy</Button>
  <Button>Medium</Button>
  <Button>Hard</Button>
</Difficulty>
</Wrapper>
<Wrapper>
<Img src="./chicken.jpg" alt="chicken"></Img>
<Text>Chicken Biryani</Text>
<InfoDiv>
<Icon src="./time.png" alt="time"></Icon>
<TextInfo>40 min</TextInfo>
<Icon src="./statics.png" alt="statics"></Icon>
<TextInfo>4 servings</TextInfo>
<Icon src="./signal-alt.png" alt="level"></Icon>
<TextInfo>700 calories</TextInfo>
</InfoDiv>
<Difficulty difficulty={3}>
  <TextDifficult>Difficulty</TextDifficult>
  <Button>Easy</Button>
  <Button>Medium</Button>
  <Button>Hard</Button>
</Difficulty>
</Wrapper>
  </InsideContainer>
  </Div>

);
ReactDOM.render(<App />, document.getElementById('root'));