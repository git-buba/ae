import React, { useMemo, useState } from 'react';
import styles from './CounselForm.module.css';
import { FormField } from '@/components/Form';
import { servicePackageList } from './constants';
import { createLengthValidator, validateEmail, validateNumericLength } from '@/utils/validator';
import { useModal } from '@/components/Modal';

export const CounselForm = () => {
  const [form, setForm] = useState({
    company: '',
    department: '',
    name: '',
    email: '',
    phone: '',
    package: '선택안함',
    message: '',
    agree: false,
  });

  const { openAlertModal } = useModal();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: name === 'agree' ? !prev.agree : value,
    }));
  };

  const selectedPackage = useMemo(() => {
    return servicePackageList.find(({ id }) => form.package === id);
  }, [form.package]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errorList = [
      createLengthValidator(1, 50, '회사명')(form.company),
      createLengthValidator(1, 50, '부서명')(form.department),
      createLengthValidator(1, 50, '성함')(form.name),
      createLengthValidator(1, 900, '문의내용')(form.message),
      validateEmail(form.email),
      validateNumericLength(form.phone, '연락처'),
    ];

    const firstError = errorList.find(error => error !== null);
    if (errorList.some(error => error !== null)) {
      openAlertModal({
        message: firstError,
      });
    } else {
      console.log('제출된 데이터:', form);

      alert('상담 요청이 제출되었습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <FormField
          isRequired
          label="회사명"
          control={
            <input
              type="text"
              name="company"
              placeholder="소속된 회사명을 적어주세요"
              value={form.company}
              onChange={handleInputChange}
            />
          }
        />
        <FormField
          isRequired
          label="부서명"
          control={
            <input
              type="text"
              name="department"
              placeholder="소속된 부서명을 적어주세요"
              value={form.department}
              onChange={handleInputChange}
            />
          }
        />
        <FormField
          isRequired
          label="성함"
          control={
            <input
              type="text"
              name="name"
              placeholder="담당자 성함을 적어주세요"
              value={form.name}
              onChange={handleInputChange}
            />
          }
        />
        <FormField
          isRequired
          label="이메일"
          control={
            <input
              type="text"
              name="email"
              placeholder="담당자 이메일 주소를 적어주세요"
              value={form.email}
              onChange={handleInputChange}
            />
          }
        />
        <FormField
          isRequired
          label="연락처"
          control={
            <input
              type="text"
              name="phone"
              placeholder="담당자 연락처를 적어주세요"
              value={form.phone}
              onChange={handleInputChange}
            />
          }
        />
        <FormField
          isRequired
          label="문의 서비스 선택"
          control={
            <div className={styles.servicePackageField}>
              <div className={styles.radioWrapper}>
                {servicePackageList.map(({ id, label }) => (
                  <div key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="package"
                      value={id}
                      checked={form.package === id}
                      onChange={handleInputChange}
                    />
                    <label className="radio" htmlFor={id}>
                      <i>
                        <em>{label}</em>
                      </i>
                    </label>
                  </div>
                ))}
              </div>
              {selectedPackage && selectedPackage.id !== '선택안함' && (
                <p className={styles.packageSummery}>
                  <strong>{selectedPackage.label}</strong>는 {selectedPackage.summary}
                </p>
              )}
            </div>
          }
        />
        <FormField
          isRequired
          label="문의 내용"
          control={
            <textarea
              name="message"
              placeholder={`궁금하신 내용과 참고사항을 입력해주세요\n(ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)`}
              value={form.message}
              onChange={handleInputChange}
            />
          }
        />

        <div className={styles.agreementBox}>
          <label className={styles.checkbox}>
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleInputChange} />
            <i>
              <em>개인정보 수집 및 이용에 동의합니다.</em>
            </i>
          </label>
        </div>
        {form.agree && (
          <div className={styles.submitButtonWrapper}>
            <button type="submit" className={styles.submitButton}>
              등록하기
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
