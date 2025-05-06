export const createLengthValidator = (min: number, max: number, name: string) => {
  return (value: string): string | null => {
    if (value.length < min || value.length > max) {
      return `${name} 항목은 ${min}자 이상 ~ ${max}자 이하로 입력해주세요`;
    }

    return null;
  };
};

export const validateEmail = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) return '이메일을 입력해주세요.';
  if (!emailRegex.test(value)) return '이메일 정보는 @를 포함해서 이메일 형식에 맞게 입력해주세요';
  return null;
};

export const validateNumericLength = (value: string, name: string): string | null => {
  const numericRegex = /^[0-9]+$/;

  if (!numericRegex.test(value)) return `${name} 정보는 숫자만 입력해주세요.`;
  if (value.length < 9 || value.length > 12) return `${name} 정보는 숫자만 9자리 이상 ~ 12자리 이하로 입력해 주세요`;
  return null;
};
