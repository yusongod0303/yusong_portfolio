import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { NavEnum } from '../../data';
import styles from './style.module.less';

const serviceId = 'service_8roywvm';
const templateId = 'template_2n6blcj';
const userId = 'user_XE6o9E5zbiey2wZluHWyi';

interface ContactContent {
  fromName: string;
  replyTo: string;
  message: string;
}

const defaultContactContenct: ContactContent = {
  fromName: '',
  replyTo: '',
  message: '',
};

function sendFeedback(params: { [key: string]: any }): Promise<boolean> {
  return emailjs.send(serviceId, templateId, params, userId).then(
    () => {
      return true;
    },
    () => {
      return false;
    },
  );
}

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [content, setContent] = useState<ContactContent>(defaultContactContenct);

  const handleInputChange = (key: string) => (value: string) => {
    setContent({
      ...content,
      [key]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e?.preventDefault();

    const succ = await sendFeedback({
      from_name: content.fromName,
      reply_to: content.replyTo,
      message: content.message,
    });

    if (succ) {
      alert('메일을 성공적으로 발송했습니다');
      setContent(defaultContactContenct);
    } else {
      alert('메일이 전송되지 못했습니다.');
    }
  };

  return (
    <div id={NavEnum.Contact} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Contact</h2>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} method="POST">
          <input
            placeholder="Your name"
            value={content.fromName}
            onChange={(e) => handleInputChange('fromName')(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={content.replyTo}
            onChange={(e) => handleInputChange('replyTo')(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={content.message}
            onChange={(e) => handleInputChange('message')(e.target.value)}
            required
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
});

export default Contact;
