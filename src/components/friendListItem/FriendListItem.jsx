import s from "./FriendListItem.module.css";

const FriendListItem = ({ status, avatar, name }) => {
  return (
    <li className={s.friendsLi}>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={s.friendsP}>{name}</p>
      <span className={`${s.status} ${status ? s.green : s.red}`}>
        {status ? "Online" : "Offline"}
      </span>
    </li>
  );
};

export default FriendListItem;
