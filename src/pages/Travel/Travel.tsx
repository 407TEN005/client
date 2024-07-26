import styles from './Travel.module.scss';
import Button from '@components/Button';
import Modal from '@components/Modal';
import LoadingSpinner from '@components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Travel = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isModalOpen) {
      timer = window.setTimeout(() => {
        setIsModalOpen(false);
        navigate('/commandment');
      }, 5000);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isModalOpen, navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.dday}>D-17</div>
        <div className={styles.title}>온가족이 함께 하는 방콕 휴가</div>
        <div className={styles.travelDate}>2024.08.12 - 2024.08.20</div>
      </div>
      <div className={styles.familyMemberWrapper}>
        <div className={styles.familyMemberTitle}>함께하는 우리 가족</div>
        <div className={styles.familyMemberContainer}>
          <div className={styles.familyMemberImg}></div>
          <div className={styles.familyMemberName}>아빠</div>
        </div>
      </div>
      <div className={styles.commandmentListContainer}>
        <div className={styles.commandmentListTitle}>이번 여행의 10계명</div>
        <div>
          <div className={styles.commandmentItem}>
            <div className={styles.image}></div>
            <div className={styles.info}>
              서로 다른 여행 성향을 파악하고 여행 10계명을 생성해 보세요!
            </div>
            <Button variant="outlined" size="m" onClick={() => setIsModalOpen(true)}>
              여행 10계명 생성하기
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="10계명 생성중">
        <div className={styles.modalImage}></div>
        <LoadingSpinner width={54} height={54} />
        <div>(테스트용: 3초 후 자동으로 이동합니다.)</div>
      </Modal>
    </div>
  );
};

export default Travel;
