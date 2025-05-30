export function formatDate(dateAsString: string) {
  const date = new Date(dateAsString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

export function formatShortTime(second: number) {
  if (second === 0) {
    return 'NOW';
  }

  const absSecond = Math.abs(second);

  if (absSecond < 60) {
    return Math.floor(second) + '초';
  }
  if (absSecond < 3600) {
    return Math.floor(second / 60) + '분';
  }

  if (isNaN(second)) {
    return '-';
  }

  return Math.floor(second / 3600) + '시간';
}

export function formatTime(second: number) {
  const hrs = Math.floor(second / 3600);
  const mins = Math.floor((second % 3600) / 60);
  const secs = Math.floor(second % 60);

  if (hrs > 0) return `${hrs}시간 ${mins}분 ${secs}초`;
  if (mins > 0) return `${mins}분 ${secs}초`;
  return `${secs}초`;
}