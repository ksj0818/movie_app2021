/**
 * props들을 항상 점검할 필요가 있음. (father component로 부터 전달받은 props가 우리가 예상한 props인지.)
 * 이 경우에 list에 있는 이들 각각에 추가할 것은 rating임,
 * 그리고 props types라고 하는 것을 설치 (npm i prop-types) package.json에서 잘 설치 되었는지 확인하기 (dependencise에 prop-types)
 * prop-types가 할 일은 내가 전달받은 props가 내가 원하는 props인지 확인하는것
 * prop-type을 사용해서 어떻게 체크하는지 알아보기, 
 * App.js에서 import PropTypes from "prop-types";
 */

import React from 'react';
import axios from 'axios';
// import PropTypes from "prop-types";


// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//       rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//       rating: 4.7
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//       rating: 4.6
//   }
// ];

// function Food({name, picture, rating}) {
//   return ( 
//     <div>
//       <h2>I Like {name}💖</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// // function renderFood(dish) {
// //   return <Food key={dish.id} name={dish.name} picture={dish.image} />;
// // }

// function App() {
//   return (
//     // map은 array의 각 item에 function을 적용하고 array로 반환해줌
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))};

//       {/* {foodILike.map(renderFood)} arrow function이랑 같은 기능 굳이 함수를 하나 더 만들 필요없으니 arrow방식 쓰자 */} 
//     </div>
//   );
// }



/**
 * state는 보통 우리가 동적 데이터와 함께 작업할 때 만들어짐 / 변하는 데이터, 변하지 않는 데이터.
 * React.Component는 필수임. 왜냐하면 React.Component는 뒤에 많은 것을 가지고 있음 그중 하나가 state
 * class React.Component는 리턴을 가지고 있지 않음 function이 아니기 때문.
 * React.Component는 render method를 가지고 있지만 extends from을 했기 때문에 App에 render method가 있음
 * class component와 function component는 차이점이 존재
 * function component는 펑션이고 뭔가를 리턴함 그리고 스크린에 표시됨,
 * class component는 class임 하지만 react component로 부터 확장되고 스크린에 표시됨. 이걸 render()에 넣어야함.
 * react는 자동적으로 모든 class component의 render()를 실행하고자 함
 * state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변함
 * 리액트 컴포넌트에서 사용하는 유일한 펑션은 render()임.
 * 컴포넌트가 업데이트 될 때 호출되는 다른 펑션이 존재함
 */
//  ※ Mounting- component의 태어남
//  ▶ constructor()
//  -JS에서 class를 만들 때 호출되는 것
//  -coponent가 mount될 때 호출됨
//  ▶ componentDidMount()-component가 처음 render될 때 호출됨
 
//  ※ Updating
//  ▶ componentDidUpdate()-coponet가 업데이트될 때 호출됨
 
//  ※ Unmounting- coponent가 죽는 것
//  ▶ componentWillUnmount()
 
//  setState()호출=>component 호출=>render 호출
//  =>업데이트 완료 후 coponentDidUpdate 실행
// class App extends React.Component {
//   state = {
//     count: 0
//   };
  /**
   * setState()를 호출하면 react는 state를 refresh하고 또한 render()를 호출함
   * button을 클릭하면 react는 똑똑해서 변화가 있는 부분만 업데이트 함.
   * 이게 setState()를 사용하는 이유임
   * 무조건 기억해야할 점!!!!!! >> 매 순간 setState를 호출할 때마다 리액트는 새로운 state와 함께 render()를 호출함
   */
//   plus = () => {
//     this.setState(current => ({count: current.count + 1}));  // state를 set할 때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법. 
//   };
//   minus = () => {
//     this.setState(current => ({count: current.count - 1}));
//   };
//   render() {
//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.plus}>Plus</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }
// }


/**
 * 
 */

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // 이론적으로 우리가 해야할 일은 componentDidMount()에서 data를 fetch하는 것, 
  // 그리고 API로 부터 data fetching이 완료되면
  // We are ready 대신에 movie를 렌더하고 Map를 만들고 movie를 렌더하는것 
  // axios는 마치 fetch() 위에 있는 작은 layer임, 예를 들면 땅콩 주위의 멋진 초콜릿. 기본적으로 이게 axios임.
  // axios 설치: npm install axios
  // import axios from 'axios';
  /**
   * yts에서 만든 API를 사용할것임. (불법적인 토렌트 영화를 업로드 하는 사람들이 있음: YTS)
   * yts.mx 접속 하단에 API 클릭 (팝업광고가 뜨기 전에 눌러야함)
   */

  getMovies = async () => { // JS에게 componentDidMount()가 끝날 때까지 약간 시간이 걸릴 수 있다고 말해야함, 그걸 위해서 async를 넣어줌, async 비동기라고 알려주는것
    const movies = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json'); // await 접근이 끝날 때까지 기다림
  }

  componentDidMount() { 
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 6000)
    this.getMovies();
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        <h1>{isLoading ? 'Loading...' : 'We are ready'}</h1>
      </div>
    )
  }
}

export default App;