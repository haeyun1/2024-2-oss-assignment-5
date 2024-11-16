// 파일 경로: src/App.js
import React, { useState } from "react";
import ShowList from "./components/ShowList";
import AddStudentModal from "./components/AddStudentModal";
import UpdateStudentModal from "./components/UpdateStudentModal";
import DeleteStudentModal from "./components/DeleteStudentModal";
import { Button } from "react-bootstrap";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const refreshStudents = () => {
    window.location.reload(); // 학생 목록을 새로고침하기 위해 사용
  };

  return (
    <div className="container mt-4">
      <h1>학생 관리 시스템</h1>
      <div className="mb-4">
        <Button variant="primary" onClick={handleShowAddModal} className="me-2">
          학생 추가
        </Button>
        <Button
          variant="secondary"
          onClick={handleShowUpdateModal}
          className="me-2"
        >
          학생 업데이트
        </Button>
        <Button variant="danger" onClick={handleShowDeleteModal}>
          학생 삭제
        </Button>
      </div>
      <ShowList />
      <AddStudentModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
        refreshStudents={refreshStudents}
      />
      <UpdateStudentModal
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        refreshStudents={refreshStudents}
      />
      <DeleteStudentModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        refreshStudents={refreshStudents}
      />
    </div>
  );
}

export default App;
