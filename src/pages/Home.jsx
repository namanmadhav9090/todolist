import React, { useState } from "react";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Styles from "./style.module.css";

const Home = () => {
  const [about, setAbout] = useState("");
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [flag, setFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);



  const getValue = (value) => {
    setItem(value);
  };

  const handleAddItem = () => {
    if(!item) return alert("Please enter title");
    if(!about) return alert("Please enter about section");

    let arr = [...list];

    if (editIndex !== null) {
      arr[editIndex] = {
        title: item,
        about: about,
      };
      setEditFlag(false);
      setEditIndex(null);
      setFlag(false);
    } else {
      arr.push({
        title: item,
        about: about,
      });
    }

    setList(arr);
    setItem("");
    setAbout("");
    setEditIndex(null);
    setFlag(false);
   
  };

  const handleDeleteItem = (index) => {
    setShowDeleteModal(true);
    setDeleteIndex(index);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const handleConfirmDelete = () => {
    const updatedList = [...list];
    updatedList.splice(deleteIndex, 1);
    setList(updatedList);
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const handleEditItem = (index) => {
    setEditFlag(true);
    setEditIndex(index);
    const selectedItem = list[index];
    setItem(selectedItem.title);
    setAbout(selectedItem.about);
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.Nav}>
        <Navbar />
      </div>
      <div className={Styles.top_container}>
        <div className={Styles.input_containers}>
          <div className={Styles.input_left}>
            <Input val={item} getValue={getValue} />
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className={editFlag ? Styles.edit_about : Styles.about_input}
              placeholder="about"
            ></textarea>
          </div>

          <div className={Styles.input_right}>
            {editIndex === null ? (
              <button onClick={handleAddItem}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5 1C13.5 0.447715 13.0523 0 12.5 0H11.5C10.9477 0 10.5 0.447715 10.5 1V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H1C0.447715 10.5 0 10.9477 0 11.5V12.5C0 13.0523 0.447715 13.5 1 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V23C10.5 23.5523 10.9477 24 11.5 24H12.5C13.0523 24 13.5 23.5523 13.5 23V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H23C23.5523 13.5 24 13.0523 24 12.5V11.5C24 10.9477 23.5523 10.5 23 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V1Z"
                    fill="#FF8303"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => handleAddItem()}
                className={
                  editIndex ? Styles.update_btn : Styles.updateflag_btn
                }
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
      <>
        {
          list?.length == 0 ? (
                <div className={Styles.bottom_container_empty}>
                   <p className={Styles.notasks}>No Tasks</p>
                </div>
          ) : (
            <div className={Styles.bottom_container} >
            {list &&
              list?.map((todo, index) => {
                return (
                  <Card
                    index={index}
                    todo={todo}
                    handleEditItem={handleEditItem}
                    handleDeleteItem={handleDeleteItem}
                    check={flag}
                  />
                );
              })}
            {showDeleteModal && (
              <div className={Styles.modalOverlay}>
                <div className={Styles.modalContent}>
                  <p>Delete this task?</p>
                  <div className={Styles.modalButtons}>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          )
        }
      </>
     
    </div>
  );
};

export default Home;
