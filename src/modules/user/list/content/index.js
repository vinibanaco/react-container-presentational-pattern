import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function Content({ users, loading }) {
  if (loading) {
    return <span className={styles.loading}>Loading...</span>;
  }

  if (!users) {
    return <span className={styles.emptyMessage}>No results found</span>;
  }

  return (
    <ul className={styles.list}>
      {users.map((user) => {
        return <li>{user.login}</li>;
      })}
    </ul>
  );
}

export default Content;

Content.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};
