import React, { useState, useEffect } from 'react';

import Content from './content';

import { getAllUsers } from '../service';

function List() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsers();
      setUsers(response);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return <Content users={users} loading={loading} />;
}

export default List;
