export function scrollTo(element: HTMLElement, to: number, duration: number): Promise<void> {
  return new Promise((resolve) => {
    _scrollTo(element, to, duration, resolve);
  });
}

const _scrollTo = (element: HTMLElement, to: number, duration: number, resolve: () => void): void => {
  if (duration <= 0) {
    return resolve();
  }

  let difference = to - element.scrollTop;
  let perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;

    if (element.scrollTop === to) {
      return resolve();
    }

    _scrollTo(element, to, duration - 10, resolve);
  }, 10);
};
