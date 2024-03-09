import React, { useState } from "react";
import Styles from "./style.module.css";

const Card = ({ index, todo, handleEditItem, handleDeleteItem, check }) => {
  console.log('check::', check);
  const [flag, setFlag] = useState(check);
  console.log('flag::', flag);

  return (
    <div key={index} className={Styles.itemCard}>
      <div className={Styles.card_left}>
        <p className={Styles.title}>{todo?.title}</p>
        <p className={Styles.description}>{todo?.about}</p>
      </div>
      <div className={Styles.card_right}>
        {!flag ? (
          <div className={Styles.action_btn} onClick={() => setFlag(true)}>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>i</p>
          </div>
        ) : (
          <>
            <div
              className={Styles.action_btn}
              onClick={() => handleEditItem(index)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667L0 9.5ZM11.8067 2.69334C12.0667 2.43334 12.0667 2.01334 11.8067 1.75334L10.2467 0.193337C9.98667 -0.0666632 9.56667 -0.0666632 9.30667 0.193337L8.08667 1.41334L10.5867 3.91334L11.8067 2.69334Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div
              className={Styles.action_btn}
              onClick={() => handleDeleteItem(index)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.0908 1.12098C1.82301 0.853196 1.38884 0.853195 1.12105 1.12098C0.853263 1.38877 0.853264 1.82294 1.12105 2.09073L3.32324 4.29292C3.71376 4.68344 3.71377 5.31661 3.32324 5.70713L1.12111 7.90927C0.85332 8.17705 0.85332 8.61122 1.12111 8.87901C1.3889 9.1468 1.82307 9.1468 2.09085 8.87901L4.29299 6.67688C4.68351 6.28636 5.31668 6.28635 5.7072 6.67688L7.90928 8.87895C8.17706 9.14674 8.61123 9.14674 8.87902 8.87896C9.14681 8.61117 9.14681 8.177 8.87902 7.90921L6.67695 5.70713C6.28642 5.31661 6.28642 4.68344 6.67695 4.29292L8.87908 2.09079C9.14687 1.823 9.14687 1.38883 8.87908 1.12104C8.61129 0.853252 8.17712 0.853252 7.90933 1.12104L5.7072 3.32317C5.31668 3.7137 4.68351 3.7137 4.29299 3.32317L2.0908 1.12098Z"
                  fill="#FF8303"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
