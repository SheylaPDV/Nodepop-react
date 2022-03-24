// import React from 'react';
// import classNames from 'classnames';

// import { ReactComponent as IconUnliked } from '../../assets/images/like.svg';
// import { ReactComponent as IconLiked } from '../../assets/images/like_filled.svg';
// import '../../assets/css/LikeButton.css';

// const LikeButton = ({ children, isLike, onLike }) => {
//   const Icon = isLike ? IconLiked : IconUnliked;

//   return (
//     <div
//       className={classNames('likeButton', {
//         'likeButton--active': isLike,
//       })}
//       onClick={event => {
//         event.preventDefault();
//         onLike(event);
//       }}
//     >
//       <span className="likeButton-icon">
//         <Icon width="20" height="20" />
//       </span>
//       <span className="likeButton-label">{children}</span>
//     </div>
//   );
// };

// export default LikeButton;
