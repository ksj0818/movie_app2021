/**
 * props들을 항상 점검할 필요가 있음. (father component로 부터 전달받은 props가 우리가 예상한 props인지.)
 * 이 경우에 list에 있는 이들 각각에 추가할 것은 rating임,
 * 그리고 props types라고 하는 것을 설치 (npm i prop-types) package.json에서 잘 설치 되었는지 확인하기 (dependencise에 prop-types)
 * prop-types가 할 일은 내가 전달받은 props가 내가 원하는 props인지 확인하는것
 * prop-type을 사용해서 어떻게 체크하는지 알아보기, 
 * App.js에서 import PropTypes from "prop-types";
 */

import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.6
  }
];

function Food({name, picture, rating}) {
  return ( 
    <div>
      <h2>I Like {name}💖</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function renderFood(dish) {
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />;
// }

function App() {
  return (
    // map은 array의 각 item에 function을 적용하고 array로 반환해줌
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))};

      {/* {foodILike.map(renderFood)} arrow function이랑 같은 기능 굳이 함수를 하나 더 만들 필요없으니 arrow방식 쓰자 */} 
    </div>
  );
}

export default App;
