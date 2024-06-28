import { Search } from '@mui/icons-material';
import React, { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles['image-wrapper']}>
        <img
          src={
            'https://static.tildacdn.com/tild3134-3163-4338-b037-313362366331/vk.png'
          }
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <Search />
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default Header;
