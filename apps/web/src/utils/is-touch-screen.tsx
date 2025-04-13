// 터치스크린 지원 여부를 감지하는 상수
export const isTouchScreen = () => "ontouchstart" in window;

// 값을 터치스크린 여부에 따라 조정하는 함수
// - value: 비터치 디바이스에서 사용할 기본 값
// - valueInTouchScreen: 터치스크린 디바이스에서 사용할 값
// - 반환: isTouchScreen이 true면 valueInTouchScreen, 아니면 value
/**
 * 값을 터치스크린 여부에 따라 조정하는 함수
 * @param {number} value - 비터치 디바이스에서 사용할 기본 값
 * @param {number} valueInTouchScreen - 터치스크린 디바이스에서 사용할 값
 * @returns {number} isTouchScreen ? valueInTouchScreen : value
 *
 * @example
 * <div style={{ fontSize: scale(11, 12) }} />
 *
 */
export const scale = (value: number, valueInTouchScreen: number) =>
  isTouchScreen() ? valueInTouchScreen : value;
