import { useState } from 'react';
import styles from './FaqSearchForm.module.css';
import { useModal } from '@/components/Modal';

type FaqSearchFormProps = {
  searchCount: number | null;
  onSearch: (keyword: string) => void;
};

const FaqSearchForm = ({ onSearch, searchCount }: FaqSearchFormProps) => {
  const [searchText, setSearchText] = useState('');
  const { openAlertModal } = useModal();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (searchText.trim().length < 2) {
          openAlertModal({
            message: '검색어는 2글자 이상 입력해주세요.',
          });
        } else {
          onSearch(searchText);
        }
      }}
    >
      <div className={styles.searchForm}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          {searchText && <button type="button" className={styles.clear} onClick={() => setSearchText('')}></button>}
          <button type="submit" className={styles.submit}></button>
        </div>
      </div>
      {searchCount !== null && (
        <div className={styles.searchStatusBar}>
          <div className={styles.searchResult}>검색결과 총 {searchCount}건</div>
          <div>
            <button
              onClick={() => {
                onSearch('');
                setSearchText('');
              }}
            >
              검색초기화
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default FaqSearchForm;
