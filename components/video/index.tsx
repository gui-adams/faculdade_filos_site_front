import styles from '@/components/video/styles.module.scss';

export const Video = () => {
  return (
    <>
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src="https://player.vimeo.com/video/1013621914?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="SIMPLEWAY.S"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      </div>
    </>
  );
};
