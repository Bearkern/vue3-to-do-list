import emitter from '@/utilities/emitter';

export default function (response, title = '更新', todo = '') {
  if (response.status >= 200 && response.status <= 299) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${todo}${title}成功`,
    });
  } else {
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
