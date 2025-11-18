// 기본 세팅된 클래스에 추가 클래스를 추가해주는 함수.
// setting - Title, Subtitle 등에 기본 설정된 클래스
// _className - 사용자가 추가로 설정한 클래스
// numberOfLines ->
// class='line-clamp-1', class = 'line-clamp-2' 와 같이 줄 수 있는 클래스 이름을

export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) =>
  [setting, numberOfLines ? `line-clamp-${numberOfLines}` : '', _className].join(' ')
