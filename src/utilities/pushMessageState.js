export default function (response, title = '更新', todo = '') {
  if (response.status >= 200 && response.status <= 299) {
    this.$store.dispatch('toastMessage/pushMessage', {
      style: 'success',
      title: `${todo}${title}成功`,
    });
  } else {
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message;
    this.$store.dispatch('toastMessage/pushMessage', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
