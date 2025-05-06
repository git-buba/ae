import styles from './UseProcess.module.css';

const steps = [
  {
    icon: 'https://wiblebiz.kia.com/static/media/ic_process01.0e1e426b456d02c39c31.svg',
    label: '1. 문의 등록',
    description: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    icon: 'https://wiblebiz.kia.com/static/media/ic_process02.6be37d6c813d15e1093a.svg',
    label: '2. 관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    icon: 'https://wiblebiz.kia.com/static/media/ic_process03.6b3ba6c9021087fe5a5f.svg',
    label: '3. 임직원 가입',
    description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    icon: 'https://wiblebiz.kia.com/static/media/ic_process04.06e36adcca64657ba0a6.svg',
    label: '4. 서비스 이용',
    description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
  },
];

const UseProcess = () => {
  return (
    <section className={styles.useProcess}>
      <h2 className={styles.heading}>서비스 이용 절차</h2>
      <ul className={styles.stepList}>
        {steps.map((step, idx) => (
          <li className={styles.stepItem} key={idx}>
            <img src={step.icon} alt={step.label} />
            <span>
              <strong>{step.label}</strong>
              <em>{step.description}</em>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UseProcess;
