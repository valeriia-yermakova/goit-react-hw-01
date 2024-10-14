import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;